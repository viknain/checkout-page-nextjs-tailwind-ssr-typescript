import * as React from 'react'
import { HeadingTypes } from './headingTypes'
import PropTypes from "prop-types";
import styles from './heading.module.scss'
import classNames from 'classnames';


interface HeadingPropps {
  type: HeadingTypes
  label: string
}
const Heading: React.FC<HeadingPropps> = ({
  type,
  label,
}) => {
  return (
    <h2 className={classNames(styles.heading, styles[type])}>
      {label}
    </h2>
  )
}

Heading.propTypes = {
  type: PropTypes.oneOf<HeadingTypes>(
    Object.values(HeadingTypes)
  ).isRequired,
  label: PropTypes.string.isRequired
};

export default Heading
