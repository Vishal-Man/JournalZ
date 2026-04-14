export default function Log(props) {
    const turtles = [<h2>Donaltello</h2>, <h2>Michelo</h2>, <h2>Relafo</h2>, <h2>Leorado</h2>]
    return(
        <>
            <article className='entry'>
                <div>
                    <img src={props.img} />
                </div>
                <div>
                    <span>{props.CountryName}</span>
                    <h2>{props.location}</h2>
                    <p>{props.Dates}</p>
                    <p>{props.description}</p>
                </div>
            </article>
        </>
    )
}