import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Input} from './components/Input/Input';


function App() {

    const [start, setStart] = useState(0)
    const [max, setMax] = useState(0)

    const [score, setScore] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        let valueAsString = localStorage.getItem('scoreValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setScore(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('scoreValue', JSON.stringify(score))
    }, [score])



    const startScore = (start: number) => {
        if (start) {
            setStart(start)
        } else {
            setError('start меньше 0')
        }
        console.log(`start=` + start)
    }


    const maxScore = (max: number) => {
        if (max ) {
            setMax(max)
        } else {
            setError('максимальное значение меньше стартового')
        }
        console.log(`max=` + max)
    }

    const buttonSet = () => {

        localStorage.clear()
        reset(start)
    }

    // ______________________________________________________
    const increment = () => {
        if (score && score < max)
            setScore(score + 1)
    }
    const reset = (score: number) => {
        localStorage.clear()
        setScore(score)


    }
    const className = `${score === max ? s.red : ''} ${s.score}`

    //______________________________________________________


    return (
        <div className={s.allWrapper}>
            <div className={s.wrapperInput1}>
                <div className={s.valueInput}>
                    <div>
                        <span>start value</span>
                        <Input type={'number'} callBackInput={startScore}/>

                    </div>
                    <div>

                        <span>max value</span>
                        <Input type={'number'} callBackInput={maxScore}/>

                    </div>
                </div>
                <div className={s.setButton}>

                    <Button disabled={start < 0 || max < 0 || max <= start} name={'set'} callBackButton={buttonSet}/>

                </div>
            </div>
            <div className={s.wrapperButton2}>
                <div className={className}>
                    {/*className={error ? s.errorRed : ''}*/}
                    <div>
                        {score === null ? 'Введите значение and set' : score}
                        {/*проверка на ввод значение введи и отправь*/}
                    </div>

                </div>
                <div className={s.containerButton}>

                    <span><Button disabled={score === max} name={'inc'} callBackButton={increment}/></span>
                    <span><Button disabled={score === start} name={'reset'} callBackButton={buttonSet}/></span>

                </div>
            </div>
        </div>
    );
}

export default App;
