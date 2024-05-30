from io import BytesIO
from flask import Flask, send_file, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:8080"}})  # Permitir solicitudes CORS solo desde http://localhost:8080

class PDFFile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(150), nullable=False)
    file_data = db.Column(db.LargeBinary, nullable=False)

# Inicializa la base de datos
def create_tables():
    with app.app_context():
        db.create_all()

# Ruta raíz para pruebas
@app.route('/')
def index():
    return 'API de gestión de archivos PDF'

# Ruta para subir un archivo PDF
@app.route('/upload', methods=['POST'])
def upload_pdf():
    if 'file' not in request.files:
        return 'No file part', 400
    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400
    pdf_file = PDFFile(filename=file.filename, file_data=file.read())
    db.session.add(pdf_file)
    db.session.commit()
    return f'File {file.filename} uploaded successfully', 200

@app.route('/pdf/<int:id>', methods=['GET'])
def get_pdf(id):
    pdf_file = PDFFile.query.get(id)
    if pdf_file is None:
        return 'File not found', 404
    return send_file(BytesIO(pdf_file.file_data), download_name=pdf_file.filename, as_attachment=True, mimetype='application/pdf')

# Ruta para obtener una lista de archivos PDF
@app.route('/pdf-list', methods=['GET'])
def get_pdf_list():
    pdf_files = PDFFile.query.all()
    pdf_list = [{"id": pdf.id, "filename": pdf.filename} for pdf in pdf_files]
    return jsonify(pdf_list)

if __name__ == '__main__':
    create_tables()
    app.run(debug=True, port=5000)
