import Image from 'next/image'
import * as React from 'react'
import styles from './rightpanel.module.scss'

type OrderSummaryInformationOptionsProps = {
  // Types here
}

const OrderSummaryInformation: React.FC<OrderSummaryInformationOptionsProps> = () => {

  return (
    <div className={styles.orderinfocard}>
      <div className={styles.orderinfocardinner}>
        <Image src="/svg/cashback.svg" width={60} height={60} alt=""></Image>
        <p>
          30 days satisfaction <span>Guareantee</span> with  <span>money back</span>
        </p>
      </div>
      <div className={styles.divider}>
      </div>
      <div className={styles.orderinfocardinner }>
        <Image src="/svg/truck.svg" width={60} height={60} alt=""></Image>
        <p>
          Over <span>38,957</span> successfully <span>shipped orders </span>
        
        </p>
      </div>
    </div>

  )
}

export default OrderSummaryInformation
