const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve your static files from 'public' directory

app.listen(port, () => {
    console.log(`Server running at https://prakashnewxy1.github.io/moviesimdb/:${port}/`);
});
