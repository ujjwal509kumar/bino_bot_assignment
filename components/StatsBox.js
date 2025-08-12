import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TrendingUp, Users, DollarSign, Activity, Star, Target } from "lucide-react";

// Icon mapping for common stat types
const iconMap = {
  trending: TrendingUp,
  users: Users,
  revenue: DollarSign,
  activity: Activity,
  rating: Star,
  target: Target,
};

export default function StatsBox({ stats, className, ...props }) {
  if (!stats || !Array.isArray(stats)) {
    return null;
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon ? iconMap[stat.icon] : null;
          
          return (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    {stat.change && (
                      <Badge 
                        variant={stat.change.startsWith('+') ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {stat.change}
                      </Badge>
                    )}
                  </div>
                  {IconComponent && (
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
                {stat.description && (
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {stat.description}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}