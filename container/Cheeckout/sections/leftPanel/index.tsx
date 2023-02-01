import * as React from 'react'
import CheckoutForm from '../checkoutForm'
import CheckoutgatewayOptions from './checkoutGatewayOptions'
import WarrantyCard from './warrantyCard'
type CheckoutLeftPanelProps = {
  addOnData : any
}

const CheckoutLeftPanel: React.FC<CheckoutLeftPanelProps> = ({ addOnData }) => {
  return (
    <div>
      <WarrantyCard addOnData={addOnData} />
      <CheckoutgatewayOptions />
      <CheckoutForm />
    </div>
  )
}

export default CheckoutLeftPanel
