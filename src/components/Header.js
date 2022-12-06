const Header = ({opacity}) => (
    <>
        <div className="text-center mt-6 md:mt-3">
            <div
                className={`bg-blue-1 text-white -rotate-2 p-3 py-1 inline-block rounded-md mb-5 text-lg opacity-${opacity}`}>
                Guide de survie
            </div>
        </div>
        <div
            className={`text-4xl md:text-5xl text-center font-display text-white font-extrabold mb-8 md:mb-10 uppercase opacity-${opacity}`}>
            Le diner <span className="italic">(écolo)</span> <br/>
            du siecle
        </div>
    </>
)

export default Header