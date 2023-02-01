import Button from '@/components/button/button';
import { ButtonCategoryTypes } from '@/components/button/buttonTypes';
import { Formik, Form } from 'formik'
import * as React from 'react'
import * as yup from "yup";
import ContactInformationForm from './contactInformation';
import ShippingInformationForm from './shippingAddress';
import styles from './checkoutform.module.scss' 

//eslint-disable-next-line
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const schema = yup.object({
  email: yup
    .string()
    .trim()
    .required('* Enter a valid email address')
    .matches(validEmailRegex, '* Enter a valid email address'),
  firstName: yup
    .string()
    .trim()
    .required("* First name is required"),
  lastName: yup
    .string()
    .trim()
    .required("* Last name is required"),
  phoneNumnber: yup
    .string()
    .trim()
    .required("* Enter a valid phone number"),
  country: yup
    .string()
    .trim()
    .required("* Country is required"),
  address: yup
    .string()
    .trim()
    .required("* Enter a valid address"),
});

interface CheckoutFormProps {
  // Types here
}

export type ShippingInFormation = {
  email: string,
  phoneNumnber: string,
  country: string,
  firstName: string,
  lastName: string,
  address: string,
  appartment: string,
  suit: string,
  postalCode: string,
  city: string
}

const CheckoutForm: React.FC<CheckoutFormProps> = () => {
  const [shippingInformation, setShippingInformation] = React.useState<ShippingInFormation>({
    email: "",
    phoneNumnber: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    appartment: "",
    suit: "",
    postalCode: "",
    city: ""
  })

  const handleSubmit = (event: any) => {

  }

  const handleFormChange = (event: any) => {

  }

  return (
    <div>
      <Formik
        enableReinitialize
        validationSchema={schema}
        onSubmit={(e) => handleSubmit(e)}
        initialValues={shippingInformation}
        validateOnBlur={false}>
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
        }) => (
          <Form
            id="equipment-form"
            noValidate
            onSubmit={handleSubmit}
            onChange={(e) => handleFormChange(e)}
            autoComplete="off"
          >
            <ContactInformationForm values={values} errors={errors} handleChange={(e) => handleChange(e)} />
            <ShippingInformationForm values={values} errors={errors} handleChange={(e) => handleChange(e)} />
            <div  className={styles.sumittbtn}>
              <Button label="Continue to Payment" endIcon={"/svg/arrow-small-right.svg"} onClick={handleSubmit} category={ButtonCategoryTypes.Primary}  />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CheckoutForm
