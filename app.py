from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as requisições

# Banco de dados simples em memória (lista)
students = [
    {"id": 1, "name": "Lola", "species": "Cobra", "age": 2, "enrollment_duration": 6},
    {"id": 2, "name": "Bob", "species": "Camaleão", "age": 4, "enrollment_duration": 12},
    {"id": 3, "name": "Mia", "species": "Iguana", "age": 3, "enrollment_duration": 9}
]

# Rota para obter todos os alunos
@app.route('/api/students', methods=['GET'])
def get_students():
    return jsonify(students)

# Rota para adicionar um novo aluno
@app.route('/api/students', methods=['POST'])
def add_student():
    new_student = request.get_json()
    new_student['id'] = len(students) + 1  # Gerar um id único
    students.append(new_student)
    return jsonify(new_student), 201

# Rota para rodar o servidor
if __name__ == '__main__':
    app.run(debug=True, port=5000)
