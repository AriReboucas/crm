import express from "express";
import { updateActivity, deleteActivity, getActivity } from "../controllers/activity.controller";

const router = express.Router();

router.patch("/:activityId", updateActivity)
router.delete("/:activityId", deleteActivity)
router.get("/:activityId", getActivity)


export default router;