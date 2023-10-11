-- Criação da tabela para Alunos/Professores
CREATE TABLE AlunosProfessores (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Nome VARCHAR(255) NOT NULL,
    CPF VARCHAR(11) NOT NULL,
    DataNascimento DATE NOT NULL,
    Sala VARCHAR(50) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Cidade VARCHAR(100) NOT NULL,
    Rua VARCHAR(100) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    CEP VARCHAR(8) NOT NULL,
    TipoPessoa VARCHAR(50) NOT NULL
);

-- Inserção de dados de exemplo na tabela AlunosProfessores
-- Inserção de dados de exemplo na tabela AlunosProfessores
INSERT INTO AlunosProfessores (Nome, CPF, DataNascimento, Sala, Email, Cidade, Rua, Numero, CEP, TipoPessoa)
VALUES
    ('João Silva', '12345678901', '1990-05-15', 'Sala A', 'joao@example.com', 'São Paulo', 'Avenida Principal', '123', '12345678', 'Aluno'),
    ('Maria Souza', '98765432101', '1985-02-20', 'Sala B', 'maria@example.com', 'Rio de Janeiro', 'Rua Secundária', '456', '54321876', 'Professor'),
    ('Carlos Santos', '56789012345', '1997-09-10', 'Sala C', 'carlos@example.com', 'Belo Horizonte', 'Rua Central', '789', '98765432', 'Aluno'),
    ('Ana Ferreira', '32109876543', '1980-12-03', 'Sala D', 'ana@example.com', 'Curitiba', 'Rua Principal', '101', '87654321', 'Professor');


SELECT * from AlunosProfessores;