import * as React from 'react'
import styles from './checkout.module.scss'
import CheckoutSteps from './sections/checkoutSteps'
import CheckoutLeftPanel from './sections/leftPanel'
import CheckoutRightPanel from './sections/rightPanel'

interface CheckoutProps {
  data:any
}

const Dashboard: React.FC<CheckoutProps> = ({data}) => {
  return (
    <div className={`${styles.chekoutpage}`}>
      <div className="grid   lg:gap-14 lg:grid-cols-2">
        <div className="order-last lg:order-first">
          <div className="hidden lg:block">
            <h1>Checkout</h1>
            <CheckoutSteps />
          </div>
         
          <CheckoutLeftPanel addOnData={data?.addons} />
        </div>  
        <div>
          <div className="mb-[40px]  block lg:hidden">
            <h1>Checkout</h1>
            <CheckoutSteps  />
          </div>
         
          <CheckoutRightPanel productList={data?.cartItems} />
          </div>      
       
      </div>
    
    
    </div>
  )
}

export default Dashboard
