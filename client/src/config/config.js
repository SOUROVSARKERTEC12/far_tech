module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "client",
    PASSWORD: "",
    DB: "tech",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};