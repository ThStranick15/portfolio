export default function ProjectCard(props){
    return(
        <article className="projectCard">
            <img src={props.project.img} alt={props.project.title} />
            <div>
                <h1>{props.project.title}</h1>
                <p>{props.project.description}</p>
                <a href={props.project.repo}>Repo</a>
                {props.project.site ? (<a href={props.project.site}>Deployed</a>) : (<a href={props.project.video}>Video</a>)}
            </div>
        </article>
    )
}