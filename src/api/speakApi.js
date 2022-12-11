import {delay} from "../utils/delay";
import toast from "react-hot-toast";
import Phrase from "../components/Phrase";
import {ecoloData} from "../domain/people";

const speak = async (person, argument, width) => {
    await sayArgument(argument, person, width)
    await answerArgument(argument, width)
}

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
            borderRadius: '20px',
            borderBottomLeftRadius: '5px',
        }), position: (width > 800 ? 'bottom-right' : 'bottom-center'),
    })

    await delay(2000)
    document.querySelectorAll(`[data-name="${pickedPerson.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', "#fff"))
    document.querySelectorAll(`.toaster-container > div:nth-child(1) > div > div`)
        .forEach((node) => node.style.backgroundColor = 'rgba(21, 25, 36, .3)')
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
            transform: `translateY(${width > 800 ? '-100px' : '0'})`,
            // marginBottom: (width > 800 ? '-30px' : '0'),
        }), position: (width > 800 ? 'bottom-left' : 'bottom-center'),
    })
    await delay(2000)
    document.querySelectorAll(`[data-name="${ecoloData.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', "#fff"))
    document.querySelectorAll(`.toaster-container > div:nth-child(1) > div > div`)
        .forEach((node) => node.style.backgroundColor = 'rgba(21, 25, 36, .3)')
}


export {sayArgument, answerArgument, speak}