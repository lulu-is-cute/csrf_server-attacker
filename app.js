//Website that exploits CSRF server
let express = require("express")
let port = 80

//instances
let app = express()

//express references
app.use(express.static("public"))

//main

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/view/client.html`)
})

//express start
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})