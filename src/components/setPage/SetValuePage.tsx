import React from 'react';
import s from '../../App.module.css';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';

export type SetValuePageType = {
    classNameInput: string
    start: number
    startScore: (score: number)=> void
    max: number
    callBackInput: (value: number)=> void
    buttonSet: ()=> void
    maxScore: (score: number)=> void
}



export const SetValuePage = (props: SetValuePageType) => {
    return (

        <div className={s.allWrapper}>
            <div className={s.wrapperInput1}>
                <div className={s.valueInput}>
                    <div>
                        <span>start value</span>
                        <Input className={props.classNameInput} type={'number'} value={props.start} callBackInput={props.startScore}/>
                    </div>
                    <div>
                        <span>max value</span>
                        <Input className={props.classNameInput}  type={'number'} value={props.max} callBackInput={props.maxScore}/>
                    </div>
                </div>
                <div className={s.setButton}>
                    <Button disabled={props.start < 0 || props.max < 0 || props.max <= props.start} name={'set'} callBackButton={props.buttonSet}/>
                </div>
            </div>
            </div>
    );
};
