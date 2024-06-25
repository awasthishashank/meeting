"use client";
import MeetupList from "@/components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "148, Awas Vikas",
    description: "A first meet up",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "148, Civil Lines",
    description: "A second meet up",
  },
  {
    id: "m3",
    title: "A third  meetup",
    image: "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "bypass ,Lucknow",
    description: "A third meetup",
  },
];

function Home() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default Home;
