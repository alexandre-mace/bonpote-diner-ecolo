import SpeakingIcon from "./SpeakingIcon";
import getWordsInSentence from "../utils/getWordsInSentence";

const SpeakingIndicator = ({pickedArgument}) => (
    <div className="w-[90%] md:w-auto absolute -bottom-12 md:-bottom-4 left-1/2 -translate-x-1/2 z-30 text-center">
        <div
            className="inline-flex items-center rounded-full px-6 py-3 text-center bg-vert-2 text-vert-1">Discussion
            en cours <div className="ml-1"><SpeakingIcon duration={pickedArgument.content ? (getWordsInSentence(pickedArgument.content) * 230 + getWordsInSentence(pickedArgument.answer) * 230) : 4}/></div>
        </div>
    </div>
)

export default SpeakingIndicator