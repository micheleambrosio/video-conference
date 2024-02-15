import MeetNavbar from "@/components/MeetNavbar";

export default function Meet() {
  return (
    <>
      <MeetNavbar title="Project Reporting - Week 1" ownerName="George" />
      <main className="grid grid-cols-4 grid-rows-[1fr,80px] gap-4 h-screen p-6">
        <section className="bg-white col-span-3 p-5 rounded-3xl">
          Área dos videos
        </section>
        <section className="bg-white p-5 rounded-3xl">Área do chat</section>
        <aside className="bg-white col-span-4 p-5 rounded-full">
          Área controle dos botões
        </aside>
      </main>
    </>
  );
}
