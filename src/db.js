import pg from 'pg';

export const pool = new pg.Pool({
    user: "kualilabs", // Nombre de usuario de la base de datos
    host: "localhost", // Aqui en docker es el nombre del servicio, pero fuera de docker es localhost
    password: "123456",
    database: "course-db", // Nombre de la base de datos
    port: 5432
});
