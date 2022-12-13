import shareicon from "../assets/share.svg";
import copyToClipboard from "../utils/copyToClipboard";

const ShareLink = ({linkCopied, setLinkCopied}) => (
    <div className="w-auto absolute top-3 right-8 md:top-6 md:right-6 z-[99]">
        <div className={"flex flex-col md:flex-row w-full justify-center text-xs md:text-base"}>
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
                    <div className={'flex'}>
                        <img className="mr-2 h-4 md:h-6" src={shareicon} alt="pause"/> <div>Partager le lien</div>
                    </div>
                }
            </div>
        </div>
    </div>
)

export default ShareLink