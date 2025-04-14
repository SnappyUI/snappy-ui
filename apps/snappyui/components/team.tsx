import React from "react";

function Team() {
  return (
    <section className="py-16 bg-white dark:bg-[#050505] text-center">
      <h2 className="text-3xl font-bold text-center mb-12 text-snappy-blue">Curated By</h2>

      <div className="flex justify-center">
        <div className="flex overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src="/lovable-uploads/a6037c22-affd-477e-82fb-a651c31e79ef.png"
            alt="Team members"
            className="w-auto h-[80px] mx-auto hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
