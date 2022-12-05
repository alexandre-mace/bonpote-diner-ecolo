import React from "react";

function Verre1({zoom}) {
    return (
        <svg
            id={"verre1"}
            xmlns="http://www.w3.org/2000/svg"
            width={23 * zoom}
            height={45 * zoom}
            fill="none"
            viewBox="0 0 118 225"
        >
            <path
                fill="#fff"
                stroke="#151924"
                strokeWidth="4.182"
                d="M95.53 83.48l-6.49 139.234H9.5L3 83.48h92.53z"
            ></path>
            <path
                fill="#fff"
                d="M15.47 211.188h67.61L88.5 95.005H10.06l5.41 116.183z"
            ></path>
            <path
                stroke="#151924"
                strokeMiterlimit="10"
                strokeWidth="4.182"
                d="M31.88 192.4L60.55 42.135 116.13 2"
            ></path>
        </svg>
    );
}

export default Verre1;