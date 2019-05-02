const express = require('express');
const app = express();
PORT = 3005;
app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`)
});
