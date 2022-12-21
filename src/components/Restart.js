const Restart = ({handleReset}) => (
    <div className="w-[90%] md:w-full absolute action-btn-bottom left-1/2 -translate-x-1/2 z-50 text-center">
        <div className={"flex flex-col md:flex-row w-full justify-center"}>
            <div
                onClick={() => handleReset()}
                className="inline-flex whitespace-nowrap justify-center cursor-pointer items-center rounded-full px-6 py-3 text-center btn-primary">
                Démarrer une nouvelle discussion  💬
            </div>
        </div>
    </div>
)

export default Restart