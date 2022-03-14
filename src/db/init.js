const Database = require('./config');

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass STRING
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title STRING,
            read INTEGER,
            room INTEGER
        )`);

        await db.close()
    }
}

initDb.init();

