const getPersonSvgNodeFromPath = (e) => {
    return (e.target.parentElement.dataset.name !== undefined)
        ? e.target.parentElement
        : e.target.parentElement.parentElement
}

export default getPersonSvgNodeFromPath