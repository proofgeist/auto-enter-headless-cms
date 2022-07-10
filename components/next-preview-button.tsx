
import NextLink from "next/link"
import NextChakraLink from "./next-chakra-link"
import { useRouter } from "next/router"


export default function NextClearPreviewButton({ preview }: { preview: boolean }) {
  const router = useRouter()
  if (!preview) return null

  return <NextChakraLink
    color={'red.600'}
    href={`/api/clear-preview-mode?=${router.asPath}`}
  >
    Clear Preview
  </NextChakraLink>
}



