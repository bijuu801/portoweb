import ProjectItem from ".././components/ProjectItem"
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from "react";
import PageWrap from "../components/PageWrap";
import klonedPic from '../assets/klonedb.jpg'
import jucePic from '../assets/juce.jpg'
import y2mp3Pic from '../assets/youtube2sample.jpg'


const ProjectsPage = () => {

    const supaBaseURL = import.meta.env.VITE_SUPABASE_URL;
    const supaBaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    const supabase = createClient(supaBaseURL, supaBaseAnonKey);

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [httpError, setHttpError] = useState(); 

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                let { data: projects, error } = await supabase
                    .from('projects')
                    .select('*');

                if(error) {
                    throw new Error("Something went wrong.")
                }

                const loadedProjects = [];

                for(const key in projects) {
                    loadedProjects.push({
                        id: key,
                        title: projects[key].title,
                        description: projects[key].description,
                        link: projects[key].link,
                        image: projects[key].image
                    });
                }
                setProjects(projects);
                setIsLoading(false);
            } catch(error) {
                setIsLoading(false);
                setHttpError(error.message);
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
        <PageWrap
            centerColumnContent={
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap mx-4">
                        {projectsList}
                    </div>
                </div>
            }
        />

    )
}

export default ProjectsPage;
