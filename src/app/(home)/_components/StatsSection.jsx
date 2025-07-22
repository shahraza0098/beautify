// components/StatsSection.jsx

import { Users, CalendarDays, Building2, Clock } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-indigo-500" />,
    value: "1+M",
    label: "New Users",
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-green-500" />,
    value: "2+M",
    label: "Meeting Schedule",
  },
  {
    icon: <Building2 className="h-8 w-8 text-red-500" />,
    value: "200+",
    label: "Trusted businesses",
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    value: "40%",
    label: "Save Time",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg bg-indigo-50/50 p-6">
              <div className="flex justify-center">{stat.icon}</div>
              <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}