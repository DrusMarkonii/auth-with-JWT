const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter')

const PORT = process.env.PORT || 5000;
const DB_URL = `mongodb+srv://DrusMarkonii:298518422@cluster0.5fs8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


const app = express();

app.use(express.json());
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, (req, res) => {
            console.log(`Server started on PORT ${PORT}...`)
        })
    } catch (e) {
        console.log(`ERRORS ___ ${e} `)
    }
}

start()