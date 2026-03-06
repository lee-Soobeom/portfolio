import mysql2 from "mysql2/promise";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // DB와 연결 가능한 수
    connectionLimit: 5,
    // 연결 가능한 수가 가득 찼을 때 대기할지 오류를 발생시킬지
    waitForConnections: true,
    // 대기 가능한 요청 수 (0은 무제한)
    queueLimit: 0,
})