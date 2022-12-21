import playIcon from "../assets/Play.svg";
import stopIcon from "../assets/Stop.svg";
import shutdownIcon from "../assets/power_settings_new.svg";
import SpeakingIcon from "./SpeakingIcon";
import nextIcon from "../assets/Next.svg";

const InfinitePlayer = ({
                            handleStopInfinite,
                            handlePauseInfinite,
                            infinitePaused,
                            handleContinueInfinite,
                            handleNextInfinite
                        }) => {
    return (
        <div className="w-[100%] md:w-full absolute action-btn-bottom left-1/2 -translate-x-1/2 z-50 text-center">
            <div className={"flex flex-row w-full justify-center"}>
                <button
                    className="inline-flex items-center rounded-full cursor-auto mr-3 px-4 text-center bg-vert-2 text-vert-1 whitespace-nowrap">
                    <SpeakingIcon/>
                </button>
                {infinitePaused &&
                    <button
                        onClick={() => handleContinueInfinite()}
                        className="inline-flex whitespace-nowrap justify-center cursor-pointer mr-3 items-center rounded-full px-3 py-1 md:px-3 md:py-3 text-center btn-secondary">
                        <img className="h-7" src={playIcon} alt="play"/>
                    </button>
                }
                {!infinitePaused &&
                    <button
                        onClick={() => handlePauseInfinite()}
                        className="inline-flex whitespace-nowrap justify-center cursor-pointer mr-3 items-center rounded-full px-3 py-1 md:px-3 md:py-3 text-center btn-secondary">
                        <img className="h-7" src={stopIcon} alt="pause"/>
                    </button>
                }
                {infinitePaused &&
                    <button
                        onClick={() => handleStopInfinite()}
                        className="inline-flex text-xs md:text-base whitespace-nowrap justify-center cursor-pointer items-center rounded-full px-6 py-3 text-center btn-secondary">
                        <div>Terminer la discussion</div>
                        <img className="ml-1 h-6" src={shutdownIcon} alt="suivant"/>
                    </button>
                }
                {!infinitePaused &&
                    <button
                        onClick={() => handleNextInfinite()}
                        className="inline-flex text-xs md:text-base whitespace-nowrap justify-center cursor-pointer items-center rounded-full px-6 py-3 text-center btn-secondary">
                        <div>Discussion suivante</div>
                        <img className="ml-1 h-6" src={nextIcon} alt="suivant"/>
                    </button>
                }
            </div>
        </div>
    )
}

export default InfinitePlayer