

import type { NextApiRequest, NextApiResponse } from 'next'
import { redisCache } from '../../utils/upstash'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    redisCache.del('site-settings')
    return res.json({ 'cached-cleared': true })
  } catch (err) {

    return res.status(500).send('Error clearing cache')
  }
}