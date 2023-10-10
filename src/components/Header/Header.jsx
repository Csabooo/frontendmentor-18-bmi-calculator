import React from 'react'
import classes from "./Header.module.css";

function Header() {
    return (
        <>
            {/*       <div className="background md:hidden">
                <div className={classes.circle}></div>
                <h1 className={classes.headers}>Body Mass <br />Index Calculator</h1>
                <p className={classes.p}>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div> */}
            <div className="background">
                <div className={classes.circle}></div>
                <div className={classes.box}>
                    <h1 className={classes.headers}>Body Mass <br />Index Calculator</h1>
                    <p className={classes.p}>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                </div>

            </div>
            <svg className="hidden xl:absolute xl:inline xl:top-92 xl:right-36" xmlns="http://www.w3.org/2000/svg" width="85.831" height="200.501" viewBox="0 0 85.831 200.501"><path fill="none" stroke="#ACC1DE" d="M82.719.092c7.831 41.7 2.31 140.08-82.43 200" /></svg>
        </>
    )
}

export default Header;