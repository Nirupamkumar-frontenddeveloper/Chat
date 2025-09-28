import express from "express";
import { getUserForSidebar, getMessages, markMessageAsSeen, sendMessage } from "../controllers/messageController.js";
import { protectRoute } from "../middleware/auth.js";

const messageRouter = express.Router();

// Get all users except logged-in user
messageRouter.get("/users", protectRoute, getUserForSidebar);

// Get all messages for a selected user
messageRouter.get("/:id", protectRoute, getMessages);

// Mark a message as seen using message ID
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen);

messageRouter.post("/send/:id", protectRoute, sendMessage);

export default messageRouter;
