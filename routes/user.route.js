import express from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/users.controller.js";


const router = express.Router();

router.get('/' , getUser);
router.post('/create' , createUser);
router.patch('/:id' , updateUser);
router.delete('/:id' , deleteUser);



export default router;