'use client'

import cn from "classnames"
import styles from './input.module.scss'
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"

export interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  type?: string,
  error?: string,
  width?: string,
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, width, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        type={type}
        className={cn(className, {
          [styles.text]: type === 'text' || type === 'number' || type === 'email' || type === 'password' || type === 'tel',
          [styles.checkbox]: type === 'checkbox',
        })}
        style={{ width: width }}
        ref={ref}
        autoComplete="off"
        {...rest}
      />
    )
  }
)
Input.displayName = "Input"

export default Input
