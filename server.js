const express = require("express") 

const port = 9090

const app = express()


const middleware1 = (req, res, next) => {
  console.log("This is middleware-1")
  next()
}

const middleware2 = (req, res, next) => {
  console.log("This is middleware-2")
  next()
}

app.use(middleware1) 

app.get("/", (req, res) => {
  res.send("Hello World") 
})

app.get("/home", (req, res) => {
  res.send("<h1>Home Page<h1>")
})



app.get("/about", middleware2, (req, res) => {
  res.send("<h1>About Page</h1>")
})

app.get("/contact", middleware2, (req, res) => {
  res.send("<h1>Contact Us</h1>")
})

app.listen(port)