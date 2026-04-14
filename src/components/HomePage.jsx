import Log from './LogPage'
function HomePage() {
    return(
        <>
            <header className="header">
                <h2>JournalZ</h2>
                <p>- Record every memory of your life</p>
                <Log />
            </header>
        </>
    )
}

export default HomePage