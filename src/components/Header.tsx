
export default function Header() {
    return (
        <header className="fixed w-full z-4">
            <div className=' flex justify-between pl-10 pr-10 pt-5'>
            <div>RUNGTIWA TAEUDOMCHOK</div>
            <div className="flex gap-10">
                <a href='#about'>About</a>
                <a href='#experience'>Experience</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
        </header>
        
    )
}