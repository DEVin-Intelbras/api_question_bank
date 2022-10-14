import fs from 'fs';
import { Question } from '../types/questions.types';

export function getQuestionsInFile() {
  const questionsInFile = fs.readFileSync('questions.json').toString()
  const questionsInFileJson: Question[] = JSON.parse(questionsInFile)
  return questionsInFileJson
}