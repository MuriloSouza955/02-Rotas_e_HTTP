import { transactionsRoutes } from './routes/transactions.js'
import cookie from '@fastify/cookie'
import { env } from './env/index.js'
import fastify from 'fastify'

const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.listen({ port: env.PORT }).then(() => {
  console.log('✅ HTTP server is running!')
})
