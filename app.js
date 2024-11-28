const express = require('express');
const app = express();

// Port tanımı
const port = 3000;

app.get('/', (req, res) => {
    res.send('Todo App is running!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});

