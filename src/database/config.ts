import dotenv from 'dotenv';
dotenv.config();
const { PORT, USER_NAME, NODE_ENV,DB_NAME_DEV,DB_NAME_TEST, PASSWORD, HOST, SALT, PEBBER } = process.env;

export default {
    port: PORT,
    username: USER_NAME,
    database: NODE_ENV==='dev'?DB_NAME_DEV:DB_NAME_TEST,
    password: PASSWORD,
    host: HOST,
    salt: SALT,
    pebber: PEBBER,
};
