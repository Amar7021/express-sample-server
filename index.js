const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const postRoutes = require("./routes/postRoutes")

dotenv.config()

// Express app
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use("/api", postRoutes)

// Listen to server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
