const express = require('express');
const { waitForFile, waitForSeconds } = require('./utils');
const app = express();
const port = 3000;

app.get('/', async (request, response) => {
    try {
        const result = await waitForFile('./file.txt');
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        response.send('Home');
    }
});

app.listen(port, async () => {
    await waitForSeconds(2);
    console.log(`Running on http://localhost:${port}`);
});