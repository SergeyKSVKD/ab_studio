"use client";

import styles from './form.module.scss'
import cn from "classnames"
import { ForwardedRef, forwardRef, useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormField from '../../../components/input/FormField';
import { CustomCheckbox } from '@/app/components/checkbox/Checkbox';
import Link from 'next/link';
import Image from 'next/image';
import FeedbackImg from '../../../../../public/feedback.webp'
import { Modal } from '@/app/components/modal/Modal';

const Form = forwardRef(function Contacts(props, ref: ForwardedRef<HTMLDivElement>) {
    const [stateName, setStateName] = useState<string>('')
    const [statePhone, setStatePhone] = useState<string>('')
    const [stateMail, setStateMail] = useState<string>('')
    const [stateTerms, setStateTerms] = useState<boolean>(false)

    const [isModal, setModal] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [isFocused, setIsFocused] = useState({
        name: false,
        phone: false,
        mail: false,
    })

    const schema = yup.object().shape({
        name: yup.string().required('Обязательно для заполнения.').matches(/[\u0400-\u04FF]/, 'В имени допустимы кириллические символы').min(3, "Имя должно быть не менее 3 символов.").max(40, "Имя не должно превышать 40 символов."),
        mail: yup.string().required('Обязательно для заполнения.').email('Введен некорректный адрес электронной почты').matches(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/, 'Введен некорректный адрес электронной почты'),
        phone: yup.string().required('Введите номер телефона.').min(14, 'Введите полный номер телефона с кодом региона/города. +7/8 (ххх) ххх-хх-хх'),
    })

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: stateName,
            phone: statePhone,
            mail: stateMail,
        }
    })
    const watchAllFields: any = watch()

    const submitHandler = async () => {
        const date = new Intl.DateTimeFormat('ru-Ru').format(new Date())

        const data = {
            stateName,
            statePhone,
            stateMail,
            date,
        }
        console.log(data);

        const JSONdata = JSON.stringify(data)

        const endpoint = '/api/form'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()

        if (result.status === "Сообщение успешно отправлено") {
            reset()
            setMessage('Заявка отправлена!')
            setTimeout(() => {
                setModal(true)
            }, 500)
            setTimeout(() => {
                setModal(false)
            }, 4000)
            setTimeout(() => {
                setStateTerms(false)
                setMessage('')
                setStateName('')
                setStatePhone('')
                setStateMail('')
            }, 4300)
        } else if (result.status === "error") {
            setMessage(result.message)
            setTimeout(() => {
                setModal(true)
            }, 500)
            setTimeout(() => {
                setModal(false)
            }, 4000)
            setTimeout(() => {
                setMessage('')
            }, 4300)
        } else if (result.status === 'Сообщение не отправлено') {
            setMessage('Сообщение не было отправлено, попробуйте позже')
            setTimeout(() => {
                setModal(true)
            }, 500)
            setTimeout(() => {
                setModal(false)
            }, 4000)
            setTimeout(() => {
                setMessage('')
            }, 4300)
        }
    }

    const onSubmit = () => {
        if (stateTerms) {
            try {
                submitHandler()
            } catch (error) { }
        } else {
            setMessage('Для отправки формы примите условия использования')
        }
    }

    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        if (watchAllFields[event.target.name] !== '') {
            setIsFocused({
                ...isFocused,
                [event.target.name]: true
            })
        }
        else {
            setIsFocused({
                ...isFocused,
                [event.target.name]: false
            })
        }
    }

    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused({
            ...isFocused,
            [event.target.name]: true
        })
    }

    const PhonePattern = /\D/g
    const getInputNumbersValue = (value: string) => {
        return value.replace(PhonePattern, '')
    }

    const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target
        let inputNumbersValue = getInputNumbersValue(input.value)
        let formattedInputValue = ''

        if (!inputNumbersValue) {
            return (input.value = '')
        }

        if (['7', '8', '9'].includes(inputNumbersValue[0])) {
            if (inputNumbersValue[0] === '9') {
                inputNumbersValue = `7${inputNumbersValue}`
            }
            const firstSymbol = inputNumbersValue[0] === '8' ? '8' : '+7'
            formattedInputValue = firstSymbol + ' '

            if (inputNumbersValue.length > 1) {
                formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`
            }

            input.value = formattedInputValue
        }
        if (!['7', '8', '9'].includes(inputNumbersValue[0])) {
            const firstSymbol = inputNumbersValue.slice(0, 3)
            formattedInputValue = firstSymbol

            if (inputNumbersValue.length > 3) {
                formattedInputValue += `-${inputNumbersValue.substring(3, 5)}`
            }
            if (inputNumbersValue.length > 5) {
                formattedInputValue += `-${inputNumbersValue.substring(5, 7)}`
            }
            if (inputNumbersValue.length > 7) {
                formattedInputValue += `-${inputNumbersValue.substring(7, 11)}`
            }

            input.value = formattedInputValue
        }
    }

    const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement
        if (event.key === 'Backspace' && getInputNumbersValue(input.value).length === 1) {
            input.value = ''
        }
        return input
    }

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Заполни анкету и получи проект мечты или пробный доступ к авторскому курсу "Ремонт с нуля" БЕСПЛАТНО</h2>
            <div ref={ref} className={styles.ref_block} />
            <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.image_container}>
                    <Image
                        src={FeedbackImg}
                        alt='Обратная связь'
                        fill
                        priority
                        quality={75}
                        placeholder='blur'
                        style={{
                            pointerEvents: 'none',
                        }}
                        draggable="true"
                    />
                </div>
                <div className={styles.form}>
                    <FormField
                        type='text'
                        width={'300px'}
                        name={'name'}
                        label={'Имя'}
                        placeholder={'Ваше имя'}
                        register={register}
                        error={errors.name?.message}
                        isFocused={isFocused.name}
                        isRequired
                        onFocus={focusHandler}
                        onBlur={blurHandler}
                        onChange={(e) => setStateName(e.target.value)}
                    />
                    <FormField
                        type='tel'
                        width={'300px'}
                        name={'phone'}
                        label={'Номер телефона'}
                        placeholder={'Номер телефона...'}
                        register={register}
                        error={errors.phone?.message}
                        isFocused={isFocused.phone}
                        isRequired
                        onFocus={focusHandler}
                        onBlur={blurHandler}
                        onInput={handlePhoneInput}
                        onKeyDown={handlePhoneKeyDown}
                        title={'Введите полный номер телефона с кодом региона/города. +7/8 (ххх) ххх-хх-хх'}
                        onChange={(e) => setStatePhone(e.target.value)}
                    />
                    <FormField
                        type='text'
                        width={'300px'}
                        name={'mail'}
                        label={'Электронная почта'}
                        placeholder={'Электронная почта...'}
                        register={register}
                        error={errors.mail?.message}
                        isFocused={isFocused.mail}
                        isRequired
                        onFocus={focusHandler}
                        onBlur={blurHandler}
                        onChange={(e) => setStateMail(e.target.value)}
                    />

                    <div className={styles.field}>
                        <div className={styles.terms}>
                            <CustomCheckbox
                                id="terms"
                                checked={stateTerms}
                                changeState={() => {
                                    setStateTerms(!stateTerms)
                                    setMessage('')
                                }}
                            />
                            <p className={cn(styles.agreement)}>Я прочитал <Link className={cn(styles.link)} href='https://abstudiokurs.ru/policy'>пользовательское соглашение</Link> и даю согласие на обработку
                                персональных данных</p>
                            {message && !stateTerms && (
                                <span role="alert" className={cn(styles.error_terms)}>
                                    {message}
                                </span>
                            )}
                        </div>
                    </div>
                    <button className={cn(styles.submit_btn)}
                        type="submit"
                    >
                        Получить
                    </button>
                    <Modal isModalActive={isModal} message={message} successful={message === 'Заявка отправлена!' ? 'true' : 'false'} />
                </div>
            </form>
        </section >
    )
})

export default Form