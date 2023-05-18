import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const cliente = new PrismaClient()

app.get('/users', async () => {
  const users = await cliente.user.findMany()
  return users;
}
)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running in port 3333')
  })
