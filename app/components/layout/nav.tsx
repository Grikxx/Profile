import NewButton from "../ui/newbutton";
import { IconHome,IconBrandDiscord,IconNotes,IconAlignBoxBottomCenter,IconTerminal,IconBrandInstagram,IconBrandLinkedin,IconBrandGithub } from '@tabler/icons-react';
interface navs{
    content:string,
    icon:{IconName:React.ElementType, stroke:number},
    link:string};
let data:navs[] = [
    { 
       content:"Home", 
       icon:{IconName :IconHome , stroke:2}, 
       link:"/home" },
    { 
       content:"Project", 
       icon:{IconName :IconTerminal , stroke:2}, 
       link:"/projects" },
    { 
       content:"About me", 
       icon:{IconName :IconAlignBoxBottomCenter , stroke:2}, 
       link:"/aboutme" },
    { 
       content:"Notes", 
       icon:{IconName :IconNotes , stroke:2}, 
       link:"/notes" }
];

let connections:navs[] = [{ 
        content:"", 
        icon:{IconName :IconBrandDiscord , stroke:2}, 
        link:"https://discord.gg/mNNaztWNur" },
    { 
        content:"", 
        icon:{IconName :IconBrandInstagram , stroke:2}, 
        link:"https://www.instagram.com/sparsh.tar.zst/" },
    { 
        content:"", 
        icon:{IconName :IconBrandLinkedin , stroke:2}, 
        link:"https://www.linkedin.com/in/sparshgupta943/" },
    { 
        content:"", 
        icon:{IconName :IconBrandGithub , stroke:2}, 
        link:"https://github.com/Grikxx" }
    ];
export default function Nav() {
    return(
        <>
        <div className="flex justify-between   ">
            <div className="flex justify-between ">
                <div className="nav-button"><NewButton input={data}/> </div>
            </div>
            <div className="flex justify-between ">
                <div className="nav-button"><NewButton input={connections}/> </div>
            </div>
        </div>
        </>
    );
};