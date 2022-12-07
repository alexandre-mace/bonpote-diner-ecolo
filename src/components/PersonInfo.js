import PersonLightInfo from "./PersonLightInfo";
import {Transition} from "@headlessui/react";
import {JeanMarc} from "../domain/people";

const PersonInfo = ({
                        name, icon,
                        position = null,
                        left = 0,
                        top = 0,
                        description = null
                    }) => {
    return (
        <div style={position ? {
            position: "absolute",
            left: left,
            top: top
        } : {}} className={`w-60 text-${name === JeanMarc ? 'center' : 'left'} ${position === 'absolute' ? '-translate-x-1/2' : ''}`}>
            <Transition
                appear={true}
                show={true}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className={`bg-[#2E2E2E] p-3 rounded-lg`}>
                    <PersonLightInfo
                        name={name}
                        icon={icon}
                        align={name === JeanMarc ? 'center' : 'start'}
                    />
                    {description &&
                        <p className={"text-white opacity-70 text-sm"}>{description}</p>
                    }
                    {(description && name === JeanMarc) &&
                        <div className={"text-white text-sm px-2 py-1 mt-2 bg-[#393C2E] text-[#CAF750] inline-block rounded-full"}>Personnage non jouable</div>
                    }
                </div>
            </Transition>
        </div>
    )
}
export default PersonInfo