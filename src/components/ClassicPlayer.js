import SpeakingIcon from "./SpeakingIcon";
import getWordsInSentence from "../utils/getWordsInSentence";
import nextIcon from "../assets/Next.svg";

const SpeakingIndicator = ({pickedArgument, handleNext}) => (
    <div className="w-[90%] md:w-full absolute action-btn-bottom left-1/2 -translate-x-1/2 z-30 text-center">
        <div className={"flex flex-col md:flex-row w-full justify-center"}>
            <div
                className="inline-flex items-center rounded-full md:mr-2 px-6 py-3 text-center bg-vert-2 text-vert-1 whitespace-nowrap">
                Discussion en cours
                <div className="ml-1">
                    <SpeakingIcon
                        duration={pickedArgument.content ? (getWordsInSentence(pickedArgument.content) * 190 + getWordsInSentence(pickedArgument.answer) * 190) : 4}/>
                </div>
            </div>
            <button
                onClick={() => handleNext()}
                className="inline-flex cursor-pointer justify-center mt-2 md:mt-0 whitespace-nowrap md:ml-2 items-center py-3 rounded-full px-6 text-center btn-secondary">
                Discussion suivante
                <img className="mr-2 h-4 md:h-6" src={nextIcon} alt="suivant"/>
            </button>
        </div>
    </div>
)

export default SpeakingIndicator