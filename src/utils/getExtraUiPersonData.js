const getExtraUiPersonData = (person, svgNode) => ({
    'id': person.name,
    'top': svgNode.getBoundingClientRect().top,
    'left': svgNode.getBoundingClientRect().left,
    'width': svgNode.getBoundingClientRect().width
})

export default getExtraUiPersonData