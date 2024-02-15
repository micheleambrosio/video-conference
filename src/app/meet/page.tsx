export default function Meet() {
  return (
    <main className="grid grid-cols-4 grid-rows-[1fr,80px] gap-4 h-screen p-6">
      <section className="col-span-3 bg-gray-200 p-5">Área dos videos</section>
      <section className="bg-gray-200 p-5">Área do chat</section>
      <aside className="col-span-4 bg-gray-200 p-5">
        Área controle dos botões
      </aside>
    </main>
  );
}
