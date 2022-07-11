import {
  useQuery,
} from 'react-query'
import { TPosts as TPost } from '../server/apis/fm/clients/Posts';
import { transformPost } from './transform-post';


export const useRecentPosts = () => {

  const query = useQuery(
    'recent-posts',
    async () => {
      console.log('getting posts')
      const result = await fetch('/api/recent-blogs')
      return await result.json()
    },
    { staleTime: 1000 * 60 * 5 }
  )
  return query
}
