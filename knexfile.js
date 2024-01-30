module.exports = {
    client: 'mysql2',
    connection: {
       host : 'localhost',     
          user : 'root',       
          password : 'usbw',  
          database : 'catalogo'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  };