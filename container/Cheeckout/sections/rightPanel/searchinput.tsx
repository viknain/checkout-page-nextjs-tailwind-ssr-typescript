import Button from '@/components/button/button'
import { ButtonCategoryTypes } from '@/components/button/buttonTypes'
import Input from '@/components/input/input'
import { InputTypes } from '@/components/input/inputTypes'
import Image from 'next/image'
import * as React from 'react'
import styles from './rightpanel.module.scss'

type OrderSummaryDiscount = {
  // Types here
}

const OrderSummaryDiscount: React.FC<OrderSummaryDiscount> = () => {
  const [coupanCode, setCoupanCode] = React.useState<string>()

  return (
    <div className={styles.discountinput}>
      <Input errorMessage='' value={coupanCode} type={InputTypes.text} placeHolder='Discount code' onChange={(e) => { setCoupanCode(e.target.value) }} name={"email"} />
      <div className={styles.discountinputbtn}>
        <Button label="Apply" onClick={() => { }} category={ButtonCategoryTypes.Primary} />
      </div>
    </div>

  )
}

export default OrderSummaryDiscount
