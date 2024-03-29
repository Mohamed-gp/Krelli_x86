import express from 'express';
import handelLogin from '../controllers/LoginController.js';
import handelRegister from '../controllers/registerController.js';

const router = express.Router();


router.post('/login', handelLogin);
router.post('/register', handelRegister);

router.get('/logout', (req, res) => {
    res.clearCookie('authorization');
    res.json('Logged out');
});

export default router;