import * as React from 'react'
import OrderSummaryInformation from '../infomationCard'
import OrderSummaryProduct from '../ordersummaryproduct'
import styles from '../rightpanel.module.scss'
import OrderSummaryDiscount from '../searchinput'

type OrderSummaryOptionsProps = {
  productList: any[]
}

const OrderSummaryPage: React.FC<OrderSummaryOptionsProps> = ({ productList }) => {

  return (
    <>
      <div className={`${styles.ordersummary}`}>
        <div className={styles.ordersummarytitle}>
          <h2> Order Summary <span> #26450</span></h2>
        </div>
        {productList?.length && productList.map((item: any, index: number) => (
          <OrderSummaryProduct key={`roducrt-${index}`} product={item} />
        ))}

        <OrderSummaryDiscount />
        <div className={styles.ordersummarytotal}>
          <div>
            <p> Subtotal:</p>
          </div>
          <div>
            <p> $362.70</p>
          </div>
        </div>
        <div className={styles.ordersummarytotal}>
          <div>
            <p> Shipping:</p>
          </div>
          <div>
            <p> Free</p>
          </div>
        </div>
        <div className={styles.divider}>
        </div>
        <div className={styles.ordersummaryGrandtotal}>
          <div>
            <p> Total:</p>
          </div>
          <div>
            <p> Free</p>
          </div>
        </div>
      </div>
      <OrderSummaryInformation />
    </>
  )
}

export default OrderSummaryPage
