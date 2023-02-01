import * as React from 'react'
import { ssrGetCheckOutData } from '@/utility/ssr-api-routes'
import { InferGetStaticPropsType } from 'next'
import Checkout from '../../container/Cheeckout/checkout'

const CheckoutPage = ({ checkOutData }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <Checkout data={checkOutData?.data} />
  )
}

export const getServerSideProps = async () => {
  try {
    const responses = await Promise.all([ssrGetCheckOutData()]);
    return {
      props: {
        checkOutData: responses[0],
      },
    }
  } catch (err) {
    return {
      props: {
        checkOutData: null,
      },
    }
  }

}

export default CheckoutPage

