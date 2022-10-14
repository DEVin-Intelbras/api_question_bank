import express from 'express'
import cors from 'cors'

import questionsRoutes from './routes/questions.routes'
import studentRoutes from './routes/students.routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use(questionsRoutes)
app.use(studentRoutes)

export default app