const Header = ({opacity}) => (
    <>
        <div className="text-left sm:text-center mt-6 md:mt-20 md:mt-8 max-w-[80%] sm:mx-auto pl-3 md:pl-0">
            <div
                className={`bg-blue-1 text-white -rotate-2 p-3 py-1 inline-block rounded-md mb-5 text-lg opacity-${opacity}`}>
                Guide de survie
            </div>
        </div>
        <h1
            className={`text-4xl md:text-5xl text-left sm:text-center font-display text-white font-extrabold mb-6 md:mb-10 uppercase opacity-${opacity} pl-3 md:pl-0`}>
            Le diner <span className="md:italic text-2xl md:text-5xl">(écolo)</span> <br/>
            du siecle
        </h1>
    </>
)

export default Header