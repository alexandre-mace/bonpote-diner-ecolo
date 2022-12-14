import {Catherine, computePersonColor} from "../../domain/people";

const CatherineSvg = ({handleHoveredPerson, setHoveredPerson, handlePickedPerson, zoom, hoveredPerson, pickedPerson}) => {
    return (
        <svg
            id={"catherine"}
            data-name={Catherine}
            xmlns="http://www.w3.org/2000/svg"
            width={162 * zoom}
            height={322 * zoom}
            fill="none"
            viewBox="0 0 162 322"
        >
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#1B0D6B"
                d="M24.246 321.463h-7.46l5.784-76.162h11.585l-9.909 76.162z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#1B0D6B"
                stroke="#1B0D6B"
                strokeWidth="0.863"
                d="M105.04 245.733h10.693l5.719 75.299h-6.616l-9.796-75.299zM25.15 69.862h88.404a7.9 7.9 0 017.9 7.9v86.136a7.9 7.9 0 01-7.9 7.899H25.15a7.9 7.9 0 01-7.9-7.899V77.761a7.9 7.9 0 017.9-7.9z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#151924"
                d="M57.306.994c8.232 0 18.354 9.514 18.781 18.19.428 8.66 3.599 12.981 2.482 16.268-1.118 3.286-2.449 7.164.23 9.99 2.678 2.826 2.678 8.397 2.678 8.397s-14.97 2.136-21.937 1.117c-6.967-1.035-12.11 1.25-18.075.28s-9.399-2.334-12.998-2.17c-3.598.165-5.57-1.281-5.57-1.281s2.235-4.798 3.352-8.578c1.118-3.779-.082-6.244.082-9.136.165-2.875 6.869-10.516 7.641-16.596.773-6.096 3.434-16.465 23.334-16.465V.994z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable colorable"}
                fill={computePersonColor(Catherine, hoveredPerson, pickedPerson)}
                stroke="#151924"
                strokeWidth="0.863"
                d="M62.034 52.043l.004-.007.252-.357c.419.204.995.503 1.684.86 2.845 1.476 7.598 3.941 10.963 4.75l-.102.42s0 0 0 0c.988.24 2.537 1.005 4.408 2.183 1.859 1.172 3.998 2.728 6.157 4.52 4.326 3.589 8.687 8.084 11.032 12.264 1.16 2.067 2.25 5.584 3.3 9.843 1.047 4.246 2.042 9.177 3.023 14.045l.009.045c.977 4.846 1.941 9.628 2.926 13.577.495 1.981.996 3.761 1.51 5.239.511 1.47 1.045 2.672 1.612 3.479 2.157 3.064 3.708 4.296 4.836 5.021.215.139.415.259.593.366l.145.087c.217.131.392.242.543.357.284.218.489.459.652.892.365.972 1.064 4.201 1.048 7.18-.008 1.492-.196 2.866-.657 3.852-.228.488-.514.863-.862 1.116-.344.25-.769.397-1.311.397H7.139c-1.731 0-3.119-.685-4.182-2.032-1.078-1.365-1.837-3.431-2.226-6.198-.778-5.534-.052-13.706 2.326-24.172.796-3.5 1.537-6.819 2.235-9.944 1.393-6.242 2.614-11.709 3.749-16.292.851-3.437 1.652-6.368 2.44-8.748.789-2.386 1.556-4.194 2.33-5.4 1.553-2.415 4.403-4.591 7.79-6.46 3.376-1.865 7.239-3.4 10.764-4.553 3.57-1.168 6.549-2.563 8.967-3.758.452-.223.882-.438 1.29-.642 1.806-.902 3.205-1.602 4.27-1.905h0a34.85 34.85 0 016.753-1.174c2.867-.201 5.966-.003 8.389 1.149z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#fff"
                stroke="#151924"
                strokeWidth="0.863"
                d="M45.91 54.824c1.883-.996 4.434-1.606 7.874-1.606 3.432 0 6.608.194 9.194.977 2.576.78 4.529 2.13 5.587 4.424.11.239.197.623.243 1.167.046.537.05 1.197.015 1.967-.071 1.539-.3 3.484-.655 5.691-.711 4.414-1.923 9.846-3.361 15.116-1.44 5.272-3.102 10.368-4.713 14.115-.806 1.877-1.592 3.395-2.319 4.426-.364.516-.701.891-1.004 1.128-.305.24-.534.306-.697.294h0c-.466-.035-1.072-.381-1.802-1.118-.715-.722-1.488-1.757-2.293-3.032-1.607-2.549-3.3-5.998-4.868-9.672-3.142-7.36-5.742-15.515-6.153-18.991-.419-3.539-.576-7.666 1.036-10.9.8-1.604 2.037-2.993 3.916-3.986z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                stroke="#151924"
                strokeMiterlimit="10"
                strokeWidth="0.509"
                d="M21.928 71.19s5.143 7.724 5.784 14.017c.64 6.31-1.282 23.547-1.676 28.05-.378 4.502-1.15 11.338-1.15 11.338"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                stroke="#151924"
                strokeMiterlimit="10"
                strokeWidth="0.509"
                d="M27.844 69.91s.509 2.449.772 5.784c.263 3.352 1.15 8.495.904 9.646-.263 1.15-1.71 5.669-1.71 5.669M32.543 81.74s-.395 11.716-5.308 18.651M85.782 83.762s3.78 11.157 2.58 19.209c-1.2 8.051-2.58 22.807-2.58 27.95 0 5.144.69 11.667.69 11.667"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#fff"
                stroke="#151924"
                strokeWidth="0.863"
                d="M45.635 16.128c1.667-1.01 3.94-2.388 5.41-5.292 3.577-1.075 6.809-.88 9.369-.187 2.612.707 4.499 1.926 5.336 2.816.356.379.559.988.667 1.803.09.682.106 1.443.124 2.24l.01.448c.023.939.067 1.912.27 2.753.203.844.583 1.622 1.33 2.093a4.14 4.14 0 011.825 2.45 4.64 4.64 0 01.166 1.292 2.117 2.117 0 01-.004.074V26.627l-.013.07-.046.265a507.523 507.523 0 01-.724 4.076c-.434 2.385-.945 5.073-1.261 6.347-.142.571-.479 1.205-.93 1.849-.447.639-.99 1.264-1.52 1.816a24.796 24.796 0 01-1.994 1.853l-.032.026-.007.006-.002.001h0l-.13.104-.026.164.426.069-.426-.069v.003l-.002.006-.004.025-.015.097a51.32 51.32 0 00-.22 1.686 51.875 51.875 0 00-.313 4.22c-.049 1.605-.009 3.323.227 4.843.234 1.503.67 2.89 1.47 3.76.29.317.391.72.311 1.236-.081.53-.353 1.156-.782 1.845-.858 1.375-2.267 2.885-3.68 4.217l-.002.001c-2.142 2.036-5.535 1.933-7.592-.2-1.51-1.567-3.185-3.365-4.489-4.938-.653-.788-1.205-1.51-1.597-2.114a6.423 6.423 0 01-.448-.79c-.105-.23-.144-.384-.148-.473v-.004c-.032-.55.014-1.793.106-3.38.09-1.576.224-3.462.361-5.278a671.168 671.168 0 01.517-6.394l.037-.428.01-.112.002-.029V40.994h0l-.429-.038.43.038.017-.196-.137-.142h0l-.002-.002-.007-.007-.027-.028-.105-.111a35.843 35.843 0 01-1.591-1.817 21.87 21.87 0 01-1.316-1.77c-.397-.606-.7-1.17-.843-1.63-.308-.996-.625-2.924-.866-4.636a121.668 121.668 0 01-.37-2.888l-.01-.087c.054-.079.129-.188.217-.325.188-.291.44-.706.697-1.204.508-.987 1.053-2.337 1.123-3.708.035-.679-.024-1.31-.101-1.885a35.302 35.302 0 00-.097-.662 17.284 17.284 0 01-.122-.89c-.046-.464-.04-.842.052-1.166.09-.31.265-.595.61-.861.355-.271.804-.544 1.31-.85z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                stroke="#151924"
                strokeMiterlimit="10"
                strokeWidth="0.509"
                d="M46.757 40.958c2.054 2.185 9.563 5.948 14.016 3.861"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#fff"
                d="M69.826 30.817s.806-3.631 2.465-3.5c1.66.131 2.251 3.023 1.216 4.765-1.035 1.742-4.568 3.369-4.568 3.352l.871-4.617h.016zM42.172 30.817s-.805-3.631-2.464-3.5c-1.676.131-2.252 3.023-1.216 4.765 1.035 1.742 4.568 3.369 4.568 3.352l-.871-4.617h-.017z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                stroke="#151924"
                strokeWidth="0.596"
                d="M52.745 35.666s.678 3.052 4.626 3.052c3.948 0 4.79-3.052 4.79-3.052"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                stroke="#151924"
                strokeMiterlimit="10"
                strokeWidth="0.509"
                d="M56.96 25.264s-.608 3.549 0 3.943c.608.395 2.218.559 2.103 1.118-.115.558-2.103 1.068-2.103 1.068"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#151924"
                d="M51.9 24.771c0 1.232-.33 2.218-.756 2.218-.428 0-.756-.986-.756-2.218s.328-2.218.756-2.218c.427 0 .755.986.755 2.218zM62.285 24.771c0 1.232-.328 2.218-.756 2.218-.427 0-.755-.986-.755-2.218s.328-2.218.755-2.218c.428 0 .756.986.756 2.218z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                stroke="#151924"
                strokeMiterlimit="10"
                strokeWidth="1.232"
                d="M59.558 20.943s2.678-2.17 5.208-1.118M52.458 20.943s-2.679-2.17-5.21-1.118"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#fff"
                stroke="#151924"
                strokeWidth="0.863"
                d="M103.024 134.733l.001-.001c.299-1.083 1.413-3.295 3.331-4.872 1.891-1.554 4.558-2.491 8.056-1.103 1.328.527 2.952 1.19 4.755 1.925 3.154 1.286 6.855 2.796 10.473 4.193 5.675 2.193 11.236 4.146 14.239 4.54 1.486.196 3.253.325 5.08.457l.103.007c1.801.13 3.659.264 5.389.468 1.766.207 3.376.484 4.639.893.816.264 1.445.569 1.881.915h-53.35c-1.374 0-2.358-.336-3.062-.841-.706-.506-1.165-1.207-1.447-1.995-.571-1.595-.393-3.491-.088-4.586z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                fill="#fff"
                stroke="#000"
                d="M43.36 129.827c-.003-.416-.01-.769-.015-1.043l1.133.246a1725.52 1725.52 0 0019.047 4.025c5.317 1.09 10.752 2.169 15.09 2.952 2.169.391 4.068.709 5.543.918.737.104 1.373.182 1.886.227.503.045.92.062 1.203.033.84-.086 2.174.076 3.773.43 1.585.351 3.38.879 5.115 1.492 1.736.613 3.402 1.307 4.732 1.987.666.34 1.239.673 1.693.986l.034.023H42.531c.53-2.194.732-5.476.803-8.268.039-1.553.038-2.975.027-4.008z"
            ></path>
            <path
                onMouseOver={(e) => handleHoveredPerson(e)}
                onMouseLeave={() => setHoveredPerson(null)}
                onClick={(e) => handlePickedPerson(e)}
                className={"clickable"}
                stroke="#151924"
                strokeMiterlimit="10"
                strokeWidth="0.509"
                d="M56.96 66.803s-.312 4.75-.262 8.282c.049 3.533-1.167 10.106 0 13.934 1.166 3.829-.658 13.967-.658 13.967M21.928 123.083s1.922 1.545 5.143 2.054c3.22.51 13.244-.262 14.92.904 1.676 1.15 1.414 12.817-.131 16.547"
            ></path>
        </svg>
    )
}

export default CatherineSvg