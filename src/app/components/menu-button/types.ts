import CSS from 'csstype'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface MenuButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: React.ReactNode,
    color?: string,
    width?: string,
    style?: CSS.Properties,
    opened: boolean,
    onClick?: () => void,
}