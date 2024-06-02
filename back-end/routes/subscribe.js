import {Router} from "express"
import { subscribeToNewsletter } from "../controllers/subscribeController.js"



const router = Router()

router.route("/").post(subscribeToNewsletter)


export default router

