import type { NextPage } from 'next'
import NextLink from 'next/link'

const Home: NextPage = () => {
  return (
    <div >
      <NextLink href="/bog" >Blog</NextLink>
    </div>
  )
}

export default Home
