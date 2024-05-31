import {Router} from "express"
import {talkToGemini} from "../controllers/geminiController.js"



const router = Router()

router.route("/").post(talkToGemini)


export default router