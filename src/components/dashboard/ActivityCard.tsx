
import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  action: string;
  target: string;
  time: string;
}

interface ActivityCardProps {
  activities: ActivityItem[];
  className?: string;
}

const ActivityCard = ({ activities, className }: ActivityCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg border shadow-sm p-5", className)}>
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium">
              {activity.user.avatar ? (
                <img 
                  src={activity.user.avatar} 
                  alt={activity.user.name} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                activity.user.name.slice(0, 2).toUpperCase()
              )}
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span>{" "}
                {activity.action}{" "}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;
