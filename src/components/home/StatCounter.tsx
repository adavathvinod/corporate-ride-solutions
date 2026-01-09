import { LucideIcon } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
}

const StatCounter = ({ icon: Icon, value, label, suffix = "" }: StatCounterProps) => {
  const { count, elementRef } = useCountUp({ end: value, duration: 2000 });

  return (
    <div ref={elementRef} className="text-center">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};

export default StatCounter;
