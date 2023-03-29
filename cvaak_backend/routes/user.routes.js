const express = require("express")
const UserModel = require("../models/user.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRouter = express.Router()
require("dotenv").config()

/**
* @swagger
* components:
*   schemas:
*       User:
*           type: object
*           properties:
*               email:
*                   type: string
*                   description: The user's email address
*               password:
*                   type: string
*                   description: The user's password
*               location:
*                   type: string
*                   description: The user's location
*               role:
*                   type: string
*                   description: The user's role, e.g. admin or regular user
*/


// All users

/**
 * @swagger
 * /users/:
 *   get:
 *      tags: [Users]
 *      summary: This will get all the user data from the database
 *      responses:
 *          200:
 *              description: The list of all the users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: "#/components/schemas/User"
*/
userRouter.get("/", async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})

// Registration

/**
 * @swagger
 * /users/register:
 *  post:
 *      tags: [Users]
 *      summary: Register a user
 *      description: This will register a new user to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *      responses:
 *          200:
 *              description: User has been registered
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: "#/components/schemas/User"
 */
userRouter.post("/register", async (req, res) => {
    const { email, password, location, role } = req.body
    const users = await UserModel.findOne({ email })
    if (users) {
        res.status(400).send({
            "message": "Email already registered"
        })
    } else {
        try {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    res.status(400).send({
                        "message": err.message
                    })
                } else {
                    const new_user = new UserModel({
                        email, password: hash, location, role
                    })
                    await new_user.save()
                    res.status(200).send({
                        "message": "User has been registered"
                    })
                }
            });
        } catch (error) {
            res.status(400).send({
                "message": error.message
            })
        }
    }
})

// Login

/**
 * @swagger
 * /users/login:
 *  post:
 *      tags: [Users]
 *      summary: Register a user
 *      description: This will Login a user.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: email used while registering
 *                          password: 
 *                              type: string
 *                              description: password used while registering           
 *      responses:
 *          200:
 *              description: User has been registered
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message: 
 *                                  type: string
 *                                  example: Login Successfull
 *                              token: 
 *                                  type: string
 *                                  example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIwNzdjZTM0YWUyYTMyYWU0NzU2NzciLCJpYXQiOjE2Nzk4NDk3Mjh9.i9kJY-UY4TZBza8Y4FKH7aypRH4m2eK0Je74pn"
 */
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    console.log("body")
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password).then((result) => {
                if (result) {
                    res.status(200).send({
                        "message": "Login Successfull",
                        "token": jwt.sign({ "userId": user._id, role: user.role }, process.env.keyword)
                    })
                } else {
                    res.status(400).send({
                        "message": "Wrong Password"
                    })
                }
            });
        } else {
            res.status(400).send({
                "message": "User not registered"
            })
        }

    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})


module.exports = userRouter