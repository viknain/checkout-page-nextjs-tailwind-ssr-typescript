import Image from 'next/image'
import * as React from 'react'
import styles from './ordermobilesummary.module.scss'

type OrderSummaryMobileOptionsProps = {
  expandOrderSummary: () => void
}

const OrderSummaryMobile: React.FC<OrderSummaryMobileOptionsProps> = ({ expandOrderSummary }) => {

  return (
    <div className={styles.ordermobilesummary} onClick={()=> expandOrderSummary()}>
      <div className={styles.ordermobilesummaryshow}>
        <Image src="/svg/shopping-cart.svg" width={24} height={24} alt="" />
        <p>Show order summary</p>
        <Image src="/svg/drop-icon.svg" width={14} height={7} alt="" />
      </div>
      <div>
        <h2>€138.00</h2>
      </div>
    </div>

  )
}

export default OrderSummaryMobile
