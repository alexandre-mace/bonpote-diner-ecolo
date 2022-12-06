import {delay} from "../utils/delay";
import toast from "react-hot-toast";
import Phrase from "../components/Phrase";
import {ecoloData} from "../domain/people";

const sayArgument = async (pickedArgument, pickedPerson, width) => {
    await delay(500)
    document.querySelectorAll(`[data-name="${pickedPerson.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', pickedPerson.color))
    toast(<Phrase
        content={pickedArgument.content}
        name={pickedPerson.name}
        icon={pickedPerson.icon}
    />, {
        duration: 100000,
        style: ({
            backgroundColor: 'rgba(21, 25, 36, 1)',
            color: 'white',
            marginRight: (width > 800 ? '-30%' : '0'),
            marginTop: (width > 800 ? '-30px' : '0'),
            borderRadius: '20px',
            borderBottomLeftRadius: '5px'
        }), position: (width > 800 ? 'top-right' : 'top-center'),
    })

    await delay(2000)
    document.querySelectorAll(`[data-name="${pickedPerson.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', "#fff"))
}

const answerArgument = async (pickedArgument, width) => {
    document.querySelectorAll(`[data-name="${ecoloData.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', ecoloData.color))
    toast(<Phrase
        content={pickedArgument.answer}
        name={ecoloData.name}
        icon={ecoloData.icon}
        link={pickedArgument.knowMore}
    />, {
        duration: 100000,
        style: ({
            backgroundColor: 'rgba(21, 25, 36, 1)',
            color: 'white',
            borderRadius: '20px',
            borderBottomRightRadius: '5px',
            marginLeft: (width > 800 ? '-40%' : '0'),
        }), position: (width > 800 ? 'top-left' : 'top-center'),
    })
    await delay(2000)
    document.querySelectorAll(`[data-name="${ecoloData.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', "#fff"))
}


export {sayArgument, answerArgument}