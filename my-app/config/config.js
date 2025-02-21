module.exports = {
    development: {
      username: "ryan",
      password: "IgVjTq4UkUBXlj5cWCmZ1jzIogVgJ92l",
      database: "mydb_u88s",
      host: "dpg-cur2tb2j1k6c73co7kkg-a.oregon-postgres.render.com",
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          "require":true,
          "rejectUnauthorized":false
        }
      },
    },
    production: {
      use_env_variable: "dpg-cur2tb2j1k6c73co7kkg-a.oregon-postgres.render.com",
      dialect: "postgres",
    },
  };
  