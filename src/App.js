import {useEffect, useRef, useState} from "react";
import TableWithPeople from "./components/TableWithPeople";
import toast, {Toaster} from 'react-hot-toast';
import OnBoarding from "./components/OnBoarding";
import PersonInfo from "./components/PersonInfo";
import SpeakingIndicator from "./components/SpeakingIndicator";
import Restart from "./components/Restart";
import Credit from "./components/Credit";
import Header from "./components/Header";
import ArgumentPicker from "./components/ArgumentPicker";
import {getRandomArgument, getRandomPerson, peopleData} from "./domain/people";
import {speak} from "./api/speakApi";
import MobilePersonPicker from "./components/MobilePersonPicker";
import useWindowDimensions from "./utils/useWindowDimensions";
import StopInfinite from "./components/StopInfinite";
import getPersonSvgNodeFromPath from "./utils/getPersonSvgNodeFromPath";
import {delay} from "./utils/delay";
import getExtraUiPersonData from "./utils/getExtraUiPersonData";
import getWordsInSentence from "./utils/getWordsInSentence";

function App() {
    const [started, setStarted] = useState(false)
    const [pickedPerson, setPickedPerson] = useState(null)
    const [pickedArgument, setPickedArgument] = useState(false)
    const [hoveredPerson, setHoveredPerson] = useState(null)
    const [speaking, setSpeaking] = useState(false)
    const [spoken, setSpoken] = useState(false)
    const [infinite, setInfinite] = useState(false)
    const {width} = useWindowDimensions();
    const infiniteTimeout = useRef()
    let saidArguments = []

    useEffect(() => {
        window.infinite = infinite
        if (infinite) {
            const speakInfiniteCallback = async () => {
                let randomPerson = getRandomPerson(peopleData, saidArguments)
                if (!randomPerson) handleStopInfinite()
                let randomArgument = getRandomArgument(randomPerson, saidArguments)
                await speak(randomPerson, randomArgument, width)
                await delay(getWordsInSentence(randomArgument.content) * 230)
                saidArguments.push(randomArgument)
                if (window.infinite) {
                    infiniteTimeout.current = setTimeout(() => {
                        speakInfiniteCallback()
                    }, 0)
                }
            }
            speakInfiniteCallback()
        }
        return () => {
            let infiniteTimeoutId = infiniteTimeout.current
            while (infiniteTimeoutId--) {
                window.clearTimeout(infiniteTimeoutId);
            }
            clearTimeout(infiniteTimeout.current)
        }
    }, [infinite])

    useEffect(() => {
        if (infinite && !started) {
            setStarted(true)
        }
    }, [infinite, started])

    const handleStartInfinite = () => {
        toast.dismiss()
        setPickedPerson(true)
        setPickedArgument(true)
        setInfinite(true)
        saidArguments = []
    }

    const handleStopInfinite = () => {
        setInfinite(false)
        setSpoken(true)
        saidArguments = []
    }

    const handleReset = () => {
        setSpoken(false)
        setPickedPerson(false)
        setPickedArgument(false)
        toast.dismiss()
    }

    const handleHoveredPerson = (e) => {
        if (!e || !e.target) return
        const svgNode = getPersonSvgNodeFromPath(e)
        const person = peopleData.get(svgNode.dataset.name)
        if (!person) return;
        setHoveredPerson({...person, ...getExtraUiPersonData(person, svgNode)})
    }

    const handlePickedPerson = (e) => {
        if (!e || !e.target) return
        const svgNode = getPersonSvgNodeFromPath(e)
        const person = peopleData.get(svgNode.dataset.name)
        if (!person) return;
        setPickedPerson({...person, ...getExtraUiPersonData(person, svgNode)})
    }

    const handlePickedArgument = async (argument) => {
        setPickedArgument(argument)
        await speak(pickedPerson, argument, width)
        setSpeaking(false)
        setSpoken(true)
    }

    const zoom = (width > 1200) ? .7 : (width > 800 ? 0.5 : 0.44)
    const cssZoom = (width > 1200) ? 1 : (width > 800 ? 1 : 0.8)

    return (
        <div className="flex md:h-screen">
            <div className="m-auto">
                <Header opacity={(speaking || (started && pickedPerson && !pickedArgument) || (width < 1200 && infinite) ? '30' : '100')}/>
                <div
                    className="px-0 md:px-10 md:max-w-4xl container md:bg-[url('./assets/room-decoration.png')] bg-contain bg-top bg-no-repeat mx-auto relative">
                    {!started &&
                        <OnBoarding setStarted={setStarted} handleStartInfinite={handleStartInfinite}/>
                    }
                    {(started && !pickedPerson && !infinite) &&
                        <div className="w-[100%] absolute -top-4 left-1/2 -translate-x-1/2 text-center">
                            <div className="text-vert-1 text-lg">Cliquez un personnage pour commencer un dialogue
                            </div>
                        </div>
                    }
                    {(started && !pickedPerson) &&
                        <MobilePersonPicker setPickedPerson={setPickedPerson}/>
                    }
                    {(started && pickedPerson && !pickedArgument) &&
                        <ArgumentPicker
                            setPickedPerson={setPickedPerson}
                            handlePickedArgument={handlePickedArgument}
                            setSpeaking={setSpeaking}
                            pickedPerson={pickedPerson}
                        />
                    }
                    {(speaking && !infinite && pickedArgument) &&
                        <SpeakingIndicator pickedArgument={pickedArgument}/>
                    }
                    {infinite &&
                        <StopInfinite handleStopInfinite={handleStopInfinite}/>
                    }
                    {(spoken && !infinite) &&
                        <Restart handleReset={handleReset} handleStartInfinite={handleStartInfinite}/>
                    }
                    <div
                        className={`mt-[20rem] md:mt-56 w-full inline-block relative ${((!started || (pickedPerson && !pickedArgument)) ? ' opacity-30 pointer-events-none' : '')}`}>
                        <div>
                            <div className={"absolute -top-28 w-full"}>
                                <div className={"relative toaster-container"}>
                                    <Toaster containerStyle={{position: "absolute"}}/>
                                </div>
                            </div>
                            <div className={"table-container"}>
                                <TableWithPeople
                                    cssZoom={cssZoom}
                                    zoom={zoom}
                                    handleHoveredPerson={(!pickedPerson && started && !speaking && !infinite && !spoken) ? handleHoveredPerson : () => {}}
                                    handlePickedPerson={(!infinite && !speaking && !spoken) ? handlePickedPerson : () => {}}
                                    setHoveredPerson={setHoveredPerson}
                                    hoveredPerson={hoveredPerson}
                                    pickedPerson={pickedPerson}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Credit/>
            </div>
            {hoveredPerson &&
                <PersonInfo
                    name={hoveredPerson.name}
                    icon={hoveredPerson.icon}
                    position={'absolute'}
                    left={hoveredPerson.left + hoveredPerson.width / 2}
                    top={hoveredPerson.top - 100}
                    description={hoveredPerson.description}
                />
            }
        </div>
    );
}

export default App;
