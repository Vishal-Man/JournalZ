export default function Joke(prop) {
    return(
        <>
            <h3>{prop.jname}</h3>
            {/*conditional rendoring same as conditional statements.
                It renders the elements into webpage if the conndition
                is met eg:- bellow*/}
            {/*{prop.setup && <p className="setup">Setup: {prop.setup}</p>>}*/}
            <p>{prop.setup}</p>
            <p>{prop.punchline}</p>
            <hr />
        </>
    )
}