import express from "express";
import {getAllMinerals, getSingleMineralWithDetails} from "../controllers/mineralController";

const router = express.Router()

router.get("/all", getAllMinerals)

router.get("/:id", getSingleMineralWithDetails)

export default router
