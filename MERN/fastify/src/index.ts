import { startFastify } from './server'
import * as dotenv from 'dotenv'

dotenv.config()
const port = process.env.FASTIFY_PORT || '8888'
// Start your server
const server = startFastify(parseInt(port))
export { server }
