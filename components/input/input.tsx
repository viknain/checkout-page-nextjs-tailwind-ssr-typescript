import * as React from 'react'
import { InputTypes } from './inputTypes';
import PropTypes from "prop-types";
import classNames from 'classnames';
import styles from './input.module.scss'
import Image from 'next/image';

export interface InputProps {
    placeHolder: string;
    type: InputTypes;
    value: any;
    startIcon?: string;
    errorMessage: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    heading?: string
    subheading?: string
    required?: string
    name: string
    iconAlt?: string
}

/**
 * Primary UI component for user interaction
 */
const Input: React.FC<InputProps> = ({
    placeHolder = "placeHolder",
    type = "text",
    value,
    name,
    errorMessage = "",
    onChange,
    heading,
    subheading,
    required,
    startIcon,
    iconAlt = "",
    ...props
}) => {

    const [isActive, setIsActive] = React.useState<boolean>(false);

    const handleBlur = () => {
        setIsActive(false)
    }

    const handleFocus = () => {
        setIsActive(true)
    }
    return (
        <div className="w-full">
            <div className="flex gap-0.5">
                {heading && <h3 className={styles.input_heading}>{heading}</h3>}
                {subheading && <h3 className={styles.input_subheading}>{subheading}</h3>}
                {required && <h3 className={styles.input_required}>{required}</h3>}
            </div>

            <div className="relative">
                {startIcon && <div className={styles.input_customicon}>
                    <Image src={startIcon} width={20} height={20} alt={iconAlt} />
                </div>}
                <input
                    id={name}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    type={type}
                    onChange={onChange}
                    name={name}
                    placeholder={placeHolder}
                    className={classNames(styles.input, styles[`${errorMessage ? "input_error" : ""}`])}
                />
                {errorMessage && (
                    <div>
                        <div className={styles.input_errormessage}>
                            <label>{errorMessage}</label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

Input.propTypes = {
    placeHolder: PropTypes.string.isRequired,
    type: PropTypes.oneOf<InputTypes>(Object.values(InputTypes)).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    startIcon: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    heading: PropTypes.string
};

export default Input;
