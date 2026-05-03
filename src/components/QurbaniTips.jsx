// src/components/QurbaniTips.jsx
const QurbaniTips = async () => {
  const response = await fetch(
    "https://qurbani-hat-iota.vercel.app/trips.json",
  );
  const data = await response.json();
  
  
    

  return (
    <section className="mt-12 w-10/12 mx-auto">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#97C459]">
          Qurbani <span className="text-[#97C459]">Tips</span>
        </h2>
        <p className="text-xs text-[#639922] mt-1">
          সঠিক পশু বেছে নেওয়ার গাইড
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {data.tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-[#1a3a0a] border border-[#3B6D11] rounded-xl p-5 hover:border-[#97C459] transition"
          >
            <div className="w-10 h-10 bg-[#2d5a14] rounded-lg flex items-center justify-center text-xl mb-3">
              {tip.icon}
            </div>
            <h3 className="text-sm font-semibold text-[#EAF3DE] mb-2">
              {tip.title}
            </h3>
            <p className="text-xs text-[#639922] leading-relaxed">
              {tip.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default QurbaniTips;