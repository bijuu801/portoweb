const ProjectItem = (props) => {
    return (
        <ul className="card bg-neutral rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-2xl font-bold mb-4">{props.title}</h3>
            <div className="mb-4">
                <img className="w-28 h-28 object-cover rounded" src={props.image} alt={props.title} />
            </div>
            <div className="text-gray-700 mb-2">
                {props.description}
            </div>
            <div>
                <a href={props.link} className="text-primary underline">Learn more</a>
            </div>
        </ul>
    )
}

export default ProjectItem;
