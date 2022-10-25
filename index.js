const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('News API Running');
});
// category id 


app.listen(port, () => {
    console.log('Dragon news server running on port', port);
});