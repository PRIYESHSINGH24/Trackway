import React from "react";

const features = [
  { icon: "📄", title: "Analyze Transcripts" },
  { icon: "📑", title: "Compare Agreements" },
  { icon: "👤", title: "Company Profiles" },
  { icon: "📝", title: "Draft Client Letter" },
  { icon: "⭐", title: "Deal Points" },
  { icon: "🔍", title: "Lease Extraction" },
  { icon: "📦", title: "Contract Storage" },
  { icon: "🗂️", title: "Organize Files" },
  { icon: "🔒", title: "Secure Sharing" },
  { icon: "📊", title: "Data Insights" },
  { icon: "🧑‍💼", title: "Client Management" },
  { icon: "⚡", title: "Quick Export" },
];

const MarqueeRow = ({ items, reverse = false, small = false }: { items: typeof features; reverse?: boolean; small?: boolean }) => {
  const cardClasses = small
    ? "bg-white rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-sm min-h-[80px] min-w-[120px] w-28 h-28 flex-shrink-0"
    : "bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm min-h-[120px] min-w-[160px] md:min-h-[180px] md:min-w-[220px] w-40 h-40 md:w-56 md:h-56 flex-shrink-0";

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} whitespace-nowrap min-w-max`}
      >
        {[...items, ...items, ...items, ...items, ...items, ...items].map((feature, idx) => (
          <div key={feature.title + idx} className={cardClasses}>
            <span className={small ? "text-black text-2xl mb-2" : "text-black text-4xl mb-4"}>{feature.icon}</span>
            <span className={small ? "text-black text-base font-semibold" : "text-black text-lg font-semibold"}>
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const MarqueeGrid = () => (
  <div className="space-y-16">
    <MarqueeRow items={features} reverse />
    <MarqueeRow items={features.slice(0, 4)} />
  </div>
);

export default MarqueeGrid; 