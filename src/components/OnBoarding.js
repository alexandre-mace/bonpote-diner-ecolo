const OnBoarding = ({setStarted, handleStartInfinite}) => (
    <>
        {
            [0, 1].map(i => (
                    <div
                        key={i}
                        className={`container text-sm md:text-base text-blue-2 w-[100%] ${i === 1 ? 'pointer-events-none -rotate-3 z-10' : 'custom-shadow-1 z-20'} absolute w-[87%] md:w-auto top-1/2 left-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 md:p-8 text-center md:max-w-2xl`}>
                        <div
                            className="inline-block -rotate-2 rounded-md border border-blue-2 text-blue-2 p-4 py-2 text-center font-display font-extrabold text-lg">INTRODUCTION
                        </div>
                        <div className="mt-5 mb-5">
                            Bientôt l’hiver, les repas de Noël et les raclettes entre amis !
                        </div>
                        <div className="mb-5">
                            Pour vous aider dans cette épreuve, voici un petit guide interactif pour savoir quoi
                            répondre
                            aux
                            bullshits les plus répandus lors de ces repas phares de l’année.
                        </div>
                        <div className="mb-5 font-bold">
                            Pour jouer, cliquez sur le bouton commencer, puis sélectionnez un des personnages
                            autour
                            de
                            la
                            table afin de débuter une conversation.
                        </div>
                        <div className={"flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center"}>
                            <button onClick={() => setStarted(true)}
                                 className="inline-block w-full cursor-pointer whitespace-nowrap justify-center items-center rounded-full px-6 py-3 text-center btn-primary md:mr-2">Commencer
                                le repas 🍽️</button>
                            <button onClick={() => {
                                setStarted(true)
                                handleStartInfinite()
                            }}
                                 className="inline-block cursor-pointer w-full whitespace-nowrap justify-center mt-3 md:mt-0 items-center rounded-full px-6 py-3 text-center btn-ternary md:ml-1">Diner infini  🔀 </button>
                        </div>
                    </div>
            ))
        }
    </>
)

export default OnBoarding