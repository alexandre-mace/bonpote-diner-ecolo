import SpeakingIcon from "./SpeakingIcon";

const SpeakingIndicator = () => (
    <div className="w-[90%] md:w-auto absolute -bottom-12 md:-bottom-2 left-1/2 -translate-x-1/2 z-30 text-center">
        <div
            className="inline-flex items-center rounded-full px-6 py-3 text-center bg-vert-2 text-vert-1">Discussion
            en cours <div className="ml-1"><SpeakingIcon duration={4}/></div>
        </div>
    </div>
)

export default SpeakingIndicator