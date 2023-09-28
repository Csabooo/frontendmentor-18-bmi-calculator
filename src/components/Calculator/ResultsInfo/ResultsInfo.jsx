import React from 'react'
import classes from "./ResultsInfo.module.css"
import manEating from "../../../assets/images/image-man-eating.webp"

function ResultsInfo() {
    return (
        <>
            <div className={classes.resultsTable}>
                <div className='relative -left-36 w-[140%]'><img className="mx-auto" src={manEating}></img></div>

                <div className={classes.results}>
                    <h2>What your BMI result means</h2>
                    <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
                </div>
            </div>
        </>
    )
}

export default ResultsInfo;