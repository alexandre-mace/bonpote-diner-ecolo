import PersonLightInfo from "./PersonLightInfo";

const PersonInfo = ({
                        name, icon,
                        position = null,
                        left = 0,
                        top = 0,
                        width = 0,
                        description = null}) => {

    return (
        <div style={position ? {
            position: "absolute",
            left: left,
            top: top
        } : {}} className={"w-60 text-center"}>
            <PersonLightInfo
                name={name}
                icon={icon}
            />
            {description &&
                <p className={"text-white"}>{description}</p>
            }
        </div>
    )
}
export default PersonInfo