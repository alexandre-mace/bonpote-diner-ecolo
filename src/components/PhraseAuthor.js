const PhraseAuthor = ({icon, name}) => (
    <div className="flex items-center max-w-xs mb-1 justify-items-start">
        <img
            src={icon}
            alt={`Icone de ${name}`}
        />
        <span className={"text-white opacity-70 ml-2"}>{name}</span>
    </div>
)

export default PhraseAuthor