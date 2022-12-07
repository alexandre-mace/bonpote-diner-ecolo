import {Menu, Transition} from "@headlessui/react";
import chevronDown from "../assets/chevron-down.svg";
import {Fragment} from "react";
import PersonLightInfo from "./PersonLightInfo";

const ArgumentPicker = ({setSpeaking, setPickedArgument, pickedPerson, setPickedPerson}) => (
    <div className="absolute -top-6 left-1/2 z-20 -translate-x-1/2 w-full flex justify-center">
        <div className={"absolute -top-8 md:top-2 -left-40 md:-left-0 text-vert-1 cursor-pointer"} onClick={() => setPickedPerson(null)}>
            <span className={"-rotate-90 inline-block text-xs"}>⌃</span> <span className={"underline font-bold"}>Retour</span>
        </div>
        <div className="text-right">
            <Menu as="div"
                  className="relative inline-block text-left"
                  data-headlessui-state="open"
            >
                {({open, close}) => (
                    <>
                        <div>
                            <PersonLightInfo
                                name={pickedPerson.name}
                                icon={pickedPerson.icon}
                                align={'center'}
                            />
                            <Menu.Button
                                onClick={() => close()}
                                data-headlessui-state="open"
                                className="inline-flex w-full mt-3 items-center justify-center rounded-full bg-white px-5 py-2 font-medium text-black text-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                Choisir un sujet spécifique
                                <img src={chevronDown} alt="Chevron down"
                                     className="ml-2 h-3 w-3"/>
                            </Menu.Button>
                        </div>
                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute right-0 mt-2 w-full origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-2 focus:outline-none"
                                data-headlessui-state="open"
                            >
                                {pickedPerson.arguments.map((argument, index) => (
                                    <div key={index} className="px-1 py-1">
                                        <Menu.Item>
                                            {({active}) => (
                                                <button
                                                    onClick={() => {
                                                        setSpeaking(true)
                                                        setPickedArgument(argument)
                                                    }}
                                                    className={`${
                                                        active ? 'text-blue-1' : 'text-black'
                                                    } group flex w-full rounded-md px-2 py-2 text-sm text-left`}
                                                >
                                                    {argument.content}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    </div>
)

export default ArgumentPicker