import { client as Files } from "../apis/fm/clients/Files";


export async function getFileById(fileId: string) {
  const file = await Files.findFirst({ query: { Id: fileId } });
  const { Id, Container, FileName } = file.data.fieldData;
  return { Id, Container, FileName }

}