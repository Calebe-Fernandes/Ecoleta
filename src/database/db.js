// npm install sql3
//importar a dependência do sqlite 3
const sqlite3 = require("sqlite3").verbose()
//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db //"exporta" o arquivo para ser utilizado em outros (no caso para server.js)
//node src/database/db.js criou o arquivo de banco de dados / comandos para criar banco estão aqui/ 

//utilizar o objeto de banco de dados para as operações
//db.serialize(( ) => {
    //criar uma tabela com comandos sql
//    db.run(`    
//        CREATE TABLE IF NOT EXISTS places(
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT,
//            name TEXT,
//            address TEXT,
//            address2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXTS
//       );
//    `)


//    inserir dados na tabela
//    const query = `
//    INSERT INTO places(
//        image,
//        name,
//        address,
//        address2,
//        state,
//        city,
//        items
//    ) VALUES (?,?,?,?,?,?,?);
//`
//    const values = [
//        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
//        "Papersider",
//        "Guilherme Gemballa, Jardim América",
//        "Nº 260",
//        "Santa catarina",
//        "Rio do Sul",
//        "Papéis e Papelão"
//    ]

//    function afterInsertData(err){
//        if(err){
//            return console.log(err)
//       }
//
//        console.log("cadastrado com sucesso")
//        console.log(this)
//    }


//    db.run(query,values, afterInsertData)

//consultar os dados da tabela
//    db.all(`SELECT * FROM places `, function(err,rows) {
//        if(err){
//            return console.log(err)
//      }
//       console.log("Aqui estão seus registros")
//        console.log(rows)
//    })

//deletar um dado da tabela
//    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//        if(err){
//           return console.log(err)
//       }

//        console.log("Registro deletado com sucesso")

//   })
//})