import express from 'express'
import { spawn } from 'node:child_process'
import fs from 'fs'
import path from 'node:path'

const app = express()



app.get("/lang/:lang", (req, res) => {
    let { lang } = req.params
    let langes = JSON.parse(fs.readFileSync(path.resolve("lang", "lang.json"), 'utf-8'))
    res.json(langes[`${lang}`])
})

app.get("/main", (req, res) => {
    let langes = JSON.parse(fs.readFileSync(path.resolve("lang", "lang.json"), 'utf-8'))
    res.json(langes['ru'])
})

app.get("/language", (req, res) => {
    res.json([
        'en', 'uz'
    ])
})

app.get("/build", (req, res) => {

    try {
        const bat = spawn('cmd.exe', ['npm', 'run', 'build']);
        bat.stdout.on('data', (data) => {
            console.log(data.toString());
        });

    } catch (error) {
        console.log(error);
    }

    res.json({})
})

app.listen(3080, () => console.log("start server 3080"))


