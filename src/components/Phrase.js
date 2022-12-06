import PhraseAuthor from "./PhraseAuthor";

const Phrase = ({content, name, icon, link = null}) => (
    <div>
        <PhraseAuthor name={name} icon={icon}/>
        <div className={"mt-2"}>
            {content}
        </div>
        {link &&
            <a
                href={link}
                className={"underline block mt-2"}
                target={"_blank"}
                rel={"noreferrer"}
            >
                En savoir plus
            </a>
        }
    </div>
)

export default Phrase