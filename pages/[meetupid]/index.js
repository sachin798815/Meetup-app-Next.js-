import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails({ meetupData }) {
  if (!meetupData) return <p>Meetup not found!</p>;

  return (
    <>
      <img
        src={meetupData.image}
        alt={meetupData.title}
        style={{ width: "100px" }}
      />
      <h1>{meetupData.title}</h1>
      <address>{meetupData.address}</address>
      <p>{meetupData.description}</p>
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@cluster0.qnlqt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupid: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@cluster0.qnlqt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // Convert meetupId to ObjectId for MongoDB query
  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
  client.close();

  // Convert the _id field to a string to make it serializable
  if (selectedMeetup) {
    selectedMeetup._id = selectedMeetup._id.toString();
  }

  return {
    props: {
      meetupData: selectedMeetup || {}, // Adding fallback for empty data
    },
  };
}

export default MeetupDetails;
