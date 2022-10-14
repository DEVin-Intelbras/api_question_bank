import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { BodyCreateQuestion, BodyUpdateQuestion, Question, RouteParamsQuestion } from '../types/questions.types'
import fs from 'fs'
import { getQuestionsInFile } from '../utils/getQuestionsInFile'

export function create(
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

  const questionInFileJson = getQuestionsInFile()

  const data = [...questionInFileJson, question]

  fs.writeFileSync('questions.json', JSON.stringify(data))

  response.status(201).json(question)
}

export function findMany(request: Request, response: Response) {
  const questionInFileJson = getQuestionsInFile()

  response.json(questionInFileJson)
}

export function findOne(request: Request<RouteParamsQuestion>, response: Response) {
  const questionsInFileJson = getQuestionsInFile()

  const question = questionsInFileJson.find(question => question.id === request.params.id)

  if (!question) {
    return response.status(404).json({ error: 'Questão não encontrada' })
  }

  response.json(question)
}

export function destroy(request: Request<RouteParamsQuestion>, response: Response) {
  const questionsInFileJson = getQuestionsInFile()

  const questions = questionsInFileJson.filter(question => question.id !== request.params.id)

  fs.writeFileSync('questions.json', JSON.stringify(questions))

  response.json()

}


export function update(request: Request<RouteParamsQuestion, {}, BodyUpdateQuestion>, response: Response) {
  const questionsInFileJson = getQuestionsInFile()

  const updatedQuestions: Question[] = questionsInFileJson.map(question => {
    if (question.id === request.params.id) {
      question.description = request.body.description || question.description
      question.item_a = request.body.item_a || question.item_a
      question.item_b = request.body.item_b || question.item_b
      question.item_c = request.body.item_c || question.item_c
      question.item_d = request.body.item_d || question.item_d
      question.item_e = request.body.item_e || question.item_e
      question.item_correct = request.body.item_correct || question.item_correct
    }
    return question
  })

  fs.writeFileSync('questions.json', JSON.stringify(updatedQuestions))

  return response.json()

}