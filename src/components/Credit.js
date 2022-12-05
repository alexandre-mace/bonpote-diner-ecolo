import logoBonPote from "../assets/logo-bonpote.png";

const Credit = () => (
    <div className="mt-20 flex items-center justify-center text-center text-white">
        <img src={logoBonPote} alt="Logo bonpote" className="mr-2 h-6"/> <span
        className="mr-1">Réalisé par</span> <a className="underline" target="_blank" rel="noreferrer"
                                               href="https://bonpote.com">Bonpote.com</a>
    </div>
)

export default Credit