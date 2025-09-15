import fastify from 'fastify'
import crypto from 'crypto'
import { db } from './database.js'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await db('transactions')
  .where("amount", 100)
  return transactions
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running on http://localhost:3333')
})
