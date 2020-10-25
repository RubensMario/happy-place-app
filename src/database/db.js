const Database = require('sqlite-async');

// Função para criar tabela (e modelo dos dados) no arquivo aberto com open
// db é o próprio banco de dados criado com open
// que fica armazenado na aplicação (database.sqlite)
function execute(db) {
  return db.exec(`
  CREATE TABLE IF NOT EXISTS orphanages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lat TEXT,
    lng TEXT,
    name TEXT,
    about TEXT,
    whatsapp TEXT,
    images TEXT,
    instructions TEXT,
    opening_hours TEXT,
    open_on_weekends TEXT
  );`);
}

// Exportar método para criar (ou abrir) banco de dados em arquivo
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);
