import { NextApiResponse, NextApiRequest } from 'next'

export default function request(
  request: NextApiRequest,
  reply: NextApiResponse,
) {
  try {
    const method = request.method

    reply.status(200).json({ method })
  } catch (err) {
    console.log(err)
  }
}
