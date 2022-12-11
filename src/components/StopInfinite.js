import pausecircle from "../assets/pause_circle.svg";

const StopInfinite = ({handleStopInfinite}) => (
    <div className="w-[90%] md:w-auto absolute -bottom-12 md:-bottom-4 left-1/2 -translate-x-1/2 z-30 text-center">
        <div onClick={() => handleStopInfinite()}
             className="inline-flex cursor-pointer items-center rounded-full px-6 py-3 text-center btn-primary">
            Mettre fin à la discussion <img className="ml-1" src={pausecircle} alt="play"/>
        </div>
    </div>
)

export default StopInfinite