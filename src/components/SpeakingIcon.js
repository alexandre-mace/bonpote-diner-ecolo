import * as React from "react"

const SpeakingIcon = (props) => (
    <svg
        width={27}
        height={26}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fill="url(#left-to-right)" clipPath="url(#a)">
            <path d="M3.107 9.968h1.611v6.445H3.107zM6.33 11.176h1.611v4.028H6.33zM9.552 7.551h1.611V18.83H9.552zM12.775.703h1.611v24.975h-1.611zM15.998 7.954h1.611v10.473h-1.611zM19.221.3h1.611v25.781h-1.611zM22.443 9.565h1.611v7.251h-1.611z" />
        </g>
        <defs>
            <linearGradient id="left-to-right">
                <stop offset="0" stopColor="#0EFAA5">
                    <animate dur={props.duration + "ms"} attributeName="offset" fill="freeze" from="0" to="1" />
                </stop>
                <stop offset="0" stopColor="#27BBB9">
                    <animate dur={props.duration + "ms"} attributeName="offset" fill="freeze" from="0" to="1" />
                </stop>
            </linearGradient>
            <clipPath id="a">
                <path
                    fill="#fff"
                    transform="translate(.588 .197)"
                    d="M0 0h25.781v25.781H0z"
                />
            </clipPath>
        </defs>
    </svg>
)

export default SpeakingIcon