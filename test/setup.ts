import { rm } from "fs/promises"
import { connect } from "http2";
import { join } from "path"
//import { getConnection } from "typeorm";

global.beforeEach(async () => {
    try {
        await rm(join(__dirname, '..', 'test.sqlite'));
    } catch (error) {}
});

global.afterEach(async () => {
    try {
        await rm(join(__dirname, '..', 'test.sqlite'));
    } catch (error) {}
});

// global.afterEach(async () => {
//     const conn = getConnection();
//     await conn.close();
// })

