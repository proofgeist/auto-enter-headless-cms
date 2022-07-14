import { client as SiteSettings, TSiteSettings } from "../apis/fm/clients/SiteSettings";
import { redisCache } from "../../utils/upstash";



/*
  Here we use a redis cache to store the settings for the site.
  The cache is set to expire after 60 minutes.
*/


export const getSiteSettings = async () => {
  const cachedValue = await redisCache.get('site-settings') as TSiteSettings | undefined;

  if (cachedValue) {
    return cachedValue;
  }
  try {
    const siteSettings = await SiteSettings.findOne({ query: { LogoFileID: "*" } });
    await redisCache.set('site-settings', siteSettings.data.fieldData, 60 * 60);
    return siteSettings.data.fieldData;
  } catch (error) {
    throw error;
  }


}


