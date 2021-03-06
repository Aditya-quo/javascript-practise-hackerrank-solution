const express = require('express');
const useRouter = require('../api/routes/routes');
const app = express();

app.use( express.json());
app.use( useRouter );

app.listen(3000, ()=> {
    console.log('server is set up.');
});