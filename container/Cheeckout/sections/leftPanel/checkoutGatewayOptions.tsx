import Button from '@/components/button/button'
import { ButtonCategoryTypes } from '@/components/button/buttonTypes'
import * as React from 'react'
import styles from './leftpanel.module.scss'

type CheckoutgatewayOptionsProps = {
  // Types here
}

const CheckoutgatewayOptions: React.FC<CheckoutgatewayOptionsProps> = () => {

  return (
    <div className={`${styles.CheckoutgatewayOptions}`}>
      <h2>Express Checkout</h2>

      <div className={`${styles.CheckoutgatewayOptionsbtn}`}>
        <Button bottonIcon={"/svg/shoplogo.svg"} onClick={() => { }} category={ButtonCategoryTypes.Primary}  />
        <Button bottonIcon={"/svg/paypal.svg"}  onClick={() => { }} category={ButtonCategoryTypes.Primary} />
        <Button bottonIcon={"/svg/google.svg"}  onClick={() => { }} category={ButtonCategoryTypes.Primary} />
      </div>
    </div>
  )
}

export default CheckoutgatewayOptions
