
import type { NextApiRequest, NextApiResponse } from 'next'
import { getFileById } from '../../../../server/apis/files'
import { fetchContainerAsBuffer } from '../../../../utils/fm-next-image/fetch-container-url'
import mime from 'mime-types'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const id = req.query?.id as string
  const fileRecord = await getFileById(id)
  const { Container, FileName } = fileRecord
  console.log('serving file', FileName)

  const mimeType = mime.lookup(FileName)


  const buffer = await fetchContainerAsBuffer(Container)

  if (mimeType) {
    res.setHeader('Content-Type', mimeType)
  }

  res.send(buffer)
}
