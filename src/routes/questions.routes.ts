import { Router } from "express";
import { create } from "../controllers/question.controller";

const questionsRoutes = Router()

questionsRoutes.post('/questiosns', create)

export default questionsRoutes