import SpeakingIcon from "./SpeakingIcon";
import nextIcon from "../assets/Next.svg";

const ClassicPlayer = ({handleNext}) => {
    return (
        <div className="w-[90%] md:w-full absolute action-btn-bottom left-1/2 -translate-x-1/2 z-30 text-center">
            <div className={"flex flex-row w-full justify-center"}>
                <button
                    className="inline-flex justify-center cursor-auto items-center rounded-full mr-3 px-4 md:px-6 py-3 text-center bg-vert-2 text-vert-1 whitespace-nowrap text-center">
                <span className={"hidden md:inline-block"}>
                    Discussion en cours
                </span>
                    <div className="md:ml-1">
                        <SpeakingIcon/>
                    </div>
                </button>
                <button
                    onClick={() => handleNext()}
                    className="inline-flex whitespace-nowrap justify-center cursor-pointer items-center rounded-full px-6 py-3 text-center btn-secondary">
                    Discussion suivante
                    <img className="ml-1 h-6" src={nextIcon} alt="suivant"/>
                </button>
            </div>
        </div>
    )
}


export default ClassicPlayer