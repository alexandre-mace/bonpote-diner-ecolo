import PersonInfo from "./PersonInfo";

const Phrase = ({content, name, icon, link = null}) => (
    <div style={{}}>
        <PersonInfo
            name={name}
            icon={icon}
        />
        {content}
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