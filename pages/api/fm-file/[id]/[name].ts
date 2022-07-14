
import type { NextApiRequest, NextApiResponse } from 'next'
import { getFileById } from '../../../../server/apis/files'
import { fetchContainerAsBuffer as fetchContainerAsStream } from '../../../../utils/fm-next-image/fetch-container-url-as-stream'
import mime from 'mime-types'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const id = req.query?.id as string
  const fileRecord = await getFileById(id)
  const { Container, FileName } = fileRecord


  const mimeType = mime.lookup(FileName)


  const buffer = await fetchContainerAsStream(Container)

  if (mimeType) {
    res.setHeader('Content-Type', mimeType)
  }


  return new Promise((resolve, reject) => {
    buffer.pipe(res)
    buffer.on('end', resolve)
    res.on('error', reject)

  })


  //return res.status(200).send(buffer)
}
