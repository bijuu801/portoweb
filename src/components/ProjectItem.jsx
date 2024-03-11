const ProjectItem = (props) => {
    return (
        <ul className="card bg-neutral rounded-lg shadow-md p-6 mb-4">
            <h3 className=" text-[#faf8f8] text-2xl font-bold mb-4" style={{ fontFamily: 'CaslonCP' }}>{props.title}</h3>
            <div className="mb-4">
                <img className="w-28 h-28 object-cover rounded" src={props.image} alt={props.title} />
            </div>
            <div className="text-[#d4fdd3] mb-2" style={{ fontFamily: 'CaslonCP' }}>
                {props.description}
            </div>
            <div className="flex justify-end">
                <a href={props.link} className="text-[#ffbe00]" style={{ fontFamily: 'CaslonCP' }} >Learn more</a>
            </div>
        </ul>
    )
}

export default ProjectItem;
