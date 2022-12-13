import logoBonPote from "../assets/logo-bonpote.png";

const Credit = () => (
    <>
        <div className={"mt-auto"}>
            <div className="mb-6 flex items-center justify-center text-center text-white">
                <img src={logoBonPote} alt="Logo bonpote" className="mr-2 h-6"/> <span
                className="mr-1">Réalisé par</span> <a className="underline" target="_blank" rel="noreferrer"
                                                       href="https://bonpote.com">Bonpote.com</a>
            </div>
            <div className={"text-xs md:text-sm text-white text-center"}>
                <div className={"inline-block"}>Contenu : <a className={"underline"} rel={"noreferrer"} target={"_blank"} href="https://www.linkedin.com/in/thomas-wagner-0807b932/?originalSubdomain=fr">Thomas Wagner</a> <span className={"mx-2"}>—</span></div>
                <div className={"inline-block"}>Développement : <a className={"underline"} rel={"noreferrer"} href="https://www.linkedin.com/in/alexandre-mac%C3%A9">Alexandre Macé</a> <span className={"mx-2"}>—</span></div>
                <div className={"inline-block"}>Design : <a className={"underline"} rel={"noreferrer"} href="https://www.linkedin.com/in/valentine-michel-ux-ui-designer-%C3%A9coconception/">Valentine Michel</a></div>
            </div>
        </div>
    </>
)

export default Credit