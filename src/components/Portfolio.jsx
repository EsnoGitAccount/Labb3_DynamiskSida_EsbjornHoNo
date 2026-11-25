import { useState, useEffect } from "react"
import PortfolioCard from "./portfolioCard"

export default function Portfolio(){
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
    useEffect(() => {
        async function handleComponentStart() {
            try{
                setIsLoading(true);
                const response = (await fetch('https://api.github.com/users/EsnoGitAccount/repos'));

                if(!response.ok){
                    throw new Error(`Github returned status: ${response.status}`);
                }

                const responseData = await response.json();
                console.log(responseData);
                setRepos(responseData);
                setErrorMessage("")
            }
            catch(error){
                setErrorMessage(error)
                console.log(`Något gick fel.`, error);
            }
            finally{
                setIsLoading(false);
            }
        }

        handleComponentStart();
    }, []); 

    return(
        <main>
            {isLoading ? (
                <div>
                    Laddar
                </div>
            ) : (
                <div>
                    <h1 className="Page-Header">Portfolio</h1>
                    <div className="Portfolio-Container">
                        <h3>Fullstack</h3>
                        <div className="Portfolio-Card-Container">
                            {errorMessage ? (
                                <div>Något gick fel med att hämta mina repon. Fel: {errorMessage}</div>
                            ): (
                                <>
                                    {repos.map ((repo) => 
                                        <PortfolioCard key={repo.id} title={repo.name} imageLink="src\assets\GitHub_Invertocat_Black_Clearspace.png" websiteLink={repo.html_url} description=""/>
                                    )}
                                </>
                            )}
                        </div>

                        <h3>VFX</h3>
                        <div className="Portfolio-Card-Container">
                            <PortfolioCard 
                                title="Magma Geyser" 
                                imageLink="https://cdnb.artstation.com/p/assets/covers/images/079/477/607/smaller_square/esbjorn-holmerin-nord-esbjorn-holmerin-nord-firethumbnail.jpg?1725013078" 
                                websiteLink="https://www.artstation.com/artwork/RK3xQO" 
                                description="Magma geyser effect made in unity. The goal of this project was to create a particle shader that eroded a particle over the lifetime of the particle." 
                            />
                            <PortfolioCard 
                                title="Jumping Windslam" 
                                imageLink="https://cdna.artstation.com/p/assets/covers/images/082/711/416/smaller_square/esbjorn-holmerin-nord-esbjorn-holmerin-nord-windslam-thumb.jpg?1733743859" 
                                websiteLink="https://www.artstation.com/artwork/NqbeOq" 
                                description="A wind effect inspired by the wind effects in Genshin Impact. In addition to creating custom models, particle systems, and shaders the goal of this project was to connect a particle system with a animation in." 
                            />
                            <PortfolioCard 
                                title="Spectral Slash" 
                                imageLink="https://cdnb.artstation.com/p/assets/covers/images/074/720/347/smaller_square/esbjorn-holmerin-nord-esbjorn-holmerin-nord-slashthumbnail.jpg?1712772431" 
                                websiteLink="https://www.artstation.com/artwork/OGQWbe" 
                                description="A cool slash effect made with a combination of custom 3d-models, particle systems and shaders." 
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}