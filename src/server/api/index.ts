import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
  res.json({ "status": "done" })
})

export default routes
