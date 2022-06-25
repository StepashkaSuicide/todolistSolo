import React, {ChangeEvent} from 'react';

type InputType = {
    callBackInput: (value: number)=> void
    type: string

}

export const Input = (props: InputType) => {

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBackInput(Number(e.currentTarget.value))

    }

    return (
        <input onChange={inputHandler} type={props.type}/>
    );
};
