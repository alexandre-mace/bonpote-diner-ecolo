import PersonLightInfo from "./PersonLightInfo";

const PersonInfo = ({
                        name, icon,
                        position = null,
                        left = 0,
                        top = 0,
                        description = null}) => {
    return (
        <div style={position ? {
            position: "absolute",
            left: left,
            top: top
        } : {}} className={`w-60 text-left ${position === 'absolute' ? '-translate-x-1/2' : ''}`}>
            <div className={`bg-[#2E2E2E] p-3 rounded-lg`}>
                <PersonLightInfo
                    name={name}
                    icon={icon}
                />
                {description &&
                    <p className={"text-white opacity-70 text-xs"}>{description}</p>
                }
            </div>
        </div>
    )
}
export default PersonInfo