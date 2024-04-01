import express from "express";
import multer from "multer";
import { getClient, createClient, deleteClient, updateClient, getClientById } from "../controllers/client.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });

  const upload = multer({ storage });


router.get('/' , getClient);
router.post('/create' , upload.single('files'), createClient);
router.patch('/:id' , updateClient);
router.delete('/:id' , deleteClient);
router.get('/:id' , getClientById);



export default router;