import {useState} from "react";
import TableWithPeople from "./components/TableWithPeople";
import toast, {Toaster} from 'react-hot-toast';
import OnBoarding from "./components/OnBoarding";
import PersonInfo from "./components/PersonInfo";
import ClassicPlayer from "./components/ClassicPlayer";
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
import ModeSwitcher from "./components/ModeSwitcher";
import PersonPickerHelper from "./components/PersonPickerHelper";
import fadeMessages from "./utils/fadeMessages";
import resetAudioAnimation from "./utils/resetAudioAnimation";

function App() {
    const [started, setStarted] = useState(false)
    const [pickedPerson, setPickedPerson] = useState(null)
    const [pickedArgument, setPickedArgument] = useState(null)
    const [hoveredPerson, setHoveredPerson] = useState(null)
    const [speaking, setSpeaking] = useState(false)
    const [spoken, setSpoken] = useState(false)
    const [infinite, setInfinite] = useState(false)
    const [infinitePaused, setInfinitePaused] = useState(false)
    const [infiniteNext, setInfiniteNext] = useState(0)
    const {width} = useWindowDimensions();
    let saidArguments = []

    const speakInfinite = async (speakingThread) => {
        if (cantSpeak()) return
        if (speakingThread !== window.speakingThread) return;
        window.infiniteAwaiting = false
        let randomPerson = getRandomPerson(peopleData, saidArguments)
        await setPickedPerson(randomPerson)
        if (!randomPerson) handleStopInfinite()
        let randomArgument = getRandomArgument(randomPerson, saidArguments)
        await setPickedArgument(randomArgument)
        await speak(randomPerson, randomArgument, width, speakingThread)
        await setPickedArgument(null)
        await delay(1000)
        saidArguments.push(randomArgument)
        window.infiniteAwaiting = true
        await speakInfinite(speakingThread)
    }

    const handleStartInfinite = () => {
        resetPeopletates()
        toast.dismiss()
        resetAudioAnimation()
        saidArguments = []
        window.infinite = true
        window.infiniteAwaiting = true
        saidArguments = []
        setInfinite(true)
    }

    const handleStopInfinite = () => {
        resetPeopletates()
        toast.dismiss()
        resetAudioAnimation()
        window.infinite = false
        window.infinitePaused = false
        window.lastInfiniteStopped = Date.now()
        setInfinite(false)
        setInfinitePaused(false)
        saidArguments = []
        handleReset()
    }

    const handleNext = () => {
        setSpeaking(false)
        handleReset()
    }

    const handleNextInfinite = async () => {
        window.speakingThread = null
        window.infiniteAwaiting = true
        resetPeopletates()
        fadeMessages()
        resetAudioAnimation()
        await setPickedArgument(null)
        await setInfiniteNext(Date.now())
        handleContinueInfinite()
    }

    const handlePauseInfinite = () => {
        resetAudioAnimation()
        window.infinitePaused = true
        setPickedArgument(null)
        setInfinitePaused(true)
    }

    const handleContinueInfinite = () => {
        resetAudioAnimation()
        window.infinitePaused = false
        setInfinitePaused(false)
    }

    const handleReset = () => {
        window.speakingThread = null
        setSpoken(false)
        setPickedPerson(null)
        setPickedArgument(null)
        toast.dismiss()
        resetPeopletates()
        resetAudioAnimation()
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
        await setPickedArgument(argument)
        const speakingThread = Date.now()
        window.speakingThread = speakingThread
        await speak(pickedPerson, argument, width, speakingThread)
        if (speakingThread !== window.speakingThread) return
        setSpeaking(false)
        setSpoken(true)
    }

    const zoom = (width > 1200) ? .68 : (width > 768 ? 0.68 : (width > 640 ? 0.62 : 0.44))
    const cssZoom = (width > 1200) ? 1 : (width > 768 ? 1 : (width > 640 ? .9 : 0.8))

    if (infinite && window.infinite && window.infiniteAwaiting) {
        const speakingThread = Date.now()
        window.speakingThread = speakingThread
        speakInfinite(speakingThread)
    }

    return (
        <div className="flex flex-col h-full min-h-screen">
            <Header
                opacity={((speaking || (started && pickedPerson && !pickedArgument) || infinite) ? '30' : '100')}/>
            <ShareLink/>
            {!started &&
                <OnBoarding setStarted={setStarted} handleStartInfinite={handleStartInfinite}/>
            }
            <div
                className="px-0 mb-6 md:px-10 md:max-w-xl container md:bg-[url('./assets/room-decoration.png')] bg-contain bg-top bg-no-repeat mx-auto relative">
                {(started && !pickedPerson && !infinite) &&
                    <PersonPickerHelper/>
                }
                {(started && !pickedPerson && !infinite) &&
                    <MobilePersonPicker setPickedPerson={setPickedPerson}/>
                }
                {(started && pickedPerson && !pickedArgument && !infinite) &&
                    <ArgumentPicker
                        setPickedPerson={setPickedPerson}
                        handlePickedArgument={handlePickedArgument}
                        setSpeaking={setSpeaking}
                        pickedPerson={pickedPerson}
                    />
                }
                {(pickedArgument && speaking && !infinite) &&
                    <ClassicPlayer handleNext={handleNext}/>
                }
                {(infinite || infinitePaused) &&
                    <InfinitePlayer
                        handleStopInfinite={handleStopInfinite}
                        handleContinueInfinite={handleContinueInfinite}
                        handlePauseInfinite={handlePauseInfinite}
                        infinitePaused={infinitePaused}
                        handleNextInfinite={handleNextInfinite}
                    />
                }
                {(spoken && !infinite && !infinitePaused) &&
                    <Restart handleReset={handleReset} handleStartInfinite={handleStartInfinite}/>
                }
                {started &&
                    <ModeSwitcher
                        infinite={infinite}
                        handleStartInfinite={handleStartInfinite}
                        handleStopInfinite={handleStopInfinite}
                    />
                }
                <div
                    className={`mt-[20rem] mb-20 md:mt-56 w-full inline-block relative ${(((!started || (pickedPerson && !pickedArgument)) && !infinite) ? ' opacity-30 pointer-events-none' : '')}`}>
                    <div>
                        <div className={"absolute -top-28 w-full"}>
                            <div className={"relative toaster-container"}>
                                <Toaster containerStyle={{
                                    position: "absolute",
                                    top: (width > 1200) ? 60 : (width > 768 ? 50 : (width > 640 ? 70 : 110))
                                }}/>
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
