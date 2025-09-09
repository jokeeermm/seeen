import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  color: string;
}

export function StatsCard({ title, value, change, changeType, icon: Icon, color }: StatsCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            <div className="flex items-center mt-2">
              <Badge 
                variant={changeType === 'positive' ? 'default' : 'destructive'}
                className="text-xs"
              >
                {change}
              </Badge>
              <span className="text-xs text-slate-500 mr-2">من الشهر الماضي</span>
            </div>
          </div>
          <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}