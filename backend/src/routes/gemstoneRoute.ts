import express from "express";
import multer from "multer"
import {getAllGemstones, getSingleGemstoneWithDetails} from "../controllers/gemstoneController";
import {detectGemstoneFromImage, detectGemstoneFromUrl} from "../controllers/imageDetectionController";

const upload = multer()

const router = express.Router()

router.get("/all", getAllGemstones)
router.get("/:id", getSingleGemstoneWithDetails)
router.post("/detection", upload.single("gemstone"), detectGemstoneFromImage)
router.post("/detection/url", detectGemstoneFromUrl)

export default router
