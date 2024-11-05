import React from "react";
import cn from 'classnames'
import styles from './input.module.scss'
import Input from "./CustomInput";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  weight: ["400", '700', '300', '900'],
  subsets: ["latin", 'latin-ext'],
  display: "swap",
})

export type FormFieldType = 'text' | 'password' | 'tel' | 'textarea'

export interface IFormFieldProps {
    classNames?: string,
    value?: string
    width?: string,
    error?: string,
    label?: string,
    name?: string,
    type: FormFieldType,
    placeholder?: string,
    isFocused?: boolean,
    isRequired?: boolean,
    register?: any,
    title?: string,
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const FormField: React.FC<IFormFieldProps> = ({
    classNames, value, error, label, name, placeholder, type, isFocused, isRequired, width = '100%', title, onBlur, onFocus, onChange, onInput, onKeyDown, register,
}: IFormFieldProps) => {
    return (
        <div className={cn(styles.field, classNames, {
            [styles.active]: isFocused,
        })}>
            <label htmlFor={name}>
                <span className={styles.label}>{label}{isRequired && <span className={styles.required}> *</span>}</span>
                {
                    type === 'text' && <Input
                        onChange={onChange}
                        value={value}
                        id={name}
                        name={name}
                        width={width}
                        className={cn(
                            montserrat.className,
                            { [styles.error_outline]: error }
                        )}
                        type="text"
                        title={title}
                        placeholder={placeholder}
                        aria-invalid={error ? "true" : "false"}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        {...register(name)}
                    />
                }
                {
                    type === 'tel' && <Input
                        onChange={onChange}
                        value={value}
                        id={name}
                        name={name}
                        width={width}
                        className={cn(
                            montserrat.className,
                            { [styles.error_outline]: error }
                        )}
                        type="tel"
                        title={title}
                        placeholder={placeholder}
                        aria-invalid={error ? "true" : "false"}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onInput={onInput}
                        onKeyDown={onKeyDown}
                        {...register(name)}
                    />
                }
                <div className={styles.container}>
                    {error && (
                        <span role="alert" className={cn(styles.alert)}>
                            {error}
                        </span>
                    )}
                </div>
            </label>
        </div>
    )
}

export default FormField
