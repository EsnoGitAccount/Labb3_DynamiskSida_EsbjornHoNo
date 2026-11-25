import Cv from "../assets/cv.json"

export default function CurriculumVitae(){

    return(
        <main>
            <h1 className="Page-Header">CV</h1>
                <div className="CV-Container">
                    <div id="Contact-Info">
                            <div id="Contact1">{Cv.name}</div>

                            <div id="Contact2">
                                <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="email icon" className="Contact-Icon" />
                                <div> {Cv.email}</div>
                            </div>

                            <div id="Contact3">
                                <img src="https://cdn-icons-png.flaticon.com/128/159/159832.png" alt="email icon" className="Contact-Icon" />
                                <div> {Cv.telephoneNumber}</div>
                            </div>
                    </div>

                    <div id="Work-Experience">
                    <h3>Work</h3>
                        {Cv.jobs.map(job =>
                            <div key={job.id} className="">
                                <h4>{job.jobTitle}, {job.employer}, {job.startDate}-{job.endDate}</h4>
                                <p>{job.description}</p>
                                <br />
                            </div>
                        )}
                    </div>

                    <div id="Education">
                        <h3>Education</h3>
                        {Cv.educations.map(education => 
                            <div key={education.id} className="">
                                <div>{education.program}, {education.school}, {education.startDate}-{education.endDate}</div>
                            </div>
                        )}
                    </div>
                    <div id="Languages">
                        <h3>Languages</h3>
                        {Cv.languages.map(language =>
                            <div key={language.id} className="">
                                {language.language} - {language.proficiency}
                            </div>
                        )}
                    </div>
                    <div id="Other-Skills">
                        <h3>Other</h3>
                        {Cv.courses.map(course =>
                            <div key={course.id} className="">
                                {course.course}
                            </div>
                        )}
                    </div>
                </div>

        </main>
    )
}