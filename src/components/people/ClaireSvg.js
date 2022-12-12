import React from "react";
import {Claire, computePersonColor} from "../../domain/people";

function ClaireSvg({handleHoveredPerson, setHoveredPerson, handlePickedPerson, zoom, hoveredPerson, pickedPerson}) {
    return (
        <svg
            id={"claire"}
            data-name={Claire}
            xmlns="http://www.w3.org/2000/svg"
            width={106 * zoom}
            height={160 * zoom}
            fill="none"
            viewBox="0 0 505 691"
        >
            <g clipPath="url(#clip0_277_2551)">
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    fill="#1B0D6B"
                    stroke="#1B0D6B"
                    strokeWidth="4.182"
                    d="M38.282 335.582h428.436c21.141 0 38.282 15.981 38.282 35.695v389.215c0 19.713-17.141 35.695-38.282 35.695H38.281C17.141 796.187 0 780.205 0 760.492V371.277c0-19.714 17.14-35.695 38.282-35.695z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    stroke="#151924"
                    strokeMiterlimit="10"
                    strokeWidth="2.469"
                    d="M156.103 373.344s-2.15 25.244-4.38 36.153c-2.23 10.91-6.53 25.562-10.59 35.835"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    stroke="#151924"
                    strokeWidth="4.182"
                    d="M378.043 510.016l1.08 14.921"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    fill="#151924"
                    d="M260.743 1.164c41.97 1.354 73.43 66.175 84.73 112.202 11.31 46.027 31.46 73.978 46.03 87.834 14.49 13.856 6.45 55.025 0 78.437s16.25 45.072 8.12 83.056c-8.12 37.985-79.95 52.239-152.57 53.194-72.63.956-145.25 5.017-149.31-33.764-4.06-38.701-1.59-66.174 5.65-101.689 7.25-35.516-11.31-61.636.8-86.481 12.1-24.845 35.51-43.399 43.56-82.976 8.04-39.577 37.11-112.202 112.99-109.733v-.08z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable colorable"}
                    fill={computePersonColor(Claire, hoveredPerson, pickedPerson)}
                    stroke="#151924"
                    strokeWidth="4.182"
                    d="M265.524 272.055v.001c5.61.65 11.12.785 16.33.83 1.12.009 2.24.015 3.33.02 3.99.02 7.74.039 11.27.255 9.03.55 15.76 2.363 19.95 8.016v.007c2.18 2.917 3.19 5.803 3.98 8.794.17.633.34 1.286.5 1.954.6 2.396 1.24 4.973 2.38 7.42 3.11 6.65 9.75 12.245 27.49 16.924 6.34 1.667 11.87 3.038 16.72 4.241 8.73 2.163 15.27 3.782 20.34 5.6 3.88 1.392 6.73 2.842 8.92 4.629 2.16 1.764 3.79 3.932 5.13 6.902.12.28.3.901.51 1.982.21 1.048.41 2.401.61 4.055.41 3.305.8 7.713 1.17 13.078.74 10.726 1.41 25.183 2.01 42.099 1.2 33.828 2.12 77.42 2.81 120.517.69 43.095 1.16 85.683 1.45 117.498.14 15.907.25 29.121.31 38.358.04 4.618.06 8.242.08 10.712l.01 1.614v.066H97.854c0-.467 0-1.009.01-1.625.01-2.432.03-6 .06-10.545.05-9.09.13-22.089.24-37.723.21-31.267.54-73.074.98-115.231.44-42.158.999-84.66 1.689-117.322.34-16.332.711-30.193 1.111-40.317.21-5.064.41-9.177.63-12.19.11-1.509.22-2.723.32-3.634.06-.456.11-.82.16-1.099.02-.138.04-.247.06-.329a.552.552 0 01.03-.094c0-.023.01-.034.01-.033.21-.647 1.09-1.679 3.25-3.007 2.07-1.265 4.92-2.568 8.39-3.94 4.53-1.792 9.92-3.622 15.72-5.595 3.11-1.056 6.34-2.154 9.63-3.308 9.33-3.28 19-6.99 27.02-11.4 7.96-4.373 14.67-9.633 17.61-16.195v-.003c5.26-11.775 10.79-21.26 22.05-27.128 11.36-5.917 28.93-8.342 58.7-4.854z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    stroke="#151924"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="4.182"
                    d="M186.213 309.637s1.28 3.504 11.23 10.352c9.96 6.849 24.29 9.317 36.15 13.06 11.87 3.743 36.16 1.672 48.82.398 12.66-1.274 44.27-12.502 44.27-12.502M345.084 367.891s5.01 25.004 12.5 37.905c7.48 12.9 13.3 39.895 17.44 44.434"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    fill="#fff"
                    d="M141.144 482.67l-2.09.09v-.05l-.01-.153-.03-.598c-.02-.526-.05-1.299-.1-2.29l-.38-8.332c-.33-6.983-.8-16.507-1.34-26.67-1.09-20.361-2.48-43.176-3.7-53.324-1.53-12.702-3.28-26.196-7.87-35.14-2.27-4.414-5.1-7.461-8.71-8.861-3.09-1.197-7.05-1.306-12.23.414l-2.55 1.07c-28.66 12.011-35.34 41.866-31.78 74.53 1.28 11.68.49 34.226-.45 61.189v.124l-.01.146c-.94 27.092-2.05 58.814-1.47 89.093.59 30.369 2.86 59.113 8.62 80.211 2.89 10.555 6.6 19.021 11.27 24.81 4.61 5.725 10.11 8.772 16.75 8.772 6.66 0 13.65-3.491 20.89-10.188 7.22-6.68 14.47-16.353 21.63-28.233 14.31-23.749 28.01-55.94 40.15-89.56 24.27-67.226 42.16-139.744 46.2-160.819l.21-1.096 1.02-.435c7.8-3.302 16.49-9.612 23.31-15.201 3.4-2.778 6.29-5.344 8.34-7.216a164.422 164.422 0 003.01-2.825c.07-.069.12-.12.16-.155l.04-.038.01-.009v-.002l1.62-1.591 1.45 1.742 20.55 24.606.33.396.1.505-2.04.439c2.04-.439 2.04-.438 2.04-.437l.01.006v.022l.02.089.08.353.29 1.377c.26 1.209.64 2.984 1.13 5.254.97 4.539 2.37 11.054 4.06 18.958 3.38 15.807 7.95 37.169 12.68 59.387 9.46 44.423 19.6 92.306 22.28 106.026v.003c3.71 19.228 10.98 44.047 23.56 64.003 12.57 19.937 30.24 34.719 54.81 34.719 7.77 0 14.08-3.092 19.28-8.704 5.25-5.672 9.37-13.947 12.52-24.246 6.29-20.6 8.47-48.637 8.47-78.126 0-43.184-4.65-88.873-7.64-118.208-1.1-10.762-1.97-19.323-2.31-24.751-1.22-19.808-5.24-43.743-12.53-63.406-3.65-9.833-8.08-18.504-13.33-25.047-5.24-6.54-11.18-10.83-17.86-12.194-6.63-1.355-11.36.444-14.93 4.063-3.69 3.747-6.26 9.595-8.01 16.51-3.33 13.13-3.45 29.092-3.52 38.841-.01.505-.01.994-.01 1.464-.08 9.403 1.21 39.645 2.52 67.631.66 13.973 1.32 27.353 1.82 37.241.25 4.944.45 9.015.6 11.849.07 1.417.13 2.525.17 3.279l.04.859.02.22v.073l-2.09.11 2.09-.11-4.02.901-49.44-120.92v-.013l-.02-.028v-.01l-.07-.152-.25-.594c-.23-.521-.56-1.288-.99-2.27l-3.56-8.24c-2.98-6.898-7.02-16.286-11.28-26.243-4.18-9.767-8.86-15.898-13.7-19.238-4.75-3.281-9.83-3.981-15.21-2.571-1.19.311-3.1 1.197-5.65 2.687-2.51 1.462-5.51 3.416-8.83 5.739-6.64 4.644-14.51 10.698-22.32 17.076-7.81 6.376-15.53 13.057-21.87 18.948-6.39 5.934-11.24 10.947-13.43 14.017-4.66 6.538-20.87 28.962-35.91 49.742-7.52 10.392-14.75 20.376-20.1 27.762-2.68 3.693-4.88 6.737-6.42 8.857l-1.77 2.454-.47.643-.12.165-.03.041-.01.011v.003l-1.69-1.226zm0 0l-2.09.091.26 5.994 3.52-4.859-1.69-1.226z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    stroke="#151924"
                    strokeWidth="4.182"
                    d="M141.144 482.67l-2.09.09v-.05l-.01-.153-.03-.598c-.02-.526-.05-1.299-.1-2.29l-.38-8.332c-.33-6.983-.8-16.507-1.34-26.67-1.09-20.361-2.48-43.176-3.7-53.324-1.53-12.702-3.28-26.196-7.87-35.14-2.27-4.414-5.1-7.461-8.71-8.861-3.09-1.197-7.05-1.306-12.23.414l-2.55 1.07c-28.66 12.011-35.34 41.866-31.78 74.53 1.28 11.68.49 34.226-.45 61.189v.124l-.01.146c-.94 27.092-2.05 58.814-1.47 89.093.59 30.369 2.86 59.113 8.62 80.211 2.89 10.555 6.6 19.021 11.27 24.81 4.61 5.725 10.11 8.772 16.75 8.772 6.66 0 13.65-3.491 20.89-10.188 7.22-6.68 14.47-16.353 21.63-28.233 14.31-23.749 28.01-55.94 40.15-89.56 24.27-67.226 42.16-139.744 46.2-160.819l.21-1.096 1.02-.435c7.8-3.302 16.49-9.612 23.31-15.201 3.4-2.778 6.29-5.344 8.34-7.216a164.422 164.422 0 003.01-2.825c.07-.069.12-.12.16-.155l.04-.038.01-.009v-.002l1.62-1.591 1.45 1.742 20.55 24.606.33.396.1.505-2.04.439c2.04-.439 2.04-.438 2.04-.437l.01.006v.022l.02.089.08.353.29 1.377c.26 1.209.64 2.984 1.13 5.254.97 4.539 2.37 11.054 4.06 18.958 3.38 15.807 7.95 37.169 12.68 59.387 9.46 44.423 19.6 92.306 22.28 106.026v.003c3.71 19.228 10.98 44.047 23.56 64.003 12.57 19.937 30.24 34.719 54.81 34.719 7.77 0 14.08-3.092 19.28-8.704 5.25-5.672 9.37-13.947 12.52-24.246 6.29-20.6 8.47-48.637 8.47-78.126 0-43.184-4.65-88.873-7.64-118.208-1.1-10.762-1.97-19.323-2.31-24.751-1.22-19.808-5.24-43.743-12.53-63.406-3.65-9.833-8.08-18.504-13.33-25.047-5.24-6.54-11.18-10.83-17.86-12.194-6.63-1.355-11.36.444-14.93 4.063-3.69 3.747-6.26 9.595-8.01 16.51-3.33 13.13-3.45 29.092-3.52 38.841-.01.505-.01.994-.01 1.464-.08 9.403 1.21 39.645 2.52 67.631.66 13.973 1.32 27.353 1.82 37.241.25 4.944.45 9.015.6 11.849.07 1.417.13 2.525.17 3.279l.04.859.02.22v.073m-237.16-32.459l1.69 1.226m-1.69-1.226l-2.09.091.26 5.994 3.52-4.859m-1.69-1.226l1.69 1.226m235.47 31.233l-4.02.901-49.44-120.92v-.013l-.02-.028v-.01l-.07-.152-.25-.594c-.23-.521-.56-1.288-.99-2.27l-3.56-8.24c-2.98-6.898-7.02-16.286-11.28-26.243-4.18-9.767-8.86-15.898-13.7-19.238-4.75-3.281-9.83-3.981-15.21-2.571-1.19.311-3.1 1.197-5.65 2.687-2.51 1.462-5.51 3.416-8.83 5.739-6.64 4.644-14.51 10.698-22.32 17.076-7.81 6.376-15.53 13.057-21.87 18.948-6.39 5.934-11.24 10.947-13.43 14.017-4.66 6.538-20.87 28.962-35.91 49.742-7.52 10.392-14.75 20.376-20.1 27.762-2.68 3.693-4.88 6.737-6.42 8.857l-1.77 2.454-.47.643-.12.165-.03.041-.01.011v.003m235.47 31.233l-2.09.11 2.09-.11z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    stroke="#151924"
                    strokeMiterlimit="10"
                    strokeWidth="2.469"
                    d="M141.143 482.676c-17.84 22.138-49.46 86.56-53.6 138.082"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    fill="#151924"
                    d="M376.914 516.766l-.88-1.895-3.79 1.766.88 1.895 3.79-1.766zm44.16 107.3a2.095 2.095 0 002.46 1.642 2.087 2.087 0 001.64-2.459l-4.1.817zm-47.95-105.534c2.09 4.472 5.58 10.428 9.72 17.458 4.16 7.07 9.01 15.314 13.91 24.48 9.79 18.342 19.68 40.276 24.32 63.596l4.1-.817c-4.75-23.901-14.86-46.252-24.73-64.749-4.95-9.253-9.84-17.568-14-24.63-4.18-7.104-7.55-12.856-9.53-17.104l-3.79 1.766z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    fill="#fff"
                    stroke="#151924"
                    strokeWidth="4.182"
                    d="M299.873 177.782c-.05-.396-.07-.726-.08-.953l5.89-14.7c.38-.555.74-1.111 1.11-1.665 1.81-2.758 3.57-5.426 5.69-7.248 1.24-1.065 2.49-1.718 3.79-1.92 1.29-.198 2.85.005 4.82 1.03 1.18.626 2.1 2.326 2.08 5.637-.02 3.183-.93 7.173-2.49 11.148-1.55 3.964-3.69 7.756-6.03 10.559-2.42 2.889-4.73 4.351-6.58 4.473-2.39.156-3.97-.308-5.05-.942-1.07-.638-1.8-1.544-2.29-2.533-.5-1.003-.74-2.057-.86-2.886z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    fill="#fff"
                    stroke="#151924"
                    strokeWidth="4.182"
                    d="M295.233 280.436h-2.09 2.09zm-2.09-.504v.325c-.04.061-.12.172-.27.336-.39.411-1.04.94-1.99 1.565-1.88 1.241-4.66 2.664-8.1 4.143-6.85 2.951-16.03 6.008-25.23 8.218-9.23 2.218-18.29 3.538-24.95 3.125-3.35-.207-5.86-.841-7.46-1.821-1.48-.898-2.2-2.063-2.2-3.76v-64.2l-1.35-.507v-.001l-.03-.009c-.02-.011-.07-.029-.13-.054-.12-.052-.31-.134-.57-.251-.5-.233-1.24-.602-2.16-1.13a37.98 37.98 0 01-6.97-5.237c-5.28-4.972-11.16-13.193-13.34-26.189-2.26-13.411-3.61-27.158-4.39-37.565-.39-5.201-.64-9.56-.79-12.618-.08-1.528-.13-2.731-.16-3.55-.01-.166-.02-.317-.02-.451.02-.021.03-.042.05-.064.38-.436.94-1.075 1.68-1.875 1.47-1.602 3.63-3.848 6.37-6.404 5.48-5.121 13.24-11.445 22.38-16.349 17.42-9.341 35.37-19.893 45.72-34.625a281.481 281.481 0 0010.95 19.958c7.53 12.477 17.96 27.397 29.55 37.027-.52 9.2-2.92 25.265-6.07 40.688-1.63 7.995-3.45 15.772-5.3 22.282-1.87 6.573-3.71 11.66-5.33 14.412l-.3.511.01.593c.2 9.735.3 25.724.35 39.293.02 6.782.04 12.954.04 17.431 0 2.238.01 4.053.01 5.308v1.445z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    stroke="#151924"
                    strokeMiterlimit="10"
                    strokeWidth="2.469"
                    d="M224.043 230.259s12.18 5.892 27.39 5.574c15.29-.319 31.3-8.919 38.06-15.608M222.994 180.17s12.66 12.9 43-1.672M263.133 173.57l5.33 9.317M236.703 140.121c-.8 4.778-.01 14.573-2.96 16.405-2.95 1.831-9.78.796-9.78 3.981 0 3.185 8.12 7.247 8.12 7.247"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    fill="#151924"
                    d="M267.433 145.612c0 4.539-1.75 8.282-3.98 8.282s-3.98-3.664-3.98-8.282c0-4.619 1.75-8.282 3.98-8.282s3.98 3.663 3.98 8.282zM223.003 140.126c0 4.539-1.75 8.282-3.98 8.282s-3.98-3.664-3.98-8.282c0-4.619 1.75-8.282 3.98-8.282s3.98 3.663 3.98 8.282zM259.543 123.317s11.08-.796 21.67 6.848l-21.67-6.848z"
                ></path>
                <path
                    onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                    stroke="#151924"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5.972"
                    d="M259.543 123.317s11.08-.796 21.67 6.848"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_277_2551">
                    <path
                        onMouseOver={(e) => handleHoveredPerson(e)}
                    onMouseLeave={() => setHoveredPerson(null)}
                    onClick={(e) => handlePickedPerson(e)}
                    className={"clickable"}
                        fill="#fff"
                        d="M0 0H505V690H0z"
                        transform="translate(0 .582)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export default ClaireSvg;