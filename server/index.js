import express from 'express';
import bodyParser from 'body-parser'
import http from 'http';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('*', (req, res) => {
    var { query, headers } = req

    res.send(
        {
            ok: true,
            response: JSON.stringify({ query, headers })
        }
    )
})

app.post('*', (req, res) => {
    var { body, headers } = req
    res.send(
        {
            ok: true,
            response: JSON.stringify({ body, headers })
        }
    )
})

var server = http.createServer(app);

server.listen(3000, () => {
    console.log(`server start at port ${3000}`)
});

