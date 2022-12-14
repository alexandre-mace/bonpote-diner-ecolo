import {JeanMarc, peopleData} from "../domain/people";

const MobilePersonPicker = ({setPickedPerson}) => {
    return (
        <div className={"absolute -top-2 left-1/2 -translate-x-1/2 w-screen px-4"}>
            <div className={"grid grid-cols-3 gap-4 md:hidden pt-20 pb-10"}>
                {
                    Array.from(peopleData).filter(person => person[1].name !== JeanMarc).map((person, i) => (
                        <div
                            key={i}
                            className={"p-4 bg-[#41439D] rounded-md text-center cursor-pointer"}
                            onClick={() => setPickedPerson(person[1])}
                        >
                            <img className={"inline-block mb-1"} src={person[1].icon} alt={person[1].name} width={45}/>
                            <div className={"text-white text-center text-xs"}>{person[1].name.split(' ')[0]}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MobilePersonPicker