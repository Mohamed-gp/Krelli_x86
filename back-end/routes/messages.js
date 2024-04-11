import express from 'express';
import {getChat , createChat , createMessage , getChats } from '../controllers/messagesController.js';


const router = express.Router();

router.get('/', getChats);
router.post('/', createChat);
router.post('/:chatId/messages', createMessage);
router.get('/:id', getChat);


export default router;