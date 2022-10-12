import app from './app'
import { getConnection } from './database/connection'

getConnection()

app.listen(3333, () => {
  console.log("Servidor no ar :)")
})