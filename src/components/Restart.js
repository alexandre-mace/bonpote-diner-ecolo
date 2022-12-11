const Restart = ({handleReset, handleStartInfinite}) => (
    <div className="w-[90%] md:w-auto absolute -bottom-12 md:-bottom-4 left-1/2 -translate-x-1/2 z-50 text-center">
        <div className={"flex flex-col md:flex-row w-full justify-center"}>
            <div
                onClick={() => handleReset()}
                className="inline-flex whitespace-nowrap justify-center cursor-pointer md:mr-1 items-center rounded-full px-6 py-3 text-center btn-primary">
                Démarrer une nouvelle discussion
            </div>
            <div
                onClick={() => handleStartInfinite()}
                className="inline-flex cursor-pointer justify-center mt-2 md:mt-0 whitespace-nowrap md:ml-1 items-center rounded-full px-6 py-3 text-center btn-secondary">
                Basculer en diner infini
            </div>
        </div>
    </div>
)

export default Restart