import switchIcon from "../assets/Switch.svg";

const ModeSwitcher = ({handleStartInfinite, infinite, handleStopInfinite}) => {
    return (
        <div
            className="absolute w-[90%] m-auto items-center flex justify-center bottom-4 xl:bottom-4 2xl:-bottom-8 left-1/2 md:-right-40 -translate-x-1/2"
        >
            {infinite &&
                <div>
                    <button
                        className={'flex w-fit items-center whitespace-nowrap cursor-pointer py-1 btn-quartary text-base'}
                        onClick={() => {
                            handleStopInfinite()
                        }}>
                        <img className="mr-2 h-6 md:h-8 inline-block" src={switchIcon} alt="switch"/>
                        <div>Basculer en discussion classique</div>
                    </button>
                </div>
            }
            {!infinite &&
                <button
                    className={'flex items-center whitespace-nowrap cursor-pointer py-1 btn-quartary text-base'}
                    onClick={() => handleStartInfinite()}
                >
                    <img className="mr-2 h-6 md:h-8 inline-block" src={switchIcon} alt="switch"/>
                    <div>Basculer en diner infini</div>
                </button>
            }
        </div>
    )
}

export default ModeSwitcher