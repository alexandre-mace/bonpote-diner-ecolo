import jmarcSvg from "../assets/icons/JeanMarc.png";
import jmichelSvg from "../assets/icons/JeanMich.png";
import catherineSvg from "../assets/icons/Catherine.png";
import davidSvg from "../assets/icons/David.png";
import claireSvg from "../assets/icons/Claire.png";
import roxanneSvg from "../assets/icons/Roxanne.png";
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
            return '#03FFFF'
        case Roxanne:
            return '#FFF500'
        default:
            return null
    }
}


const peopleData = argumentsData.reduce((accumulator, argumentData) => {
    if (!argumentData.Nom || (!argumentData.Arguments && argumentData.Nom !== JeanMarc)) {
        return accumulator
    }

    return accumulator.set(argumentData.Nom, {
        'name': argumentData.Nom,
        'icon': accumulator.get(argumentData.Nom) ? accumulator.get(argumentData.Nom).icon : getPersonIcon(argumentData.Nom),
        'color': accumulator.get(argumentData.Nom) ? accumulator.get(argumentData.Nom).color : getPersonColor(argumentData.Nom),
        'description': argumentData.Description,
        'arguments': [...(accumulator.get(argumentData.Nom) ? accumulator.get(argumentData.Nom).arguments : []), {
            'author': argumentData.Nom,
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

const getRandomPerson = (peopleData, saidArguments = []) => {
    let randomPickeablePeopleNames =
        [...peopleData.keys()]
            .filter(personName => (
                personName !== JeanMarc &&
                saidArguments.filter(argument => argument.author === personName).length !== peopleData.get(personName).arguments.length
            ))

    return peopleData.get(randomPickeablePeopleNames[Math.floor(Math.random() * randomPickeablePeopleNames.length)])
}

const getRandomArgument = (randomPerson, saidArguments = []) => {
    let randomPickableArguments = randomPerson.arguments.filter(argument => !saidArguments.includes(argument))
    return randomPickableArguments[Math.floor(Math.random() * randomPickableArguments.length)]
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
    computePersonColor,
    getRandomPerson,
    getRandomArgument
}