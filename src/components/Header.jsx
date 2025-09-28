const name = "Isaac";

export default function Header() {
    return (
        <>
            <header>
                <h1>
                {`Welcome ${name} to the `}<span id="special">CodeCraft</span>{` Labs Intranet`}
                </h1>           
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Employee Management</a></li>
                    </ul>
                </nav>
            </header>

            <hr></hr>
        </>
    );
}