import ProjectItem from ".././components/ProjectItem"
import { useEffect, useState} from "react";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [httpError, setHttpError] = useState(); 

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    "https://portfolio-cb181-default-rtdb.firebaseio.com/Project.json"
                );

                if(!response.ok) {
                    throw new Error("Something went wrong.")
                }

                const responseData = await response.json();

                const loadedProjects = [];

                for(const key in responseData) {
                    loadedProjects.push({
                        id: key,
                        title: responseData[key].title,
                        description: responseData[key].description,
                        link: responseData[key].link,
                        image: responseData[key].image
                    });
                }
                setProjects(loadedProjects);
                setIsLoading(false);
            } catch(error) {
                setIsLoading(false);
                setHttpError(error);
            }
        };
        fetchProjects();
    }, []);

    if(isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    if(httpError) {
        return (
            <section>
                <p>{httpError}</p>
            </section>
        )
    }

    const projectsList = projects.map((project) => (
        <div key={project.id} className="w-full sm:w-1/2 p-4">
            <ProjectItem
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
            />
        </div>
    ));

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
                {projectsList}
            </div>
        </div>
    )
}

export default ProjectsPage;
