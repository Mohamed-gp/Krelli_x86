import express from 'express';
import { addReservation , deleteReservation , allReservation } from '../controllers/reservationController.js';


const router = express.Router();
//reserv
router.post('/', addReservation);
router.delete('/:id', deleteReservation);
router.get('/', allReservation);

export default router;