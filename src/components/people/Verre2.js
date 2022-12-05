import React from "react";

function Verre2({zoom}) {
    return (
        <svg
            id={"verre2"}
            xmlns="http://www.w3.org/2000/svg"
            width={23 * zoom}
            height={45 * zoom}
            fill="none"
            viewBox="0 0 117 225"
        >
            <path
                fill="#fff"
                stroke="#151924"
                strokeWidth="4.182"
                d="M114.699 83.6l-6.49 139.236h-79.46L22.249 83.6h92.45z"
            ></path>
            <path
                stroke="#151924"
                strokeMiterlimit="10"
                strokeWidth="4.182"
                d="M85.93 192.52L57.26 42.255 1.68 2.12"
            ></path>
        </svg>
    );
}

export default Verre2;