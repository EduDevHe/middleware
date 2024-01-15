const express = require("express")

const app = express()

app.get("/", middleware, (req, res) => {
  console.log("Inside Home Page")
  res.send("Home Page")

})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

app.listen(3000, () => console.log("Server Started"))



function middleware(req, res, next) {
  if (req.valid) {
    return next()
  }
  res.send("Invalid Request")
}
