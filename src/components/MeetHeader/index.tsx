import { GoChevronLeft } from "react-icons/go";

interface Props {
  title: string;
  ownerName: string;
}

const MeetHeader: React.FC<Props> = ({ title, ownerName }) => {
  return (
    <header className="bg-white p-5 rounded-full flex gap-6 items-center">
      <button className="bg-gray-100 size-20 rounded-full flex justify-center items-center">
        <GoChevronLeft size={24} />
      </button>
      <div>
        <h1 className="text-2xl">{title}</h1>
        <p>{ownerName}&apos;s Meeting Room</p>
      </div>
    </header>
  );
};

export default MeetHeader;

