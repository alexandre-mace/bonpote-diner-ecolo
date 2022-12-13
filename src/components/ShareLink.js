import shareicon from "../assets/share.svg";
import copyToClipboard from "../utils/copyToClipboard";

const ShareLink = ({linkCopied, setLinkCopied}) => (
    <div className="w-auto absolute top-3 right-8 md:top-6 md:right-6 z-50">
        <div className={"flex flex-col md:flex-row w-full justify-center text-sm md:text-base"}>
            <div
                onClick={() => {
                    setLinkCopied(true)
                    copyToClipboard('https://ledinerdusiecle.bonpote.com')
                    setTimeout(() => {
                        setLinkCopied(false)
                    }, 2000)
                }}
                className="inline-flex whitespace-nowrap justify-center cursor-pointer md:mr-3 items-center py-2 text-center btn-quartary">
                {linkCopied &&
                    <div>✅ Lien copié</div>
                }
                {!linkCopied &&
                    <>
                        <img className="mr-2" src={shareicon} alt="pause"/> Partager le lien
                    </>
                }
            </div>
        </div>
    </div>
)

export default ShareLink