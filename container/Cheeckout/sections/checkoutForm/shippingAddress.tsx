import * as React from 'react'
import { ShippingInFormation } from '.'
import { Field } from 'formik'
import Input from '@/components/input/input'
import { InputTypes } from '@/components/input/inputTypes'
import Heading from '@/components/heading/heading'
import { HeadingTypes } from '@/components/heading/headingTypes'
import Dropdown from '@/components/dropdown/dropdown'
import { DropDownOptionType } from '@/components/dropdown/dropdownTypes'
import styles from './checkoutform.module.scss'

interface ShippingInformationFormProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  errors: any
  values: ShippingInFormation
}

const ShippingInformationForm: React.FC<ShippingInformationFormProps> = ({ handleChange, errors, values }) => {

  const bindDropdownValue = (value: any, options: any[]) => {
    return {
      value: "",
      label: ""
    }
  }

  const handleDropDownChange = (e: DropDownOptionType, name: string) => {

  }
  return (
    <div>
      <Heading label='Shipping Address' type={HeadingTypes.Large} />
      <Field render={() => {
        return <Dropdown options={[]} startIcon={"/svg/country-icon.svg"} heading="Country of Origin" errorMessage={errors.country} value={bindDropdownValue(values.country, [])} placeHolder='Select your country' onSelect={(e: DropDownOptionType) => handleDropDownChange(e, "country")} />
      }} />
      <div className={`${styles.formgrid}`}>
      <Field render={() => {
          return <Input startIcon={"/svg/user-icon.svg"} type={InputTypes.text} heading="First Name " required="*" errorMessage={errors.firstName} value={values.firstName} placeHolder='Enter your first name' onChange={handleChange} name={"firstName"} />
      }} />
      <Field render={() => {
          return <Input startIcon={"/svg/user-icon.svg"} type={InputTypes.text} heading="Last Name" required="*"  errorMessage={errors.lastName} value={values.lastName} placeHolder='Enter your last name' onChange={handleChange} name={"lastName"} />
      }} />
      </div>
      <Field render={() => {
        return <Input startIcon={"/svg/map-marker.svg"} type={InputTypes.text} heading="Address" required="*"  errorMessage={errors.address} value={values.address} placeHolder='Enter your address' onChange={handleChange} name={"address"} />
      }} />
      <div className={`${styles.formgrid}`}>
      <Field render={() => {
          return <Input startIcon={"/svg/building-icon.svg"} type={InputTypes.text} heading="Apartment" subheading="(optional)"  errorMessage={errors.appartment} value={values.appartment} placeHolder='Enter your apartment' onChange={handleChange} name={"appartment"} />
      }} />
      <Field render={() => {
          return <Input startIcon={"/svg/building-icon.svg"} type={InputTypes.text} heading="Suit" subheading="(optional)"  errorMessage={errors.suit} value={values.suit} placeHolder='Enter your suit' onChange={handleChange} name={"suit"} />
      }} />
      </div>
      <div className={`${styles.formgrid}`}>
      <Field render={() => {
          return <Input startIcon={"/svg/map-marker-plus.svg"} type={InputTypes.text} heading="Post Code" errorMessage={errors.postalCode} value={values.postalCode} placeHolder='Enter your post code' onChange={handleChange} name={"postalCode"} />
      }} />
      <Field render={() => {
          return <Dropdown options={[]} startIcon={"/svg/map-marker.svg"} heading="City" errorMessage={errors.city} value={bindDropdownValue(values.city, [])} placeHolder='select your city' onSelect={(e: DropDownOptionType) => handleDropDownChange(e, "city")} />
      }} />
      </div>
    </div>
  )
}

export default ShippingInformationForm
