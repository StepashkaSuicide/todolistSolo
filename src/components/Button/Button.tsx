import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string
    callBackButton: () => void
    disabled: boolean
}


export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBackButton()
    }


    return (
        <button
            disabled={props.disabled}
            className={s.button}
            onClick={onClickHandler}>
            {props.name}
        </button>
    );
};
