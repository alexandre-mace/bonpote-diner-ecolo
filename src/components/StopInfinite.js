import pausecircle from "../assets/pause_circle.svg";
import playcircle from "../assets/play_circle.svg";
import stop from "../assets/power_settings_new.svg";

const StopInfinite = ({handleStopInfinite, handlePauseInfinite, infinitePaused, handleContinueInfinite}) => (
    <div className="w-[80%] md:w-full md:w-auto absolute bottom-10 md:bottom-16 md:-bottom-4 left-1/2 -translate-x-1/2 z-50 text-center">
        <div className={"flex flex-col md:flex-row w-full justify-center"}>
            {infinitePaused &&
                <div
                    onClick={() => handleContinueInfinite()}
                    className="inline-flex whitespace-nowrap justify-center cursor-pointer md:mr-3 items-center rounded-full px-6 py-3 text-center btn-primary">
                    Reprendre la discussion <img className="ml-1" src={playcircle} alt="play"/>
                </div>
            }
            {!infinitePaused &&
                <div
                    onClick={() => handlePauseInfinite()}
                    className="inline-flex whitespace-nowrap justify-center cursor-pointer md:mr-3 items-center rounded-full px-6 py-3 text-center btn-primary">
                    Mettre pause à la discussion <img className="ml-1" src={pausecircle} alt="pause"/>
                </div>
            }
            <div
                onClick={() => handleStopInfinite()}
                className="inline-flex whitespace-nowrap justify-center mt-2 md:mt-0 cursor-pointer items-center rounded-full px-6 py-3 text-center btn-primary">
                Terminer la discussion <img className="ml-1" src={stop} alt="stop"/>
            </div>
        </div>
    </div>
)

export default StopInfinite