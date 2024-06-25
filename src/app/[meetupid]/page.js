import MeetupDetail from "@/components/meetups/MeetupDetail";

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

export async function generateStaticParams() {
  return DUMMY_MEETUPS.map((meetup) => ({
    meetupId: meetup.id,
  }));
}

export default function MeetupDetails({ params }) {
  const { meetupId } = params;
  const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);

  if (!meetup) {
    return <p>Meetup not found</p>;
  }

  return (
    <MeetupDetail
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  );
}
