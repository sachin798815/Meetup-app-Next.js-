function MeetupDetails({ meetupData }) {
    return (
      <>
        <p>
          <img
            src={meetupData.image}
            alt={meetupData.title}
            style={{ width: "100px" }}
          />
          <h1>{meetupData.title}</h1>
          <address>{meetupData.adress}</address>
          <p>{meetupData.description}</p>
        </p>
      </>
    );
  }
  
  export async function getStaticPaths() {
    return {
      fallback: false,
      paths: [
        { params: { meetupid: 'm1' } },
        { params: { meetupid: 'm2' } },
        { params: { meetupid: 'm3' } },
      ],
    };
  }
  
  export async function getStaticProps(context) {
    const meetupId = context.params.meetupid;
  
    return {
      props: {
        meetupData: {
          image: "https://png.pngtree.com/background/20230412/original/pngtree-architectural-modern-high-rise-buildings-background-picture-image_2399417.jpg",
          id: meetupId,
          title: "First meetup",
          adress: "Hno. 4",
          description: "hey there, welcome",
        },
      },
      revalidate: 10,
    };
  }
  
  export default MeetupDetails;
  