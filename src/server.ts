import fastify from 'fastify'
import crypto from 'crypto'
import { env } from './env/index.js'
import { transactionsRoutes } from './routes/transactions.js'

const app = fastify()

app.register(transactionsRoutes)

app.listen({ port: env.PORT }).then(() => {
  console.log('✅ HTTP server is running!')
})
