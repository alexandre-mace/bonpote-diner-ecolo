const resetPeopletates = () => {
    document.querySelectorAll(`path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', "#fff"))
}

export default resetPeopletates