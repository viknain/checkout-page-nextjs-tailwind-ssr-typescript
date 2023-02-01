import Image from 'next/image'
import * as React from 'react'
import styles from './rightpanel.module.scss'

type OrderSummaryProductOptionsProps = {
  product: any
}

const OrderSummaryProduct: React.FC<OrderSummaryProductOptionsProps> = ({ product }) => {

  return (
    <div className={styles.ordersummaryinner}>
      <div className={styles.ordersummaryinnerleft}>
        <div>
          <Image src={product?.image} width={70} height={70} alt=""/>
        </div>
        <div>
          <p>{product?.name}</p>
          <span>X {product?.quantity}</span>
        </div>
      </div>
      <div className={styles.ordersummaryinnerright}>
        <p>{product?.price}</p>
      </div>
    </div>

  )
}

export default OrderSummaryProduct
