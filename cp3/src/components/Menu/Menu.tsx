import Link from "next/link";
import GlobalSolution from "@/app/pages/gs/page";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/checkpoints">CPS</Link></li>
                <li><Link href="/challenge">Challenge Sprints</Link></li>
                <li><Link href="/GlobalSolution">GS</Link></li>
            </ul>
        </nav>
    )
}