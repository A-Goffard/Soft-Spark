from io import BytesIO
from flask import Flask, send_file, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:8080"}})  # Permitir solicitudes CORS solo desde http://localhost:8080

class File(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(150), nullable=False)
    file_data = db.Column(db.LargeBinary, nullable=False)
    version = db.Column(db.String(50), nullable=False)  # Columna para la versión
    language = db.Column(db.String(50), nullable=False)  # Columna para el idioma

# Inicializa la base de datos
def create_tables():
    with app.app_context():
        db.create_all()

# Ruta raíz para pruebas
@app.route('/')
def index():
    return 'API de gestión de archivos'

# Ruta para subir un archivo
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files or 'version' not in request.form or 'language' not in request.form:
        return 'Missing required data', 400
    
    file = request.files['file']
    version = request.form['version']
    language = request.form['language']
    
    if file.filename == '':
        return 'No selected file', 400
    
    new_file = File(filename=file.filename, file_data=file.read(), version=version, language=language)
    db.session.add(new_file)
    db.session.commit()
    return f'File {file.filename} uploaded successfully', 200

@app.route('/file/<int:id>', methods=['GET'])
def get_file(id):
    file_record = File.query.get(id)
    if file_record is None:
        return 'File not found', 404
    
    mime_type = ''
    if file_record.filename.endswith('.pdf'):
        mime_type = 'application/pdf'
    elif file_record.filename.endswith('.doc') or file_record.filename.endswith('.docx'):
        mime_type = 'application/msword'
    elif file_record.filename.endswith('.zip'):
        mime_type = 'application/zip'
    else:
        mime_type = 'application/octet-stream'
    
    return send_file(BytesIO(file_record.file_data), download_name=file_record.filename, as_attachment=True, mimetype=mime_type)

# Ruta para obtener una lista de archivos
@app.route('/file-list', methods=['GET'])
def get_file_list():
    files = File.query.all()
    file_list = [{"id": file.id, "filename": file.filename, "version": file.version, "language": file.language} for file in files]
    return jsonify(file_list)

if __name__ == '__main__':
    create_tables()
    app.run(debug=True, port=5000)
