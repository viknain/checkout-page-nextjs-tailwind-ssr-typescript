import * as React from 'react'
import { ShippingInFormation } from '.'
import { Field } from 'formik'
import Input from '@/components/input/input'
import { InputTypes } from '@/components/input/inputTypes'
import Heading from '@/components/heading/heading'
import { HeadingTypes } from '@/components/heading/headingTypes'

interface ContactInformationFormProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) =>  void
  errors:any,
  values: ShippingInFormation
}

const ContactInformationForm: React.FC<ContactInformationFormProps> = ({ handleChange, errors, values }) => {

  return (
    <div>
      <Heading label='Contact information' type={HeadingTypes.Large} />
      <Field render={() => {
        return <Input startIcon={"/svg/email-icon.svg"} type={InputTypes.text} heading="Email" errorMessage={errors.email} value={values.email} placeHolder='Enter your email' onChange={handleChange} name={"email"} />
      }} />
      <Field render={() => {
        return <Input startIcon={"/svg/phone-icon.svg"} type={InputTypes.text} heading="Phone Number" errorMessage={errors.phoneNumnber} value={values.phoneNumnber} placeHolder='Enter your phone number' onChange={handleChange} name={"phoneNumnber"} />
      }} />
    </div>
  )
}

export default ContactInformationForm
