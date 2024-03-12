import express from "express";
import multer from "multer";
import {addToUserCollection, getItemImage, getUserCollection} from "../controllers/userCollectionController";

const uploads = multer({dest: "uploads/"})

const router = express.Router()

router.get("/all", getUserCollection)
router.post("/image", getItemImage)
router.post("/add", uploads.single("stone"), addToUserCollection)

export default router
