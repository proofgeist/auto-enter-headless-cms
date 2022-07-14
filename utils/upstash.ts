import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://usw1-neat-wasp-33307.upstash.io',
  token: 'AYIbASQgODY4MzMxOGYtNTQ2Ni00ZmY2LTk1ODEtYTc2ZTk4MjYzY2Q5NWJmMTYxOWRkMTkwNDY5MWEwYzE5ZGM4MTIwY2E1OGY=',
})

export default redis


export const redisCache = {
  get: (key: string) => {

    return redis.get(key);
  },
  set: (key: string, value: any, ex: number = 3600) => {

    redis.set(key, value, { "ex": ex });
  },
  del: (key: string) => {

    redis.del(key);
  }
}