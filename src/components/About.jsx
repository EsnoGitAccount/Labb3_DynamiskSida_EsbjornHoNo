import AboutMeImage from "../assets/AboutMain.png"

export default function About(){

    return(
        <main className="">
            <h1 className="Page-Header">Om Mig</h1>
            <div className="OmMig-Container">
                <img src={AboutMeImage} alt="Image of me" />
                <div className="OmMig-Text">
                    <p>
                        En glad kille med massa i huvudet. Istället för att tänka på romarriket så tänkar jag på matematik och statistik i spel, 
                    </p>
                    <p>
                        Har varit dator och teknikintreserad hela livet. Lekte lite i diverse editorer i spelen jag gillade jag växte upp, men det första jag programmerade ordetnligt var i gymnasiet där jag läste C++. Efter det så la jag programmerandet på hyllan och siktade på datorgrafik istället.
                    </p>
                    <p>
                        Det som står här är egentligen inte särskillt viktigt. Det är framförallt för att fylla ut med text som inte är lorem. Jag kanske ljuger helt om allt som står på den här sidan det är ingen som vet.
                    </p>
                </div>
            </div>
        </main>
    )
}