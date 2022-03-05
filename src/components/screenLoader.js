import BounceLoader from "react-spinners/BounceLoader";
import {css} from "@emotion/react";

export const ScreenLoader = ({loader})=>{
    const override = css`
    display: block;
    margin: 0 auto;
    background-color:#041c2c;
    `;
    return (
        <div className="loader-screen">
            <BounceLoader loading={loader} color="#DB162F" css={override}/>
        </div>
    )
}