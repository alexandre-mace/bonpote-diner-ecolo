import {useEffect, useState} from "react";
import TableWithPeople from "./components/TableWithPeople";
import toast, {Toaster} from 'react-hot-toast';
import OnBoarding from "./components/OnBoarding";
import PersonInfo from "./components/PersonInfo";
import SpeakingIndicator from "./components/SpeakingIndicator";
import Restart from "./components/Restart";
import Credit from "./components/Credit";
import Header from "./components/Header";
import ArgumentPicker from "./components/ArgumentPicker";
import {peopleData} from "./domain/people";
import {answerArgument, sayArgument} from "./api/speakApi";
import MobilePersonPicker from "./components/MobilePersonPicker";
import useWindowDimensions from "./utils/useWindowDimensions";

function App() {
    const [started, setStarted] = useState(false)
    const [pickedPerson, setPickedPerson] = useState(null)
    const [hoveredPerson, setHoveredPerson] = useState(null)
    const [pickedArgument, setPickedArgument] = useState(null)
    const [speaking, setSpeaking] = useState(false)
    const [spoken, setSpoken] = useState(false)
    const {width} = useWindowDimensions();

    const speak = async (pickedArgument, width) => {
        await sayArgument(pickedArgument, pickedPerson, width)
        await answerArgument(pickedArgument, width)
        setSpeaking(false)
        setSpoken(true)
    }

    useEffect(() => {
        if (speaking) {
            speak(pickedArgument, width).then(r => {
            })
        }
    }, [speaking, pickedArgument])

    useEffect(() => {
    }, [hoveredPerson])

    const reset = () => {
        setSpoken(false)
        setPickedPerson(false)
        setPickedArgument(false)
        toast.dismiss()
    }

    const handleHoveredPerson = (e) => {
        if (!e || !e.target) {
            return
        }
        const svgNode = (e.target.parentElement.dataset.name !== undefined)
            ? e.target.parentElement
            : e.target.parentElement.parentElement

        const person = peopleData.get(svgNode.dataset.name)

        if (!person) {
            return;
        }
        setHoveredPerson({
            ...person,
            'id': person.name,
            'top': svgNode.getBoundingClientRect().top,
            'left': svgNode.getBoundingClientRect().left,
            'width': svgNode.getBoundingClientRect().width,
        })
    }

    const handlePickedPerson = (e) => {
        if (!e || !e.target) {
            return
        }
        const svgNode = (e.target.parentElement.dataset.name !== undefined)
            ? e.target.parentElement
            : e.target.parentElement.parentElement
        const person = peopleData.get(svgNode.dataset.name)
        if (!person) {
            return;
        }
        setPickedPerson({
            ...person,
            'id': person.name,
            'top': svgNode.getBoundingClientRect().top,
            'left': svgNode.getBoundingClientRect().left,
            'width': svgNode.getBoundingClientRect().width,
        })
    }


    const zoom = width > 1200 ? .7 : (width > 800 ? .5 : .4)

    return (
        <div className="flex md:h-screen">
            <div className="m-auto">
                <Header opacity={(speaking || (started && pickedPerson && !pickedArgument) ? '30' : '100')}/>
                <div
                    className="px-0 md:px-10 md:max-w-4xl container md:bg-[url('./assets/room-decoration.png')] bg-contain bg-top bg-no-repeat mx-auto relative">
                    {!started &&
                        <OnBoarding setStarted={setStarted}/>
                    }
                    {(started && !pickedPerson) &&
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
                            setPickedArgument={setPickedArgument}
                            setSpeaking={setSpeaking}
                            pickedPerson={pickedPerson}
                        />
                    }
                    {speaking &&
                        <SpeakingIndicator/>
                    }
                    {spoken &&
                        <Restart reset={reset}/>
                    }
                    <div
                        className={`mt-[20rem] md:mt-56 w-full inline-block relative ${((!started || (pickedPerson && !pickedArgument)) ? ' opacity-30 pointer-events-none' : '')}`}>
                        <div>
                            <div className={"absolute -top-28 w-full"}>
                                <div className={"relative toaster-container"}>
                                    <Toaster containerStyle={{position: "absolute"}}/>
                                </div>
                            </div>
                            <TableWithPeople
                                zoom={zoom}
                                handleHoveredPerson={(!pickedPerson && started) ? handleHoveredPerson : () => {}}
                                handlePickedPerson={handlePickedPerson}
                                setHoveredPerson={setHoveredPerson}
                                hoveredPerson={hoveredPerson}
                                pickedPerson={pickedPerson}
                            />
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
