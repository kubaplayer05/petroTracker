import express from "express";
import {getAllGemstones, getSingleGemstoneWithDetails} from "../controllers/gemstoneController";

const router = express.Router()

router.get("/all", getAllGemstones)

router.get("/:id", getSingleGemstoneWithDetails)

export default router
