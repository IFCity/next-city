import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req: any, res: any) => {
  await req.db
    .collection('events')
    .find()
    .toArray(function (err: any, docs: any) {
      res.json(docs)
    })
})

export default (req: any, res: any) => handler.apply(req, res)
