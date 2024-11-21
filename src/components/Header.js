const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Personal CV </h1>
                <nav>
                    <ul className="flex gap-4">
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#skills" className="hover:underline">Skills</a></li>
                        <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;