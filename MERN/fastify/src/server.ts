import fastify, { FastifyInstance } from 'fastify'
import { establishConnection } from './plugins/mongoose'

const server: FastifyInstance = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
    level: 'debug',
  },
})
const startFastify: (port: number) => FastifyInstance = (port) => {
  const listenAddress = '0.0.0.0'
  const fastifyConfig = {
    port: port,
    host: listenAddress,
  }
  server.listen(fastifyConfig, (error, _) => {
    if (error) {
      console.error(error)
    }
    const connectionString =
      process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/myMERN'
    establishConnection(connectionString)
  })
  server.get('/ping', async (request, reply) => {
    return reply.status(200).send({ msg: 'pong' })
  })
  return server
}
export { startFastify }
