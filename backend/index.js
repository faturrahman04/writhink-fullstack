const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors'); 
const dotenv = require('dotenv');

const app = express();
const port = 3000;
dotenv.config();
app.use(cors());

const JWT_KEY = process.env.JWT_TOKEN;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todos_db'
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/register', async (req, res) => {
  const { username, password, confirmPassword } = req.body;
  if (username === "") return res.status(401).json({message: "Username tidak boleh kosong"}); 
  if (password === "") return res.status(401).json({message: "Password wajib diisi!"});
  if (confirmPassword === "" || confirmPassword !== password) return res.status(401).json({message: "Konfirmasi password tidak sesuai"});
  const hash = await bcrypt.hash(password, 10);

  db.query("INSERT INTO users (username, password) VALUES (?, ?)", 
    [username, hash], 
    (err) => {
      if (err) return res.status(500).json({error: err});
      res.json({message: 'User berhasil didaftarkan'});
    }
  );
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM `users` WHERE `username` = ?', [username], async (err, result) => {
    if (err || result.length === 0) return res.status(401).json({success: false,message: 'Username tidak ditemukan'});

    const user = result[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({success: false, message: 'Username atau password salah!'});

    const access_token = jwt.sign({id: user.id, username: user.username}, JWT_KEY, {expiresIn: '1h'});
    return res.json({success: true, token: access_token });
  });
});


function authenticate(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(403).json({error: "No Token"});

  const token = header.split(" ")[1];
  jwt.verify(token, JWT_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid Token"});
    req.user = user;
    next();
  });
}

app.get('/todos', authenticate, (req, res) => {
  const idUser = req.user.id
  db.query('SELECT * FROM `todos` WHERE `user_id` = ?', [idUser], async (err, result) => {
    res.json({result});
  });
});

app.patch('/todos', authenticate, (req, res) => {
  const idUser = req.user.id
  const { id_task, is_done } = req.body;
  db.query('UPDATE `todos` SET `is_done` = ? WHERE `id` = ? AND `user_id` = ?', [is_done, id_task, idUser], async (err, result) => {
    res.json({result});
  });
});

app.get('/todos/add', (req, res) => {
  const idUser = req.user.id
  db.query('INSERT ')
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));