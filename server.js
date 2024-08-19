const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jayasurya123',
    database: 'student_voting'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.post('/register', (req, res) => {
    const { username, email, date } = req.body;

    const query = `INSERT INTO voters (username, email, date_of_birth) VALUES (?, ?, ?)`;
    db.query(query, [username, email, date], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error registering voter');
        }
        res.send('Voter registered successfully');
    });
});



