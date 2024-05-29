from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

# Define tu modelo de datos para los archivos PDF
class PDFFile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(100), nullable=False)
    file_data = db.Column(db.LargeBinary, nullable=False)

# Agrega rutas para manejar los archivos PDF
@app.route('/pdf/<int:id>', methods=['GET'])
def get_pdf(id):
    pdf_file = PDFFile.query.get(id)
    return pdf_file.file_data, 200, {'Content-Type': 'application/pdf'}

if __name__ == '__main__':
    app.run()