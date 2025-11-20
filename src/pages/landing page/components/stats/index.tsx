import { useEffect, useRef, useState } from "react";

interface StatCircle {
  percentage: number;
  label: string;
}

const stats: StatCircle[] = [
  { percentage: 67, label: "PROJECT DONE" },
  { percentage: 77, label: "HAPPY CLIENTS" },
  { percentage: 54, label: "COMPLETED CO." },
  { percentage: 73, label: "COUNTRY COVER" },
];

const AnimatedCircle = ({ percentage, label }: StatCircle) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > percentage) {
        current = percentage;
        clearInterval(interval);
      }
      setDisplayPercentage(current);
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, percentage]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset =
    circumference - (displayPercentage / 100) * circumference;

  return (
    <div ref={circleRef} className="flex flex-col items-center gap-6">
      <div className="relative w-32 h-32">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 120 120"
        >
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          {/* Animated progress circle - gradient stroke */}
          <defs>
            <linearGradient
              id={`gradient-${percentage}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#003d7a" />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke={`url(#gradient-${percentage})`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
        </svg>
        {/* Percentage text center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-orange-500">
            {displayPercentage}%
          </span>
        </div>
      </div>
      <p className="text-lg font-bold text-blue-900 text-center">{label}</p>
    </div>
  );
};

export function PricingStats() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-20 text-balance">
          GET AMAZING PRICES WITH US.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <AnimatedCircle
              key={stat.label}
              percentage={stat.percentage}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
