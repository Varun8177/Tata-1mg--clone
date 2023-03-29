const express = require("express")
const Connection = require("./config/db")
const CartRouter = require("./routes/cart.route")
const userRouter = require("./routes/user.routes")
const swaggerJSdoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")
const cors = require("cors")
const productRouter = require("./routes/product.route")
const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())


app.use("/users", userRouter)
app.use("/cart", CartRouter)
app.use("/products", productRouter)

// defination
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CVAAK API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "https://black-skirt.cyclic.app/"
            }
        ]
    },
    apis: ["./routes/*.js"]
}

// specification 
const swaggerSpec = swaggerJSdoc(options)

// building the UI
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerSpec))


app.listen(process.env.port, async () => {
    try {
        await Connection
        console.log("Connected to Database")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`Server running at port ${process.env.port}`)
})