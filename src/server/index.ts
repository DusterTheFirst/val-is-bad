import * as next from 'next'
import * as fastify from 'fastify'
import { join } from 'path'

import index from './api/index'

const port = parseInt(process.env.PORT as string) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: join(__dirname, '../client') })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = fastify()

    server.get('/api', index)

    server.get('/*', (req, res: any) => {
      handle(req.req, res.res)
    })

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
