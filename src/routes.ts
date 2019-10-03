import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  res.status(200).send('Olá tonhão')
})

export default routes
