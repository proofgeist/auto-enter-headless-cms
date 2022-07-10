import { getSiteSettings } from "../../server/apis/site-settings"


import type { NextApiRequest, NextApiResponse } from 'next'




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const result = await getSiteSettings()
  res.status(200).json(result)
}
