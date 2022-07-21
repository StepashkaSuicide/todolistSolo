import React from 'react';
import s from '../../App.module.css';
import {Button} from '../Button/Button';

export type TablePageType = {

    classNameInput: string
    start: number
    max: number
    score: number | null
    increment: ()=>void
    buttonSet: ()=>void
    error: string | null
}





export const TablePage = (props: TablePageType) => {
    return (
        <div className={s.allWrapper}>
        <div>
            <div className={s.wrapperButton2}>
                <div className={props.classNameInput}>
                    <div className={s.wrapperScore}>
                        {props.error ? props.error : props.score}
                    </div>
                </div>
                <div className={s.wrapperButton3}>
                    <div className={s.containerButton}>
                        <span><Button disabled={props.score === props.max} name={'inc'} callBackButton={props.increment}/></span>
                        <span><Button disabled={props.score === props.start} name={'reset'} callBackButton={props.buttonSet}/></span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
