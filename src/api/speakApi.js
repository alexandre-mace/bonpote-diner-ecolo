import {delay} from "../utils/delay";
import toast from "react-hot-toast";
import Phrase from "../components/Phrase";
import {ecoloData} from "../domain/people";
import getWordsInSentence from "../utils/getWordsInSentence";
import resetEcoloPersonState from "../utils/resetPeopleStates";
import fadeMessages from "../utils/fadeMessages";
import animateAudio from "../utils/animateAudio";

const speak = async (person, argument, width, speakingThread) => {
    await sayArgument(argument, person, width, speakingThread)
    await answerArgument(argument, width, speakingThread)
}
const getAnimationDuration = (pickedArgument) => {
    if (!pickedArgument) {
        return 0
    }

    return (getWordsInSentence(pickedArgument.content) * 210 + getWordsInSentence(pickedArgument.answer) * 210)
}

const sayArgument = async (pickedArgument, pickedPerson, width, speakingThread) => {
    if (speakingThread !== window.speakingThread) return
    window.currentDiscussionId = Date.now()
    await delay(500)
    document.querySelectorAll(`[data-name="${pickedPerson.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', pickedPerson.color))
    animateAudio(getAnimationDuration(pickedArgument))
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

    await delay(getWordsInSentence(pickedArgument.content) * 210)
    document.querySelectorAll(`[data-name="${pickedPerson.name}"] path.colorable`)
        .forEach((svgElement) => svgElement.setAttribute('fill', "#fff"))
    fadeMessages()
}

const answerArgument = async (pickedArgument, width, speakingThread) => {
    if (speakingThread !== window.speakingThread) return
    if (hasJustStoppedSpeakInfinite()) return
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
    await delay(getWordsInSentence(pickedArgument.answer) * 210)
    resetEcoloPersonState()
    fadeMessages()
}

const cantSpeak = () => {
    return window.infinitePaused || !window.infiniteAwaiting || !window.infinite
}

const hasJustStoppedSpeakInfinite = () => {
    return window.lastInfiniteStopped && (Date.now() - window.lastInfiniteStopped < 3800)
}

export {sayArgument, answerArgument, speak, cantSpeak}