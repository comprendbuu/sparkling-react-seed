
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, change, icon, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg border shadow-sm transition-all hover:shadow-md", 
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {change && (
            <div className="flex items-center mt-1">
              <span 
                className={cn(
                  "text-xs font-medium",
                  change.isPositive ? "text-green-600" : "text-red-600"
                )}
              >
                {change.isPositive ? "+" : ""}{change.value}
              </span>
            </div>
          )}
        </div>
        <div className="p-2 bg-slate-100 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
