const Restart = ({reset}) => (
    <div className="w-[90%] md:w-auto absolute -bottom-12 md:-bottom-2 left-1/2 -translate-x-1/2 z-50 text-center">
        <div
            onClick={() => reset()}
            className="inline-flex cursor-pointer items-center rounded-full px-6 py-3 text-center bg-vert-1 text-blue-1">
            Démarrer une nouvelle discussion
        </div>
    </div>
)

export default Restart