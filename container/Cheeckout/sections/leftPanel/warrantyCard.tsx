import Button from '@/components/button/button'
import { ButtonCategoryTypes } from '@/components/button/buttonTypes'
import * as React from 'react'
import styles from './leftpanel.module.scss'
type WarrantyCardProps = {
  addOnData: any
}

const WarrantyCard: React.FC<WarrantyCardProps> = ({ addOnData }) => {
  return (
    <div className={`${styles.warrantycard}`}>
      <h2>{addOnData?.title}</h2>
      <p>
        {addOnData?.description}
      </p>
      <Button label={`Add-${addOnData?.price}`} onClick={() => {}} category={ButtonCategoryTypes.Primary} />
    </div>
  )
}

export default WarrantyCard
