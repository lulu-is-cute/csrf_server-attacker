//Website that exploits CSRF server
let express = require("express")
let cors = require("cors")

let port = 80

//instances
let app = express()

//express references
app.use(express.static("public"))
app.use(cors())

//main

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/view/client.html`)
})

//express start
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})