import express from "express"
import { deletetraine, getData, login, register, updatetraine } from "../controllers/Reglog.js";

const router = express.Router();

// traine reg-log
router.post("/register" , register);
router.post("/login", login);
router.get("/admindata", getData);
router.put("/updateadmin/:id", updatetraine);
router.delete("/deleteadmin/:id", deletetraine)


export default router; 