const PersonLightInfo = ({icon, name, align = 'start'}) => (
    <div className={`flex items-center max-w-xs mb-1 justify-${align}`}>
        <img
            className={"w-8 h-8"}
            src={icon}
            alt={`Icone de ${name}`}
        />
        <span className={"text-white ml-2"}>{name}</span>
    </div>
)

export default PersonLightInfo