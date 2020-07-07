const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
var view = __dirname + "/views/";
var public = __dirname + "/public/";

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'seiha'
});

connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 

//set views file
app.set('views',path.join(__dirname,'views'));
			
//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(public));





app.get('/',(req, res) => {
    res.render('index', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/hotel',(req, res) => {
    res.render('hotel', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/company',(req, res) => {
    res.render('company', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/hotel',(req, res) => {
    res.render('hotel', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/Objek',(req, res) => {
    res.render('Objek', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/studio',(req, res) => {
    res.render('studio', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/sleman',(req, res) => {
    res.render('sleman', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/ratuboko',(req, res) => {
    res.render('ratuboko', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/candiprambanan',(req, res) => {
    res.render('candiprambanan', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/jogjabay',(req, res) => {
    res.render('jogjabay', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/kaliurang',(req, res) => {
    res.render('kaliurang', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/zaki',(req, res) => {
    res.render('zaki', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/dito',(req, res) => {
    res.render('dito', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/faraz',(req, res) => {
    res.render('faraz', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/fauzan',(req, res) => {
    res.render('fauzan', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/felix',(req, res) => {
    res.render('felix', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/haunan',(req, res) => {
    res.render('haunan', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/kuliner',(req, res) => {
    res.render('kuliner', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/admin',(req, res) => {
    res.render('admin', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/admin1',(req, res) => {
    res.render('admin1', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/PC',(req, res) => {
    res.render('PC', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/PH',(req, res) => {
    res.render('PH', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/PP', (req, res) => {
    // res.send('CRUD Operation using NodeJS / ExpressJS / MySQL');
    let sql = "SELECT * FROM pemesanan";
    let query = connection.query(sql, (err, rows) => {
        if (err) throw err;
        res.render('PP', {
            title: 'CRUD Operation using NodeJS / ExpressJS / MySQL',
            pemesanan: rows
        });
    });
});

app.get('/PT',(req, res) => {
    res.render('PT', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/edit',(req, res) => {
    res.render('edit', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});

app.get('/sukses',(req, res) => {
    res.render('sukses', {
        title : 'CRUD Operation using NodeJS / ExpressJS / MySQL'
    });
});


app.post('/save',(req, res) => { 
    let data = {id_nama: req.body.id_nama, id_phone: req.body.id_phone, email: req.body.email, gender: req.body.gender, time_boking: req.body.time_boking, time: req.body.time, Type_kamar: req.body.Type_kamar};
    let sql = "INSERT INTO pemesanan SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/sukses');
    });
});

//MEMBUKA PAGE EDIT PESANAN
app.get('/edit/:userId', (req, res) => {
    const userId = req.params.userId;
    let sql = `Select * from pemesanan where id = ${userId}`;
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.render('edit', {
            title: 'CRUD Operation using NodeJS / ExpressJS / MySQL',
            pesan: result[0]
        });
    });
});

//MENGUPDATE DATA PESANAN
app.post('/updatePesan', (req, res) => {
    const userId = req.body.id;
    let sql = "update pemesanan SET id_nama='" + req.body.id_nama + "',  id_phone='" + req.body.id_phone + "',  email='" + req.body.email + "', gender='" + req.body.gender + "', time_boking='" + req.body.time_boking + "', time='" + req.body.time + "',Type_kamar='" + req.body.Type_kamar + "' where id =" + userId;
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/PP');
    });
});


//MENGHAPUS PESAN
app.get('/delete/:userId', (req, res) => {
    const userId = req.params.userId;
    let sql = `DELETE from pemesanan where id = ${userId}`;
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/PP');
    });
});


// Server Listening
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});