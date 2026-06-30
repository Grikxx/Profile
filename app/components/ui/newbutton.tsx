import Link from "next/link";
import { StarButton } from "@/components/ui/star-button";
import { Button } from "@/components/ui/button"
interface ButtonWithIconProps {
    content: string, 
    icon:{IconName:React.ElementType, stroke:number},
    link: string

}

interface NewButtonProps {
  input: ButtonWithIconProps[];
}

export default function NewButton({ input }: NewButtonProps) {
    return (
        <>{input.map((item, index) =>{
        let IconAttribute = item.icon.IconName;
        return (

            <Link href={item.link}>
            <button className="inline-flex font-sans items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm  text-black-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:bg-slate-100">
              <IconAttribute stroke={item.icon.stroke} className="] h-[2vh] shrink-0"/> <b className="h-[2vh]">{item.content}</b>
            </button>
            </Link>
        )}
        )}</>
    );}
        

