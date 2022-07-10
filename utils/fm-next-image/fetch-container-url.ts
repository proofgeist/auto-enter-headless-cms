import axios from 'axios'
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));

export async function fetchContainerAsBuffer(containerURL: string) {
  const response = await client.get(
    containerURL,
    { responseType: 'arraybuffer' }
  );
  return Buffer.from(response.data, 'utf8');

}