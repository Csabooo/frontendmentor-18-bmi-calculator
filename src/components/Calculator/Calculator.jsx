import React from 'react'
import classes from "./Calculator.module.css"
import Metric from './Metric/Metric'
import Imperial from "./Imperial/Imperial";
import ResultsInfo from './ResultsInfo/ResultsInfo'

function Calculator() {
    return (
        <>

            <div className={classes.calculator_table}>
                <h2>
                    Enter your details below
                </h2>
                {/*             -----------------------------------RADIO BUTTON-------------------------------------*/}
                {/*           <div className={classes.radio}>
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[2.5rem]">
                        <input
                            class="relative float-left -ml-[1.3rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="radio"
                            name="flexRadioDefault"
                            id="metric" />
                        <label
                            class="mt-px inline-block pl-[0.7rem] hover:cursor-pointer"
                            htmlFor="metric">
                            Metric
                        </label>
                    </div>
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pr-[1.1rem]">
                        <input
                            class="relative float-left -ml-[1.3rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="radio"
                            name="flexRadioDefault"
                            id="imperial"
                            checked />
                        <label
                            class="mt-px inline-block pl-[0.7rem] hover:cursor-pointer"
                            htmlFor="imperial">
                            Imperial
                        </label>
                    </div>
                </div> */}

                <div className={classes.radioButton}>
                    <div className={classes.row}>
                        <label htmlFor="radio1">
                            <input type="radio" name="radio" id="radio1" />
                            <span className='ball'></span>
                        </label>
                        <span>Metric</span>
                    </div>

                    <div className={classes.row}>
                        <label htmlFor="radio2">
                            <input type="radio" name="radio" id="radio2" />
                            <span className='ball'></span>
                        </label>
                        <span>Imperial</span>
                    </div>

                </div>

                {/*             -----------------------------------RADIO BUTTON-------------------------------------*/}
                <div>

                    {/*             -----------------------------------INPUT-OUTPUT TABLE METRIC-------------------------------------*/}

                    <Metric></Metric>
                    {/*             -----------------------------------INPUT-OUTPUT TABLE METRIC-------------------------------------*/}


                    {/*             -----------------------------------INPUT-OUTPUT TABLE IMERIAL-------------------------------------*/}

                    <Imperial></Imperial>
                    {/*             -----------------------------------INPUT-OUTPUT TABLE IMERIAL-------------------------------------*/}

                    <div className={classes.result}>
                        <p>Your BMI is...</p>
                        <h1>23.4</h1>
                        <p>
                            Your BMI suggests you’re a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs.
                        </p>
                    </div>
                </div>

            </div>
            <ResultsInfo></ResultsInfo>
        </>
    )
}

export default Calculator