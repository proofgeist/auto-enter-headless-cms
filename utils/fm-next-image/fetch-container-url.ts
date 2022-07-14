import axios from 'axios'
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';


let client: any
if (process.env.HANDLE_FMDAPI_COOKIE_SESSIONS) {
  const jar = new CookieJar();
  client = wrapper(axios.create({ jar }));
} else {
  client = axios
}

export async function fetchContainerAsBuffer(containerURL: string) {

  try {
    const response = await client.get(
      containerURL,
      {
        responseType: 'arraybuffer',
      }
    );
    return Buffer.from(response.data, 'utf8');
  } catch (error) {
    console.error(error)
    throw new Error('the proxy image fetched failed. see above log entry')
  }

}