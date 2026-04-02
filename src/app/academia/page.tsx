export default function AcademiaPage() {
  return (
    <main className="min-h-screen pt-32 px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-6">
        Bieneq Academy
      </h1>
      <p className="text-white/60 max-w-2xl text-lg mb-12">
        La élite en educación podológica equina.
      </p>
      
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((item) => (
          <div key={item} className="h-[400px] rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-end p-8 text-left bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl font-bold text-white">Módulo {item}</h3>
            <p className="text-white/60 mt-2">Próximamente disponible.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
