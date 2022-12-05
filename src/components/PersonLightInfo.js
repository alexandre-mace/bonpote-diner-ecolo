const PersonLightInfo = ({icon, name}) => (
    <div className="flex items-center max-w-xs mb-1 justify-center">
        <img
            src={icon}
            alt={`Icone de ${name}`}
        />
        <span className={"text-white ml-2"}>{name}</span>
    </div>
)

export default PersonLightInfo