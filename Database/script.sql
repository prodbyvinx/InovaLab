CREATE TABLE aluno (
    id_aluno INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    data_nascimento DATE,
    telefone TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL, 
    endereco TEXT NOT NULL
);

CREATE TABLE matricula (
    id_matricula INTEGER PRIMARY KEY AUTOINCREMENT,
    id_aluno INTEGER NOT NULL,
    data_matricula DATE NOT NULL,
    status TEXT CHECK(status IN ('ativo', 'inativo')) NOT NULL,
    data_encerramento DATE,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno)
);

CREATE TABLE treino (
    id_treino INTEGER PRIMARY KEY AUTOINCREMENT,
    id_matricula INTEGER NOT NULL,
    nome_treino TEXT NOT NULL,
    descricao TEXT,
    data_inicio DATE,
    data_fim DATE,
    FOREIGN KEY (id_matricula) REFERENCES matricula(id_matricula)
);

