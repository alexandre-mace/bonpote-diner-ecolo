import jmarcSvg from "../assets/icons/JMarc.svg";
import jmichelSvg from "../assets/icons/JMichel.svg";
import catherineSvg from "../assets/icons/Catherine.svg";
import davidSvg from "../assets/icons/David.svg";
import claireSvg from "../assets/icons/Catherine.svg";
import roxanneSvg from "../assets/icons/Roxanne.svg";
import argumentsData from "./arguments.json";

const JeanMarc = 'Jean-Marc Ecolo';
const JeanMichel = 'Jean-Michel Cyclesolaire';
const Catherine = 'Catherine de France';
const David = 'David Rassuriste';
const Claire = 'Claire Céfoutu';
const Roxanne = 'Roxane Bobo';

const getPersonIcon = (personName) => {
    switch (personName) {
        case JeanMarc:
            return jmarcSvg
        case JeanMichel:
            return jmichelSvg
        case Catherine:
            return catherineSvg
        case David:
            return davidSvg
        case Claire:
            return claireSvg
        case Roxanne:
            return roxanneSvg
        default:
            return null
    }
}

const getPersonColor = (personName) => {
    switch (personName) {
        case JeanMarc:
            return '#BDFA0E'
        case JeanMichel:
            return '#6B25FF'
        case Catherine:
            return '#FA0EAA'
        case David:
            return '#FF900E'
        case Claire:
            return '#FFF500'
        case Roxanne:
            return '#03FFFF'
        default:
            return null
    }
}


const peopleData = argumentsData.reduce((accumulator, argumentData) => {
    if (!argumentData.Nom || !argumentData.Arguments) {
        return accumulator
    }

    return accumulator.set(argumentData.Nom, {
        'name': argumentData.Nom,
        'icon': accumulator.get(argumentData.Nom) ? accumulator.get(argumentData.Nom).icon : getPersonIcon(argumentData.Nom),
        'color': accumulator.get(argumentData.Nom) ? accumulator.get(argumentData.Nom).color : getPersonColor(argumentData.Nom),
        'description': argumentData.Description,
        'arguments': [...(accumulator.get(argumentData.Nom) ? accumulator.get(argumentData.Nom).arguments : []), {
            'content': argumentData.Arguments,
            'answer': argumentData.Réponse,
            'knowMore': argumentData['En savoir plus']
        }]
    })
}, new Map())

const ecoloData = {
    'name': argumentsData[0].Nom,
    'icon': getPersonIcon(argumentsData[0].Nom),
    'color': getPersonColor(argumentsData[0].Nom),
    'description': argumentsData[0].Description,
    'arguments': []
}

const shouldPersonBeHighlighted = (id, hoveredPerson, pickedPerson) => {
    return (hoveredPerson && hoveredPerson.id === id) || (pickedPerson && pickedPerson.id === id)
}

const computePersonColor = (id, hoveredPerson, pickedPerson) => {
    return shouldPersonBeHighlighted(id, hoveredPerson, pickedPerson) ? (hoveredPerson?.color ?? pickedPerson?.color) : "#fff"
}

export {
    JeanMarc,
    JeanMichel,
    Claire,
    Catherine,
    David,
    Roxanne,
    peopleData,
    ecoloData,
    computePersonColor
}