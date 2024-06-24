import Layout from "@/components/Layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_Meetups =  [
  {
    id:"m1",
    title: "A first meetup",
    image :"https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address:" 148,Awas Vikas",
    description : "A first meet up ",
  }, 

  {
    id:"m2",
    title: "A second meetup",
    image :"https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address:" 148, Civil Lines",
    description : "A second  meet up ",
  }
]

export default function Home() {
  return (
    <MeetupList meetups = { DUMMY_Meetups }/>
    
  )
}
