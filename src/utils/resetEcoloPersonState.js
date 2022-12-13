import {ecoloData} from "../domain/people";

const resetEcoloPersonState = () => {
    document.querySelectorAll(`[data-name="${ecoloData.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', "#fff"))
}

export default resetEcoloPersonState