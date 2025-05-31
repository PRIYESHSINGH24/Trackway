import React, { useState, useRef } from "react";

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

const MarqueeRow = ({ items, reverse = false }: { items: typeof features; reverse?: boolean }) => {
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const [stopPosition, setStopPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardClasses = "bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm min-h-[120px] min-w-[160px] md:min-h-[180px] md:min-w-[220px] w-40 h-40 md:w-56 md:h-56 flex-shrink-0 border border-[#333]";

  const handleFocus = (index: number, event: React.FocusEvent<HTMLTextAreaElement>) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const blockRect = event.currentTarget.getBoundingClientRect();
      const relativePosition = blockRect.left - rect.left;
      setStopPosition(relativePosition);
      setActiveBlock(index);
    }
  };

  const handleBlur = () => {
    setActiveBlock(null);
  };

  return (
    <div className="overflow-hidden w-full" ref={containerRef}>
      <div
        className={`flex gap-4 whitespace-nowrap min-w-max ${activeBlock === null ? (reverse ? "animate-marquee-reverse" : "animate-marquee") : ""}`}
        style={{
          transform: activeBlock !== null ? `translateX(-${stopPosition}px)` : undefined,
          transition: activeBlock !== null ? 'transform 0.3s ease-out' : undefined,
          animationPlayState: activeBlock !== null ? 'paused' : 'running'
        }}
      >
        {[...items, ...items, ...items, ...items, ...items, ...items].map((feature, idx) => (
          <div 
            key={feature.title + idx} 
            className={cardClasses}
            style={{ 
              position: activeBlock === idx ? 'relative' : 'static',
              zIndex: activeBlock === idx ? 10 : 1
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white text-2xl">{feature.icon}</span>
              <span className="text-white text-base font-semibold">
                {feature.title}
              </span>
            </div>
            <textarea 
              className="w-full h-20 bg-white rounded-md border border-[#444] p-2 text-black text-sm resize-none focus:outline-none focus:border-[#666]"
              placeholder="Type here..."
              onFocus={(e) => handleFocus(idx, e)}
              onBlur={handleBlur}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MarqueeGrid = () => (
  <div>
    <MarqueeRow items={features} reverse />
  </div>
);

export default MarqueeGrid; 