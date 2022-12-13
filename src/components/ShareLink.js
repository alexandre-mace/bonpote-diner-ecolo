import shareicon from "../assets/share.svg";
import copyToClipboard from "../utils/copyToClipboard";

const ShareLink = ({linkCopied, setLinkCopied}) => (
    <div className="w-auto absolute top-3 right-8 md:top-6 md:right-6 z-[99]">
        <div
            onClick={() => {
                setLinkCopied(true)
                copyToClipboard('https://ledinerdusiecle.bonpote.com')
                setTimeout(() => {
                    setLinkCopied(false)
                }, 2000)
            }}
            className="cursor-pointer md:mr-3 py-2 btn-quartary text-xs md:text-base">
            {linkCopied &&
                <div>✅ Lien copié</div>
            }
            {!linkCopied &&
                <div className={'flex whitespace-nowrap'}>
                    <img className="mr-2 h-4 md:h-6" src={shareicon} alt="pause"/>
                    <div>Partager le lien</div>
                </div>
            }
        </div>
    </div>
)

export default ShareLink