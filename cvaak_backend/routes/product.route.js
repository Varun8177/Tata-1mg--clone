const express = require("express");
const adminAuth = require("../middlewares/adminAuth.middleware");
const ProductModel = require("../models/product.model");
const productRouter = express.Router()
// productRouter.use(auth)
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
 * /products/:
 *   get:
 *     tags: [product]
 *     summary: Retrieve all product data from the database.
 *     responses:
 *       200:
 *         description: A list of all products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
productRouter.get("/", async (req, res) => {
    const query = req.query
    const categoryQuery = {}
    if (query.category) {
        categoryQuery["category"] = query.category
    }
    let sortQuery = {}
    const discountQuery = {}
    if (query.sortBy === 'price') {
        if (query.order === "asc") {
            sortQuery = { price: 1 }
        } else if (query.order === "des") {
            sortQuery = { price: -1 }
        }
    } else if (query.sortBy === 'rating') {
        if (query.order === "asc") {
            sortQuery = { rating: 1 }
        } else if (query.order === "des") {
            sortQuery = { rating: -1 }
        }
    }

    if (query.discount) {
        const [greaterThanEqual, lessThanEqual] = query.discount.split("-")
        discountQuery["discount-percent"] = {
            $gte: `${greaterThanEqual}%`,
            $lte: `${lessThanEqual}%`
        }
    }
    try {
        const notes = await ProductModel.find({ $and: [categoryQuery, discountQuery] }).sort(sortQuery)
        res.status(200).send(notes)
    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})

/**
 * @swagger
 * /products/add:
 *   post:
 *     tags: [product]
 *     summary: add data to the database.
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
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


productRouter.post("/add", adminAuth, async (req, res) => {
    try {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(200).send({
            "message": "Product successfully created"
        })
    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})


/**
 * @swagger
 * /products/update/{productId}:
 *   patch:
 *     tags: [product]
 *     summary: update data for a specific product in the database.
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
 *         name: productId
 *         schema:
 *           type: string
 *           description: The ID of the product to update
 *         required: true
 *         example: 123456
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The updated product data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized. User must be authenticated to access this endpoint.
 *       404:
 *         description: The requested product was not found.
 *       500:
 *         description: An error occurred while updating the product.
 */


productRouter.patch("/update/:productId", adminAuth, async (req, res) => {
    const id = req.params.productId
    const changes = req.body
    try {
        const new_note = await ProductModel.findByIdAndUpdate({ _id: id }, changes)
        res.status(200).send({
            "message": "Note successfully updated"
        })
    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})



/**
 * @swagger
 * /products/delete/{productId}:
 *   delete:
 *     tags: [product]
 *     summary: delete a specific product from the database.
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
 *         name: productId
 *         schema:
 *           type: string
 *           description: The ID of the product to delete.
 *         required: true
 *         example: 123456
 *     responses:
 *       200:
 *         description: The deleted product data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized. User must be authenticated to access this endpoint.
 *       404:
 *         description: The requested product was not found.
 *       500:
 *         description: An error occurred while deleting the product.
 */


productRouter.delete("/delete/:productId", adminAuth, async (req, res) => {
    const id = req.params.productId
    const prod = await ProductModel.findOne({ _id: id })
    try {
        const product = await ProductModel.findByIdAndDelete({ _id: id })
        res.status(200).send({
            "message": "Product successfully deleted",
            product
        })
    } catch (error) {
        res.status(400).send({
            "message": error.message
        })
    }
})

module.exports = productRouter