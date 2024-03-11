const ResumeMarkers = () => {
    return (
        <div className="flex flex-col items-center h-full flex-grow">
            <div className="flex justify-between items-center w-11/12" style={{ marginTop: '300px' }}>
                <img src="src/assets/weber.png" alt="Weber State Univeristy Logo" style={{
                    backgroundColor: 'white', width: '300px'
                }} />
                <a href="https://www.weber.edu/east" style={{ fontSize: '24px', color: '#fff', textDecoration: 'none' }}>→</a>

            </div>
            <div className="flex justify-between items-center w-11/12" style={{ marginTop: '245px' }}>
                <img src="src/assets/presence.png" alt="Presence Logo" style={{
                    backgroundColor: 'white', width: '250px', height: '65px'
                }} />
                <a href="https://presence.com/" style={{ fontSize: '24px', color: '#fff', textDecoration: 'none' }}>→</a>
            </div>
            <div className="flex justify-between items-center w-11/12" style={{ marginTop: '200px' }}>
                <img src="src/assets/slco.png" alt="Salt Lake County Logo" style={{
                    backgroundColor: 'white', width: '100px', height: '65px'
                }} />
                <a href="https://slco.org/clerk/elections/" style={{ fontSize: '24px', color: '#fff', textDecoration: 'none' }}>→</a>
            </div>
            <div className="flex justify-between items-center w-11/12" style={{ marginTop: '150px' }}>
                <img src="src/assets/vox.jpg" alt="Vox Nutrition Logo" style={{
                    backgroundColor: 'white', width: '250px', height: '65px'
                }} />
                <a href="https://www.voxnutrition.com/" style={{ fontSize: '24px', color: '#fff', textDecoration: 'none' }}>→</a>
            </div>
            <div className="flex justify-between items-center w-11/12" style={{ marginTop: '130px' }}>
                <img src="src/assets/uaa.png" alt="Description" style={{
                    backgroundColor: 'white', width: '100px', height: '100px'
                }} />
                <a href="http://https://utaharts.org/en/" style={{ fontSize: '24px', color: '#fff', textDecoration: 'none' }}>→</a>
            </div>
        </div>
    )
}

export default ResumeMarkers;

