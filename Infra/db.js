import mysql from 'mysql2/promise';

export default async function conectar() {
  if (global.conexao && global.conexao.status !== "disconnected") {
    console.log("Reutilizando a conexão existente.");
    return global.conexao;
  }

  try {
    const conexao = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "maxsoft"
    });

    global.conexao = conexao;
    console.log("Conexão bem-sucedida ao banco de dados.");

    return conexao;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  }
}
