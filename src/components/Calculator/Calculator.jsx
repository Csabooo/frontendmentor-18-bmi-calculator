import React, { useState } from 'react'
import classes from "./Calculator.module.css"
import Metric from './Metric/Metric'
import Imperial from "./Imperial/Imperial";
import ResultsInfo from './ResultsInfo/ResultsInfo'

function Calculator() {

    const [defaultState, setState] = useState(true);

    const radioButtonHandler = () => {
        setState(prevState => !prevState)
    }

    return (
        <>
            <div className={classes.calculator_table}>
                <h3>
                    Enter your details below
                </h3>

                <div className={classes.radioButton}>
                    <div className={classes.row}>
                        <label htmlFor="metric">
                            <input onClick={radioButtonHandler} type="radio" name="radio" id="metric" checked={defaultState} />
                            <span className='ball'></span>
                        </label>
                        <span >Metric</span>
                    </div>
                    <div className={classes.row}>
                        <label htmlFor="imperial">
                            <input onClick={radioButtonHandler} type="radio" name="radio" id="imperial" checked={!defaultState} />
                            <span className='ball'></span>
                        </label>
                        <span>Imperial</span>
                    </div>

                </div>


                {defaultState ? (<Metric></Metric>) : (<Imperial></Imperial>)}

                <div className={classes.result}>
                    <h3>Welcome!</h3>
                    <p>
                        Enter your height and weight and you'll see your BMI result here
                    </p>
                </div>


            </div>
            <ResultsInfo></ResultsInfo>
        </>
    )
}

export default Calculator