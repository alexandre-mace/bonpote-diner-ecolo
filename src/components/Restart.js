const Restart = ({handleReset}) => (
    <div className="w-[90%] md:w-full absolute action-btn-bottom left-1/2 -translate-x-1/2 z-50 text-center">
        <button
            onClick={() => handleReset()}
            className="inline-block whitespace-nowrap justify-center cursor-pointer items-center rounded-full px-6 py-3 text-center btn-primary">
            Démarrer une nouvelle discussion  💬
        </button>
    </div>
)

export default Restart