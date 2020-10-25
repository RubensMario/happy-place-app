// Programa de teste para inserção, consulta e exclusão de dados no banco

// Se apagar o banco de dados, é necessário fazer uma consulta através desse programa para abrir um novo banco (ou apenas alterar o arquivo?)
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

//prettier-ignore

// Preencher tabela orphanages
Database.then(async (db) => {
  // try {
  //   // inserir dados na tabela
  //   await saveOrphanage(db, {
  //     lat: '-9.5985924',
  //     lng: '-35.7392344',
  //     name: 'Lar dao menin0s',
  //     about:
  //       ' Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco ou vulnerabilidade social.',
  //     whatsapp: '82988881111',
  //     images: [
  //       'https://images.unsplash.com/photo-1595009545055-d5ec0bb8d732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  //       'https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  //     ].toString(),
  //     instructions:
  //       'Venha como se sentir à vontade e traga muito amor e carinho para dar.',
  //     opening_hours: 'Das 8 às 18h',
  //     open_on_weekends: '0'
  //   });
  // } catch {
  //   console.log('Erro ao cadastrar novos dados');
  // }

  
    // Seleciona e armazena todos os campos "*" da tabela orphanages
    // (processo de consulta)
    const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    console.log(selectedOrphanages);

    // Consultar um orfanato pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');


  // Deletar dado específico da tabela
  // Para deletar tudo, basta não especificar o id
  // console.log(await db.run("DELETE FROM orphanages WHERE id= '3' "));

  // Deletar várias linhas da tabale pelos id's (em sequência)
  // console.log(await db.run("DELETE FROM orphanages WHERE id BETWEEN bottom_value AND top_value;));

});
