import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/produtos">Boletim</Link></li>
                <li><Link href="/produtos/cad-boletim">Cadastro</Link></li>
            </ul>
        </nav>
    )
}