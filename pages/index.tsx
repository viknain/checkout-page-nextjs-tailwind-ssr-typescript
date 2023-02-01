import Loader from '@/components/loader/loader'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

interface HomePageProps {
  // Props fohome page
}

const HomePage: FC<HomePageProps> = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/checkout")
  }, [])
  return (
    <>
      <Loader />
    </>
  )
}



export default HomePage
