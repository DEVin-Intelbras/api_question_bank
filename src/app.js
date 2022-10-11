import express from 'express'
import cors from 'cors'
import questionsRoutes from './routes/questions.routes.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(questionsRoutes)

export default app