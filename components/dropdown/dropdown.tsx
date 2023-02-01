import React, { useState } from "react";
import PropTypes, { arrayOf, shape, string } from "prop-types";
import styles from './dropdown.module.scss'
import { DropDownOptionType } from "./dropdownTypes";
import Image from "next/image";
import classNames from "classnames";

export interface DropDownProps {
  options: DropDownOptionType[];
  value: DropDownOptionType | null | undefined;
  placeHolder: string;
  onSelect: (e: DropDownOptionType) => void | undefined;
  heading?: string
  startIcon?: string
  errorMessage?: string
}

/**
 * Primary UI component for user interaction
 */
const Dropdown: React.FC<DropDownProps> = ({
  options = [],
  value = null,
  placeHolder,
  onSelect,
  heading = '',
  startIcon,
  errorMessage,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const bindListItems = () => {
    if (!options?.length) {
      return <li>No Option Found</li>;
    }
    return (
      <>
        <li className={styles.defaultSelected}>Selected Option</li>
        {options.map((option: DropDownOptionType, index: number) => (
          <li key={`option-${index}`} onClick={() => onSelect(option)}>
            {option.label}
          </li>
        ))}
      </>
    );
  };
  return (
    <div className={styles.dropDown}>
      {heading && <h3 className={styles.input_heading}>{heading}</h3>}
      <div className={classNames(styles.dropDowncustom, styles[`${errorMessage ? "dropDowncustom_error" : ""}`])}>
        <div onClick={() => setIsOpen(!isOpen)} className={styles.dropdowminner}>
          <div className="flex  items-center gap-2.5">
            {startIcon && <Image src={startIcon} height={20} width={20} alt="dropdowm-icon" />}
            <label>{value?.label ? value.label : placeHolder}</label>
          </div>
          <Image src={isOpen ? "/svg/drop-icon.svg" : "/svg/drop-icon.svg"} height={20} width={20} alt="dropdowm-arrows" />
        </div>
        {isOpen && (
          <div className={styles.customDropdowndrop}>
            <ul>{bindListItems()}</ul>
          </div>
        )}
       
      </div>
     
      {errorMessage && <div className={styles.input_errormessage}>
        <label>{errorMessage}</label>
      </div>}
    </div>
  );
};

Dropdown.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  options: arrayOf(
    shape({
      value: string.isRequired,
      label: string.isRequired,
    }).isRequired
  ).isRequired,
  heading: PropTypes.string,
  startIcon: PropTypes.string,
  errorMessage: PropTypes.string
};

export default Dropdown;
