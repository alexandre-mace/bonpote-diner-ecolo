import SpeakingIcon from "./SpeakingIcon";
import getWordsInSentence from "../utils/getWordsInSentence";

const SpeakingIndicator = ({pickedArgument}) => (
    <div className="w-[90%] md:w-auto absolute bottom-20 md:bottom-12 left-1/2 -translate-x-1/2 z-30 text-center">
        <div
            className="inline-flex items-center rounded-full px-6 py-3 text-center bg-vert-2 text-vert-1">
            Discussion en cours <div className="ml-1"><SpeakingIcon duration={pickedArgument.content ? (getWordsInSentence(pickedArgument.content) * 190 + getWordsInSentence(pickedArgument.answer) * 190) : 4}/></div>
        </div>
    </div>
)

export default SpeakingIndicator