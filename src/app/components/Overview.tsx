import { MessageSquare, MessageCircle, TrendingUp, Clock } from 'lucide-react';

export function Overview() {
  const stats = [
    {
      label: 'Messages Replied',
      value: '28',
      change: '+12%',
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Comments Replied',
      value: '19',
      change: '+8%',
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Total Interactions',
      value: '47',
      change: '+15%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  const recentActivity = [
    { type: 'Comment Reply', user: 'Sarah Johnson', time: '2 minutes ago', status: 'completed' },
    { type: 'DM Sent', user: 'Michael Chen', time: '5 minutes ago', status: 'completed' },
    { type: 'Comment Reply', user: 'Emma Williams', time: '12 minutes ago', status: 'completed' },
    { type: 'DM Sent', user: 'James Brown', time: '18 minutes ago', status: 'completed' },
    { type: 'Comment Reply', user: 'Olivia Davis', time: '25 minutes ago', status: 'completed' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Overview</h2>
        <p className="text-neutral-600">Track your LinkedIn automation performance today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <p className="text-3xl font-semibold text-neutral-900 mb-1">{stat.value}</p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-neutral-200">
        <div className="p-6 border-b border-neutral-200">
          <h3 className="font-semibold text-neutral-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-neutral-200">
          {recentActivity.map((activity, index) => (
            <div key={index} className="p-6 flex items-center justify-between hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-neutral-600" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{activity.type}</p>
                  <p className="text-sm text-neutral-500">{activity.user}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-neutral-500">{activity.time}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 mt-1">
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
