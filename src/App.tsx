import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import { SetValuePage } from './components/setPage/SetValuePage';
import {TablePage} from './components/TablePage/TablePage';


function App() {
    const [start, setStart] = useState(0)
    const [max, setMax] = useState(0)

    const [score, setScore] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [edit, setEdit] = useState(false)




    useEffect(() => {
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if (startValue && maxValue) {
            setStart(JSON.parse(startValue))
            setMax(JSON.parse(maxValue))
            setScore(JSON.parse(startValue))
        }
    }, [])

    //в каждой функции написать логику
    const startScore = (start: number) => {
        setStart(start);
        if (start < 0 || start == max){
            setError('incorrect value')
        }else{
            setError(null);
        }
    }
    const maxScore = (max: number) => {
        setMax(max);

        if (max<0 || max ==start){
            setError('incorrect value')
        }else{
            setError(null)
        }

    }
    const buttonSet = () => {
        setScore(start)
        setEdit(!edit)
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
    }
    // ______________________________________________________
    const increment = () => {
        if (score && score < max)
            setScore(score + 1)
    }
      const className = `${score === max ? s.red : ''} ${s.score}`
    const classNameInput = `${error ? s.inputRed : ''} ${s.score} ${className}`
    //______________________________________________________

    return (

            edit
            ?<SetValuePage maxScore={maxScore} buttonSet={buttonSet}  max={max} callBackInput={startScore} classNameInput={classNameInput} start={start} startScore={startScore}/>
            :<TablePage classNameInput={classNameInput} start={start} max={max} score={score} increment={increment} buttonSet={buttonSet} error={error}/>


    )
}

export default App;
