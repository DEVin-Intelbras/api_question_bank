import { Router } from "express";
import { 
  create, 
  findMany, 
  findOne,
  destroy,
  update
 } 
  from "../controllers/question.controller";

const questionsRoutes = Router()

questionsRoutes.post('/questions', create)
questionsRoutes.get('/questions', findMany)
questionsRoutes.get('/questions/:id', findOne)
questionsRoutes.delete('/questions/:id', destroy)
questionsRoutes.put('/questions/:id', update)

export default questionsRoutes