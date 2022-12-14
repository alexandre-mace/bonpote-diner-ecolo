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
import {cantSpeak, speak} from "./api/speakApi";
import MobilePersonPicker from "./components/MobilePersonPicker";
import useWindowDimensions from "./utils/useWindowDimensions";
import InfinitePlayer from "./components/InfinitePlayer";
import getPersonSvgNodeFromPath from "./utils/getPersonSvgNodeFromPath";
import {delay} from "./utils/delay";
import getExtraUiPersonData from "./utils/getExtraUiPersonData";
import ShareLink from "./components/ShareLink";
import resetPeopletates from "./utils/resetPeopleStates";

function App() {
    const [started, setStarted] = useState(false)
    const [pickedPerson, setPickedPerson] = useState(null)
    const [pickedArgument, setPickedArgument] = useState(false)
    const [hoveredPerson, setHoveredPerson] = useState(null)
    const [speaking, setSpeaking] = useState(false)
    const [spoken, setSpoken] = useState(false)
    const [infinite, setInfinite] = useState(false)
    const [infinitePaused, setInfinitePaused] = useState(false)
    const {width} = useWindowDimensions();
    let saidArguments = []

    const speakInfiniteCallback = async (infiniteThread) => {
        if (cantSpeak()) return
        if (infiniteThread !== window.infiniteThread) return;
        window.infiniteAwaiting = false
        let randomPerson = getRandomPerson(peopleData, saidArguments)
        if (!randomPerson) handleStopInfinite()
        let randomArgument = getRandomArgument(randomPerson, saidArguments)
        await speak(randomPerson, randomArgument, width)
        await delay(1000)
        saidArguments.push(randomArgument)
        window.infiniteAwaiting = true
        await speakInfiniteCallback(infiniteThread)
    }

    const handleStartInfinite = () => {
        resetPeopletates()
        toast.dismiss()
        setPickedPerson(true)
        setPickedArgument(true)
        setInfinite(true)
        window.infinite = true
        window.infiniteAwaiting = true
        saidArguments = []
    }

    const handleStopInfinite = () => {
        resetPeopletates()
        toast.dismiss()
        window.infinite = false
        window.infinitePaused = false
        window.lastInfiniteStopped = Date.now()
        setInfinite(false)
        setSpoken(true)
        setInfinitePaused(false)
        saidArguments = []
    }

    const handlePauseInfinite = () => {
        window.infinitePaused = true
        setInfinitePaused(true)
    }

    const handleContinueInfinite = () => {
        window.infinitePaused = false
        setInfinitePaused(false)
    }

    const handleReset = () => {
        setSpoken(false)
        setPickedPerson(false)
        setPickedArgument(false)
        toast.dismiss()
        resetPeopletates()
    }

    const handleHoveredPerson = (e) => {
        if (!e || !e.target) return
        const svgNode = getPersonSvgNodeFromPath(e)
        const person = peopleData.get(svgNode.dataset.name)
        if (!person) return
        setHoveredPerson({...person, ...getExtraUiPersonData(person, svgNode)})
    }

    const handlePickedPerson = (e) => {
        if (!e || !e.target) return
        const svgNode = getPersonSvgNodeFromPath(e)
        const person = peopleData.get(svgNode.dataset.name)
        if (!person) return
        setPickedPerson({...person, ...getExtraUiPersonData(person, svgNode)})
    }

    const handlePickedArgument = async (argument) => {
        setPickedArgument(argument)
        await speak(pickedPerson, argument, width)
        setSpeaking(false)
        setSpoken(true)
    }

    const zoom = (width > 1200) ? .68  : (width > 768 ? 0.68 : (width > 640 ? 0.62 : 0.44))
    const cssZoom = (width > 1200) ? 1 : (width > 768 ? 1 : (width > 640 ? .9 : 0.8))

    if (infinite && window.infinite && window.infiniteAwaiting) {
        const infiniteThreadId = Date.now()
        window.infiniteThread = infiniteThreadId
        speakInfiniteCallback(infiniteThreadId)
    }

    return (
        <div className="flex flex-col h-full min-h-screen">
            <Header
                opacity={(speaking || (started && pickedPerson && !pickedArgument) || infinite ? '30' : '100')}/>
            <ShareLink/>
            {!started &&
                <OnBoarding setStarted={setStarted} handleStartInfinite={handleStartInfinite}/>
            }
            <div
                className="px-0 md:px-10 md:max-w-xl container md:bg-[url('./assets/room-decoration.png')] bg-contain bg-top bg-no-repeat mx-auto relative">
                {(started && !pickedPerson && !infinite) &&
                    <div className="w-[90%] absolute -top-2 left-1/2 -translate-x-1/2 text-center">
                        <div className="text-vert-1 text-lg">Cliquez sur un personnage pour commencer un dialogue 💬
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
                {(pickedArgument && speaking && !infinite) &&
                    <SpeakingIndicator pickedArgument={pickedArgument}/>
                }
                {(infinite || infinitePaused) &&
                    <InfinitePlayer
                        handleStopInfinite={handleStopInfinite}
                        handleContinueInfinite={handleContinueInfinite}
                        handlePauseInfinite={handlePauseInfinite}
                        infinitePaused={infinitePaused}
                    />
                }
                {(spoken && !infinite && !infinitePaused) &&
                    <Restart handleReset={handleReset} handleStartInfinite={handleStartInfinite}/>
                }
                <div
                    className={`mt-[20rem] md:mt-56 mb-20 w-full inline-block relative ${((!started || (pickedPerson && !pickedArgument)) ? ' opacity-30 pointer-events-none' : '')}`}>
                    <div>
                        <div className={"absolute -top-28 w-full"}>
                            <div className={"relative toaster-container"}>
                                <Toaster containerStyle={{position: "absolute", top: (width > 1200) ? 60  : (width > 768 ? 50 : (width > 640 ? 70 : 95))}}/>
                            </div>
                        </div>
                        <div className={"table-container max-w-xs sm:max-w-md md:max-w-xl mx-auto"}>
                            <TableWithPeople
                                cssZoom={cssZoom}
                                zoom={zoom}
                                handleHoveredPerson={(!pickedPerson && started && !speaking && !infinite && !spoken) ? handleHoveredPerson : () => {
                                }}
                                handlePickedPerson={(!infinite && !speaking && !spoken) ? handlePickedPerson : () => {
                                }}
                                setHoveredPerson={setHoveredPerson}
                                hoveredPerson={hoveredPerson}
                                pickedPerson={pickedPerson}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Credit/>
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
