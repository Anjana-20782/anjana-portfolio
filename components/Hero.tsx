export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-4">
      <div className="w-24 h-24 rounded-full bg-gray-600 mb-4" />

     <p className="text-[color:var(--muted)] mb-6">
  Hi! I'm Anjana
</p>

      <h1 className="text-5xl md:text-6xl font-serif leading-tight">
  MERN Stack Developer
</h1>


      <p className="text-[color:var(--muted)] max-w-xl mt-6">
        I am a MERN Stack Developer, I develop full-stack web 
        applications using MongoDB, Express.js, React.js, and Node.js.
      </p>

      <div className="flex gap-4 mt-10">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full">
          Contact me →
        </button>

       <button className="border border-[color:var(--border)] px-6 py-3 rounded-full">
  My resume ⬇
</button>
      </div>
    </section>
  );
}
