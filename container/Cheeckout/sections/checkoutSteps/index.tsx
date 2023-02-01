import * as React from 'react'
import styles from './checkoutstep.module.scss'
type CheckoutStepsProps = {
  // Types here
}

const CheckoutSteps: React.FC<CheckoutStepsProps> = () => {

  return (
    <div className={`${styles.chekoutsteps}`}>
      <div className={`${styles.chekoutpageinneractive}`}>
        <span>
          1
        </span>
        <h3>
          Information
        </h3>
        <div className={`${styles.chekoutstepsarrow}`}>

        </div>
      </div>
      <div className={`${styles.chekoutpageinner}`}>
        <span>
         2
        </span>
        <h3>
          Payment
        </h3>
      </div>
    </div>
  )
}

export default CheckoutSteps
