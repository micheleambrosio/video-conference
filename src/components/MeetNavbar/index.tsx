interface Props {
  title: string;
  ownerName: string;
}

export default function MeetNavbar({ title, ownerName }: Props) {
  return (
    <nav className="bg-white m-6 mb-0 p-5 rounded-full flex gap-6 items-center">
      <button className="bg-gray-100 size-20 rounded-full">{"<"}</button>
      <div>
        <h1 className="text-2xl">{title}</h1>
        <p>{ownerName}'s Meeting Room</p>
      </div>
    </nav>
  );
}
