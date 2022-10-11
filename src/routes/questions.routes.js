import { Router } from "express";
import { create } from "../controllers/question.controller.js";

const questionsRoutes = Router()

questionsRoutes.post('/questions', create)

export default questionsRoutes