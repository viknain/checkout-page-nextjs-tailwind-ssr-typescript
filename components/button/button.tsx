import * as React from 'react'
import PropTypes from "prop-types";
import styles from './button.module.scss'
import { ButtonCategoryTypes } from './buttonTypes';
import classNames from 'classnames';
import Image from 'next/image';

export interface ButtonProps {
    category: ButtonCategoryTypes;
    label?: string;
    bottonIcon?: string;
    onClick: () => void;
    disabled?: boolean
    endIcon?: string
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
    category = ButtonCategoryTypes.Primary,
    label,
    bottonIcon,
    onClick,
    disabled = false,
    endIcon,
    ...props
}) => {
    return (
        <button
            disabled={disabled}
            type="button"
            onClick={onClick}
            className={classNames(styles.button, styles[`button-${category}`])}
            {...props}
        >
            {bottonIcon && <div className={styles.input_customicon}>
                <Image src={bottonIcon} width={85} height={20} alt="" />
            </div>}
            {label}
            {endIcon && <Image src={endIcon} width={11} height={9} alt="" />}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    category: PropTypes.oneOf<ButtonCategoryTypes>(
        Object.values(ButtonCategoryTypes)
    ).isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    endIcon: PropTypes.string,
    bottonIcon: PropTypes.string
};

export default Button;