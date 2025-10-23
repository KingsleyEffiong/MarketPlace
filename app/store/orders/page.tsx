"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PackageCheck, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";

const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    product: "Premium Wireless Headphones",
    quantity: 1,
    total: "$254.99",
    status: "pending",
    date: "2025-01-20",
  },
  {
    id: "#1002",
    customer: "Jane Smith",
    product: "Smartphone Pro Max",
    quantity: 1,
    total: "$999.99",
    status: "shipped",
    date: "2025-01-19",
  },
  {
    id: "#1003",
    customer: "Mike Johnson",
    product: "Premium Wireless Headphones",
    quantity: 2,
    total: "$509.98",
    status: "delivered",
    date: "2025-01-18",
  },
];

function getStatusBadge(status: string) {
  switch (status) {
    case "pending":
      return (
        <Badge className="flex items-center gap-1 bg-red-100 text-red-600 border border-red-300">
          <Clock className="w-4 h-4" /> Pending
        </Badge>
      );
    case "shipped":
      return (
        <Badge className="flex items-center gap-1 bg-blue-100 text-blue-600 border border-blue-300">
          <Truck className="w-4 h-4" /> Shipped
        </Badge>
      );
    case "delivered":
      return (
        <Badge className="flex items-center gap-1 bg-green-100 text-green-600 border border-green-300">
          <PackageCheck className="w-4 h-4" /> Delivered
        </Badge>
      );
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
}

export default function Page() {
  return (
    <div className="py-8 max-w-5xl mx-auto text-gray-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <Card className="w-full bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="border-b border-gray-100 pb-4 flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Recent Orders
              </CardTitle>
              <p className="text-sm text-gray-500">
                Manage and track your product orders
              </p>
            </div>
          </CardHeader>

          <CardContent className="p-6 overflow-x-auto">
            <motion.table
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full text-sm text-left border-collapse"
            >
              <thead>
                <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold">Order ID</th>
                  <th className="px-4 py-3 font-semibold">Customer</th>
                  <th className="px-4 py-3 font-semibold">Product</th>
                  <th className="px-4 py-3 font-semibold">Quantity</th>
                  <th className="px-4 py-3 font-semibold">Total</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{order.product}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {order.quantity}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{order.total}</td>
                    <td className="px-4 py-3">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{order.date}</td>
                    <td className="px-4 py-3 text-right">
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Update Status
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
