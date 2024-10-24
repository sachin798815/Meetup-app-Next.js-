import MeetupList from '../components/meetups/MeetupList';
const Dummy_Meetups=[
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg',
        address:'Hno. 5',
        description:'hey, the meetup\'s here'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iS_rzHrCVZlBn6vhO_0xWc3hypxY-u0-XQ&s',
        address:'Hno. 6',
        description:'hey, the meetup\'s here'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigoNjTIhmtBKNtOX1lD5vvcelYkFECjN4xQ&s',
        address:'Hno. 7',
        description:'hey, the meetup\'s here'
    },
]

function HomePage(props){
    return<>
    <MeetupList meetups={props.meetups}/>
    </>
}

export async function getStaticProps(){
    return{
        props:{
            meetups: Dummy_Meetups
        },
        revalidate:10
    }
}
export default HomePage;