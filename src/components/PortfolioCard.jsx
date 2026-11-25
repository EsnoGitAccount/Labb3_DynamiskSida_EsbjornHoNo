import { useState } from "react"

export default function PortfolioCard({title, imageLink, websiteLink, description}){
    const [modalOpen, setModalOpen] = useState(false)

    return(
        <>
            <div className="Portfolio-Card-Container">
                <button onClick={() => setModalOpen(true)} className="Portfolio-Card">
                    <div>
                        <img src={imageLink} alt="Image of a project" />
                        <h4>{title}</h4>
                    </div>
                </button>
            </div>

            {modalOpen && (
                <div id="modal_b3" className="modal-overlay show">
                    <div className="modal-box">
                        <a href={websiteLink} className="modal-link">
                            <h3>{title}</h3>
                            <img src={imageLink} alt="Image of a spectral slash effect" className="modal-image" />
                            <p>{description}</p>
                        </a>
                        <button id="closeBtn" className="modalClose" onClick={() => setModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}