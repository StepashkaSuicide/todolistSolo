import React, {useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Input} from './components/Input/Input';


function App() {

   const startValue = 0
   const maxValue = 5

    const [score, setScore] = useState(startValue)
    const [error, setError] = useState<string | null>(null)
    const [input, setInput] = useState(startValue)


    const increment = () => {
        if (score < maxValue)
            setScore(score + 1)
    }
    const reset = () => {
        setScore(startValue)
    }

    const setStartValue = ( ) => {
        setScore(input)
    }


    const className = `${score === maxValue ? s.red : ''} ${s.score}`


    return (
        <div className={s.allWrapper}>


            <div className={s.wrapperInput1}>
                <div className={s.valueInput}>
                    <div>
                        <span>max value</span>
                        <Input callBack={setStartValue}/>
                    </div>
                    <div>
                        <span>start value</span>

                        <Input callBack={() => {
                        }}/>
                    </div>
                </div>
                <div className={s.setButton}>
                    <Button disabled={true} name={'set'} callBack={() => {
                    }}/>
                </div>
            </div>


            <div className={s.wrapperButton2}>

                <div className={className}>
                    <div>{score}</div>
                </div>


                <div className={s.containerButton}>
                    <span><Button disabled={score === 5} name={'inc'} callBack={increment}/></span>
                    <span><Button disabled={score === 0} name={'reset'} callBack={reset}/></span>


                </div>

            </div>
        </div>
    );
}

export default App;
