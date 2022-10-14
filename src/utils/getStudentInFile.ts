import fs from 'fs';
import { Student } from '../types/students.types';

export function getStudentsInFile() {
  const studentsInFile = fs.readFileSync('students.json').toString()
  const studentsInFileJson: Student[] = JSON.parse(studentsInFile)
  return studentsInFileJson
}