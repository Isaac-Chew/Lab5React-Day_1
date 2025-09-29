export default function Footer( {
    year = new Date().getFullYear(),
    owner}) {
    return (
        <>
            <footer>
                <p>&copy;{` ${year} ${owner} CodeCraft Labs. All rights reserved.`}</p>
            </footer>

            <hr></hr>
        </>
        
    )
}