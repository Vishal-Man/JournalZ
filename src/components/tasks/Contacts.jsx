export default function Contact(prop) {
    return(
        <div className="contacts">
            <img src={prop.img} alt='cat image' />
            <h3>{prop.name}</h3>
            <div className='info'>
                <p>contact: {prop.phone}</p>
                <p>Mail: {prop.email}</p>
            </div>

        </div>
    )
}
//in app.jsx function
/*
<Contact 
                img = '/cat1.webp'
                name ='Mr. Cater'
                phone = '9041872243'
                email = 'sample@mail.com'
            />
            <Contact 
                img = '/cat2.jpg'
                name = 'Mr. Paw'
                phone = '789534253'
                email = 'paw@mail.com'
            />
            <Contact 
                img = 'cat3.jpg'
                name = 'Ms. Pur'
                phone = '6789012345'
                email = 'purs@mail.com'
            />
*/