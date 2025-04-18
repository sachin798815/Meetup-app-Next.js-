import MeetupList from "../components/meetups/MeetupList";
import MeetupSummary from "../components/meetups/MeetupSummary";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
    {/* import this head and use it here, this is used to add SEO to the app, title is html title, meta also. */}
    <Head>
      <title>Meetups</title>
      <meta
      name="description"
      content="Best meetups in your city"
      >
      </meta>
    </Head>
      <MeetupList meetups={props.meetups} />
      <MeetupSummary/>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@cluster0.qnlqt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup=>({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      }))
    },
    revalidate: 10,
  };
}
export default HomePage;
