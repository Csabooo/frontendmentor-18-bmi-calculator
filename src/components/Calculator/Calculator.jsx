import React, { useState } from 'react'
import classes from "./Calculator.module.css"
import Metric from './Metric/Metric'
import Imperial from "./Imperial/Imperial";
import ResultsInfo from './ResultsInfo/ResultsInfo'

function Calculator() {

    const [defaultState, setState] = useState(true);
    const [defaultBMI, setBMI] = useState();

    const [defaultResult, setResult] = useState(true);


    const radioButtonHandler = () => {
        setState(prevState => !prevState)
    }


    const getValuesMetric = (bmi) => {
        if (bmi > 0) {
            setBMI(bmi);
            setResult(false);
        }

        else {
            setResult(true);
        }

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
                            <input onClick={radioButtonHandler} type="radio" name="radio" id="metric" defaultChecked={defaultState} />
                            <span className='ball'></span>
                        </label>
                        <span >Metric</span>
                    </div>
                    <div className={classes.row}>
                        <label htmlFor="imperial">
                            <input onClick={radioButtonHandler} type="radio" name="radio" id="imperial" defaultChecked={!defaultState} />
                            <span className='ball'></span>
                        </label>
                        <span>Imperial</span>
                    </div>

                </div>


                {defaultState ? (<Metric bmiIndex={getValuesMetric}></Metric>) : (<Imperial></Imperial>)}


                {defaultResult && <div className={classes.result}>
                    <h3>Welcome!</h3>
                    <p>
                        Enter your height and weight and you'll see your BMI result here
                    </p>
                </div>}

                {!defaultResult && <div className={classes.result}>
                    <p>Your BMI is...</p>
                    <h1>{defaultBMI}</h1>
                    <p>Your BMI suggests you’re a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs.</p>
                </div>}


            </div >
            <ResultsInfo></ResultsInfo>
        </>
    )
}

export default Calculator