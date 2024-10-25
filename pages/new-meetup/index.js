import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
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
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
export default NewMeetupPage; 
