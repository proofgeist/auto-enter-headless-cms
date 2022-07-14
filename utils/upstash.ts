import { Redis } from '@upstash/redis'



const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL || ""
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || ""

const redis = new Redis({
  url: UPSTASH_URL,
  token: UPSTASH_TOKEN,
})

export default redis


export const redisCache = {
  get: (key: string) => {

    return redis.get(key);
  },
  set: (key: string, value: any, ex: number = 3600) => {

    return redis.set(key, value, { "ex": ex });
  },
  del: (key: string) => {

    return redis.del(key);
  }
}