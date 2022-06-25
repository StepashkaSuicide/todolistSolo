import React, {useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Input} from './components/Input/Input';


function App() {

    const [start, setStart] = useState(0)
    const [max, setMax] = useState(2)

    const [score, setScore] = useState(start)
    const [error, setError] = useState<string | null>(null)


    const startScore = (start: number) => {
        if (start ) {
            setStart(start)
        } else {
            setError('errorrrr')

        }
        console.log(`start=` + start)
    }

    const maxScore = (max: number) => {
        if (max) {
            setMax(max)
        } else {
            setError('errorrrr')
        }
        console.log(`max=` +max)
    }

    const buttonSet = () => {
        reset(start)
    }

    // ______________________________________________________
    const increment = () => {
        if (score < max)
            setScore(score + 1)
    }
    const reset = (score: number) => {
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

                    <Button disabled={false} name={'set'} callBackButton={buttonSet}/>

                </div>
            </div>
            <div className={s.wrapperButton2}>
                <div className={className}>

                    <div >
                        {start>=0 && start < max && max >= 0 ? score : error}
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
