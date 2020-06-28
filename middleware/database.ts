import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const client = new MongoClient(
  process.env.NEXT_PUBLIC_DB_URI as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

async function database(req: any, res: any, next: () => any) {
  if (!client.isConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db('MCT')
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
