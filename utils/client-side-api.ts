import { TPost } from './../server/apis/fm/clients/Post';
import {
  useQuery,
} from 'react-query'


export const useRecentPosts = () => {

  const query = useQuery(
    'recent-posts',
    async () => {

      const result = await fetch('/api/recent-blogs')
      return await result.json() as TPost[] | undefined
    }

  )
  return query
}