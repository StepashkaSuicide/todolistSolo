import React, {ChangeEvent} from 'react';

type InputType = {
    callBack: (value: string) => void
}

export const Input = (props: InputType) => {

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.value)

    }

    return (
        <input onChange={inputHandler} type="number"/>
    );
};
