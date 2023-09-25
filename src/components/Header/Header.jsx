import React from 'react'
import classes from "./Header.module.css";

function Header() {
    return (
        <>
            <div className="background">
                <div className={classes.circle}></div>
                <h1 className={classes.headers}>Body Mass Index Calculator</h1>
                <p className={classes.p}>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
        </>
    )
}

export default Header;