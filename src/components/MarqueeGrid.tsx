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

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: typeof features;
  reverse?: boolean;
}) => {
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardClasses =
    "bg-[#ffffff] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 min-h-[120px] min-w-[160px] md:min-h-[180px] md:min-w-[220px] w-40 h-40 md:w-56 md:h-56 flex-shrink-0";

    const handleBlockSelect = (
      index: number,
      event: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLTextAreaElement>
    ) => {
      const container = containerRef.current;
      const marquee = container?.firstElementChild as HTMLDivElement;
    
      if (container && marquee) {
        const rect = container.getBoundingClientRect();
        const blockRect = (event.target as HTMLElement).getBoundingClientRect();
        const relativePosition = blockRect.left - rect.left;
    
        // STOP animation instantly
        marquee.style.animation = "none";
    
        // Get current transformX from animation frame
        const computedStyle = getComputedStyle(marquee);
        const matrix = new WebKitCSSMatrix(computedStyle.transform);
        const currentTranslateX = matrix.m41; // x-offset
    
        // Apply current position first (to avoid jump)
        marquee.style.transform = `translateX(${currentTranslateX}px)`;
    
        // Force reflow to make sure browser registers the change
        marquee.offsetHeight;
    
        // Then transition smoothly to new position
        marquee.style.transition = "transform 0.5s ease-out";
        marquee.style.transform = `translateX(-${relativePosition}px)`;
    
        setActiveBlock(index);
      }
    };

    
  const handleBlur = () => {
    setActiveBlock(null);
  };

  return (
    <div className="overflow-hidden w-full" ref={containerRef}>
      <div
        className={`flex gap-4 whitespace-nowrap min-w-max ${
          activeBlock === null
            ? reverse
              ? "animate-marquee-reverse"
              : "animate-marquee"
            : ""
        }`}
       
      >
        {[...items, ...items, ...items, ...items, ...items, ...items].map(
          (feature, idx) => (
            <div
              key={feature.title + idx}
              className={cardClasses}
              style={{
                position: activeBlock === idx ? "relative" : "static",
                zIndex: activeBlock === idx ? 10 : 1,
              }}
              onClick={(e) => handleBlockSelect(idx, e)}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-black text-2xl">{feature.icon}</span>
                <span className="text-black text-base font-semibold">
                  {feature.title}
                </span>
              </div>
              <textarea
                className="w-full h-20 bg-white rounded-md shadow-sm p-2 text-black text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#666]"
                placeholder="Type here..."
                onFocus={(e) => handleBlockSelect(idx, e)}
                onBlur={handleBlur}
              />
            </div>
          )
        )}
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
