import { TPost } from './../server/apis/fm/clients/Post';
import {
  useQuery,
} from 'react-query'


export const useRecentPosts = () => {
  console.log('useRecentPosts');
  const query = useQuery(
    'recent-posts',
    async () => {

      const result = await fetch('/api/recent-blogs')
      return await result.json() as TPost[] | undefined
    },
    { staleTime: 1000 * 60 * 30, refetchOnWindowFocus: false }
  )
  return query
}