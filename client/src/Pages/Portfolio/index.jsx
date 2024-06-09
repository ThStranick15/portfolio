import ProjectCard from "./components/Project Card"

const projects =[
    {
        title:'Battle Brain',
        description:'Challenge your friends in a contest of brain power!',
        img:'/images/Battle-Brain.png',
        repo:'https://github.com/WAbreu738/BATTLE_BRAIN',
        site:'https://nameless-inlet-80123-f3bf2fedf73b.herokuapp.com'
    },
    {
        title:'The Reading Nook',
        description:'Search for a book and add it to your nook!',
        img:'/images/Reading-Nook.png',
        repo:'https://github.com/tarikorg/Reading_Nook',
        site:'https://guarded-river-34918-8aebb7f6bceb.herokuapp.com/'
    },
    {
        title:'League of Legends Team Builder',
        description:'Create your League of Legends team composition before you take the battlefield!',
        img:'/images/League.png',
        repo:'https://github.com/ThStranick15/league_team_builder',
        site:'https://thstranick15.github.io/league_team_builder/'
    },
    {
        title:'Text Editor PWA',
        description:'A text editor Progressive Web App (PWA).',
        img:'/images/PWA.png',
        repo:'https://github.com/ThStranick15/text_editor_pwa',
        site:'https://text-editor-pwa-ndi0.onrender.com/'
    },
    {
        title:'Social Network API',
        description:'An API that can be used to CRUD thoughts, reactions, and friends.',
        img:'/images/Social_Network.png',
        repo:'https://github.com/ThStranick15/social_network_api',
        video:'https://drive.google.com/file/d/1phDnSYt98NTqMuGnYnyxuiZeYwWmfbk_/view'
    },
    {
        title:'Tech Blog',
        description:'A site where you can view your own and others blog posts.',
        img:'/images/Tech-Blog.png',
        repo:'https://github.com/ThStranick15/tech_blog',
        site:'https://tech-blog-b8r0.onrender.com/'
    }
]

export default function Portfolio(){
    return(
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="cardHolder">
                {projects.map((project,index)=>(
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </section>
        
    )
}