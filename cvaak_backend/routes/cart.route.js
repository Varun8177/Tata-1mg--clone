const express = require("express")
const CartModel = require("../models/cart.model")
const CartRouter = express.Router()
const jwt = require('jsonwebtoken');
const auth = require("../middlewares/auth.middleware");

CartRouter.use(auth)
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the product
 *         src:
 *           type: string
 *           description: The source of the product image
 *         packsize:
 *           type: string
 *           description: The pack size of the product
 *         price:
 *           type: number
 *           format: float
 *           description: The price of the product
 *         strike-price:
 *           type: string
 *           description: The strike-through price of the product
 *         discount-percent:
 *           type: string
 *           description: The discount percentage of the product
 *         maxQty:
 *           type: number
 *           format: integer
 *           description: The maximum quantity of the product that can be purchased
 *         rating:
 *           type: string
 *           description: The overall rating of the product
 *         CardRatingDetail:
 *           type: string
 *           description: Additional rating details for the product
 *         description:
 *           type: string
 *           description: A brief description of the product
 *         category:
 *           type: string
 *           description: The category of the product
 */

/**
 * @swagger
 * /cart/:
 *   get:
 *     tags: [cart]
 *     summary: Get all notes data for the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *           description: The authorization token in the format "Bearer {token}"
 *         required: true
 *         example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOi...
 *     responses:
 *       200:
 *         description: An array of all products associated with the authenticated user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized. User must be authenticated to access this endpoint.
 */


CartRouter.get("/", async (req, res) => {
    const { userId } = req.body

    try {
        const cartItems = await CartModel.find({ $and: [{ userId }] })
        res.status(200).send(cartItems)
    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})

/**
 * @swagger
 * /cart/add:
 *   post:
 *     tags: [cart]
 *     summary: Add a product to the authenticated user's cart.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *           description: The authorization token in the format "Bearer {token}"
 *         required: true
 *         example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOi...
 *       - in: body
 *         name: product
 *         description: The product object to be added to the cart.
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully added to the cart.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request. The request body was missing or malformed.
 *       401:
 *         description: Unauthorized. User must be authenticated to access this endpoint.
 *       404:
 *         description: Not found. The requested resource could not be found.
 */


CartRouter.post("/add", async (req, res) => {
    console.log(req.body)
    try {
        const Item = new CartModel(req.body)
        await Item.save()
        res.status(200).send({
            "message": "Item successfully created",
            item: Item

        })
    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})

/**
 * @swagger
 * /cart/update/{itemId}:
 *   patch:
 *     tags: [cart]
 *     summary: Update a product in the authenticated user's cart.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product to update.
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *           description: The authorization token in the format "Bearer {token}"
 *         required: true
 *         example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOi...
 *       - in: body
 *         name: updatedProduct
 *         description: The updated product object.
 *         schema:
 *           $ref: '#/components/schemas/Product'
 *         required: true
 *     responses:
 *       200:
 *         description: The updated product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized. User must be authenticated to access this endpoint.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */


CartRouter.patch("/update/:itemId", async (req, res) => {
    const id = req.params.itemId
    const changes = req.body
    try {
        const updatedItem = await CartModel.findByIdAndUpdate({ _id: id }, changes)
        res.status(200).send({
            "message": "Item successfully updated",
            updatedItem
        })
    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})

/**
 * @swagger
 * /cart/delete/{itemId}:
 *   delete:
 *     tags: [cart]
 *     summary: Delete a specific item from the user's cart.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *           description: The authorization token in the format "Bearer {token}"
 *         required: true
 *         example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOi...
 *       - in: path
 *         name: itemId
 *         schema:
 *           type: string
 *           description: The ID of the item to delete from the cart.
 *         required: true
 *         example: 123456
 *     responses:
 *       204:
 *         description: The item was successfully deleted.
 *       401:
 *         description: Unauthorized. User must be authenticated to access this endpoint.
 *       404:
 *         description: The requested item was not found in the user's cart.
 *       500:
 *         description: An error occurred while deleting the item.
 */


CartRouter.delete("/delete/:itemId", async (req, res) => {
    const id = req.params.itemId
    const token = req.headers.auth.split(" ")[1]
    const note = await CartModel.findOne({ _id: id })
    if (token) {
        const decoded = jwt.verify(token, process.env.keyword);
        if (decoded.userId === note.userId) {
            try {
                const deletedItem = await CartModel.findByIdAndDelete({ _id: id })
                res.status(200).send({
                    "message": "Item successfully deleted",
                    deletedItem
                })
            } catch (error) {
                res.status(400).send({
                    "message": error.message
                })
            }
        } else {
            res.status(400).send({
                "message": "Authorization Failed"
            })
        }
    } else {
        res.status(400).send({
            "message": "Authorization Failed"
        })
    }
})

module.exports = CartRouter