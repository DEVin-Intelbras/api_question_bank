import { Router } from "express";
import { 
  create
 } 
  from "../controllers/student.controller";

const studentsRoutes = Router()

studentsRoutes.post('/students', create)

export default studentsRoutes