import { useState, useEffect } from "react"

export default function EasterEggTager(){
    const [isOpen, setIsOpen] = useState(false)
    const [easterEggListener, setEasterEggListener] = useState([0,0,0])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.key === "Escape"){
                setIsOpen(false)
            }

            setEasterEggListener((previousInputs) =>
                [...previousInputs, event.key].slice(1, 4)
            );
        };

        window.addEventListener("keydown", handleKeyDown);

        return() => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    useEffect(() => {
        console.log(`previousInputs: ${easterEggListener}`)
        if(easterEggListener.join("") === "360"){
            setIsOpen(true)
        }
    }, [easterEggListener])

    return(
        <>
            {isOpen && (
                <div id="easterEggBuster" className="modal-overlay show">
                    <div className="modal-box">
                        <div className="modal-link">
                            <h3>Gigantic Tager Buster!</h3>
                            <img src="https://www.dustloop.com/wiki/images/thumb/0/09/BBCS_Tager_GETB2.png/210px-BBCS_Tager_GETB2.png" alt="Image of Iron Tager slamdunking a poor opponent." className="modal-image" />
                        </div>
                        <button id="closeBtn" className="modalClose" type="button" onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}