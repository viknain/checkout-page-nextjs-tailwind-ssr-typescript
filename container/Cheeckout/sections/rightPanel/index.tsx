import * as React from 'react'
import OrderSummaryMobile from './orderSummary/mobileordersummary'
import OrderSummaryPage from './orderSummary/ordersummary'


type CheckoutRightPanelProps = {
  productList: any[]
}

const CheckoutRightPanel: React.FC<CheckoutRightPanelProps> = ({ productList }) => {
  const [expandSummary, setExpandSummary] = React.useState<boolean>(false)
  return (
    <div>
      <div className=" block lg:hidden">
        <OrderSummaryMobile expandOrderSummary={() => setExpandSummary(!expandSummary)} />
      </div>
      <div className={expandSummary ? "ordershow" : "orderhide"}>
        <OrderSummaryPage productList={productList} />
      </div>
    </div>
  )
}

export default CheckoutRightPanel
