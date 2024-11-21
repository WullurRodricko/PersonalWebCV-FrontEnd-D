const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-bold">My CV</h1>
            <nav>
                <ul className="flex gap-4">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
