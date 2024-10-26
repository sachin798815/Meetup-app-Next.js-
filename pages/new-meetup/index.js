import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    const router=useRouter();
      const response = await fetch("/api/new-meetup", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(enteredMeetupData),
        });
        const data = await response.json();
        console.log(data);
        router.push('/');
  }
  return (
    <>
    <Head>
      <title>Add a meetup</title>
      <meta
      name="description"
      content="Add meetup info here"
      >
      </meta>
    </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
export default NewMeetupPage; 
