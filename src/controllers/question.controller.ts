import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { BodyCreateQuestion, Question } from '../types/questions.types'

//import { getConnection } from '../database/connection'

let questions: Question[] = []

export async function create(
  request: Request<{}, {}, BodyCreateQuestion>,
  response: Response
) {

  const question: Question = {
    id: uuidv4(),
    description: request.body.description,
    item_correct: request.body.item_correct,
    item_a: request.body.item_a,
    item_b: request.body.item_b,
    item_c: request.body.item_c,
    item_d: request.body.item_d,
    item_e: request.body.item_e,
    score: request.body.score
  }

  questions = [...questions, question]

  /*
  const database = getConnection()
  database.data.questions.push(question)
  await database.write()
  */

  response.status(201).json(question)
}