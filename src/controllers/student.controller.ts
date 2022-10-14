import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import { BodyCreateStudent, Student } from '../types/students.types'
import { getStudentsInFile } from '../utils/getStudentInFile'

export function create(
  request: Request<{}, {}, BodyCreateStudent>,
  response: Response
) {

  const student: Student = {
    id: uuidv4(),
    name: request.body.name,
    cpf: request.body.cpf,
  }

  const studentInFileJson = getStudentsInFile()

  const data = [...studentInFileJson, student]

  fs.writeFileSync('students.json', JSON.stringify(data))

  response.status(201).json(student)
}



