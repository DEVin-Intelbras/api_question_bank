import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

interface BodyCreateQuestion {
  description: string
  item_correct: string
  item_a: string
  item_b: string
  item_c: string
  item_d: string
  item_e: string
  score: number
}

export function create(
  request: Request<{}, {}, BodyCreateQuestion>,
  response: Response
) {

  const question = {
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

  // salvar question
}