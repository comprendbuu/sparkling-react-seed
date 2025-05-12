
import { BarChart2, ShoppingCart, Users, CreditCard } from "lucide-react";

export const statCards = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: {
      value: "20.1%",
      isPositive: true,
    },
    icon: <CreditCard className="text-blue-600" />,
  },
  {
    title: "New Customers",
    value: "1,205",
    change: {
      value: "15%",
      isPositive: true,
    },
    icon: <Users className="text-green-600" />,
  },
  {
    title: "Total Orders",
    value: "12,543",
    change: {
      value: "8.2%",
      isPositive: true,
    },
    icon: <ShoppingCart className="text-purple-600" />,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: {
      value: "0.8%",
      isPositive: false,
    },
    icon: <BarChart2 className="text-orange-600" />,
  },
];

export const recentActivities = [
  {
    id: "1",
    user: {
      name: "John Doe",
    },
    action: "created a new",
    target: "invoice #1234",
    time: "2 hours ago",
  },
  {
    id: "2",
    user: {
      name: "Sarah Williams",
    },
    action: "updated the",
    target: "project settings",
    time: "5 hours ago",
  },
  {
    id: "3",
    user: {
      name: "Alex Johnson",
    },
    action: "completed the",
    target: "quarterly review",
    time: "1 day ago",
  },
  {
    id: "4",
    user: {
      name: "Emily Davis",
    },
    action: "added a new",
    target: "team member",
    time: "2 days ago",
  },
  {
    id: "5",
    user: {
      name: "Michael Smith",
    },
    action: "deleted a",
    target: "product from catalog",
    time: "3 days ago",
  },
];
