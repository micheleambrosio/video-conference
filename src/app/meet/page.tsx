import MeetHeader from "@Components/MeetHeader";
import CallControls from "@Components/CallControls";

export default function Meet() {
  return (
    <>
      <main
        className="grid grid-cols-4 gap-4 h-screen p-6"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <section className="col-span-4">
          <MeetHeader title="Project Reporting - Week 1" ownerName="George" />
        </section>
        <section className="bg-white col-span-3 p-5 rounded-3xl">
          Área dos videos
        </section>
        <section className="bg-white p-5 rounded-3xl">Área do chat</section>
        <aside className="bg-white col-span-4 p-5 rounded-full">
          <CallControls />
        </aside>
      </main>
    </>
  );
}

