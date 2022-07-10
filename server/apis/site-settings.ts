import { client as SiteSettings } from "../apis/fm/clients/SiteSettings";
import mem from 'p-memoize';
import ExpiryMap from 'expiry-map';


// this will prevent hammering the db during development and builds
// probably should move to this 
// https://github.com/vercel/examples/tree/main/solutions/reuse-responses
// this relies on memory which may not be viable in serverless environments
// they don't live long enough

const cache = new ExpiryMap(1000 * 60);
async function getSiteSettingsPromise() {
  const siteSettings = await SiteSettings.findOne({ query: { LogoFileID: "*" } });
  return siteSettings.data.fieldData;
}

export const getSiteSettings = mem(getSiteSettingsPromise, { cache });


