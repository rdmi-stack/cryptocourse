// components/SupportStatsSection.tsx

"use client"; // Required for Framer Motion

import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Import motion and Variants type

// --- TypeScript Interfaces for Props ---
interface StatRow {
  channel: string;
  pendingStart: number;
  received: number;
  resolved: number;
  pendingEnd: number;
  avgResolutionHours: number | string; // Can be number or string like '~9.8'
  satisfactionPercent: number | string | null; // Allow number, string (for averages like '~91%'), or null
}

interface SupportStatsSectionProps {
  month: string;
  year: number;
  statsData: StatRow[];
  totalStats: StatRow;
}

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// --- Helper Function for Satisfaction Badges ---
const getSatisfactionBadge = (percent: number | string | null) => {
  let value: string | number = "N/A";
  let bgColor = "bg-gray-100 dark:bg-gray-700";
  let textColor = "text-gray-600 dark:text-gray-300";

  if (typeof percent === "string") {
    // Handle string averages like '~91%' or '91%'
    value = percent.includes("%") ? percent : `${percent}%`;
    // Basic color based on presence of '~' or value
    if (percent.includes("~")) {
      bgColor = "bg-yellow-100 dark:bg-yellow-900/30";
      textColor = "text-yellow-800 dark:text-yellow-300";
    } else {
      const numericValue = parseInt(percent.replace(/[^0-9]/g, ""), 10);
      if (!isNaN(numericValue)) {
        if (numericValue >= 90) {
          bgColor = "bg-green-100 dark:bg-green-900/30";
          textColor = "text-green-800 dark:text-green-300";
        } else if (numericValue >= 75) {
          bgColor = "bg-blue-100 dark:bg-blue-900/30";
          textColor = "text-blue-800 dark:text-blue-300";
        } else {
          bgColor = "bg-red-100 dark:bg-red-900/30";
          textColor = "text-red-800 dark:text-red-300";
        }
      }
    }
  } else if (typeof percent === "number") {
    value = `${percent}%`;
    if (percent >= 90) {
      bgColor = "bg-green-100 dark:bg-green-900/30";
      textColor = "text-green-800 dark:text-green-300";
    } else if (percent >= 75) {
      bgColor = "bg-blue-100 dark:bg-blue-900/30";
      textColor = "text-blue-800 dark:text-blue-300";
    } else {
      bgColor = "bg-red-100 dark:bg-red-900/30";
      textColor = "text-red-800 dark:text-red-300";
    }
  }

  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}
    >
      {value}
    </span>
  );
};

// --- Main Component ---
function SupportStatsSection({
  month,
  year,
  statsData,
  totalStats,
}: SupportStatsSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Support Performance Overview
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Monthly summary of student interactions and support efficiency.
          </p>
          <h3 className="mt-5 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Report for{" "}
            <span className="text-purple-600 dark:text-purple-400">
              {month}, {year}
            </span>
          </h3>
        </div>

        {/* Responsive Container: Shows Cards on Mobile, Table on Larger Screens */}
        <div>
          {/* Card Layout (Visible on Small Screens) */}
          <motion.div
            className="space-y-6 md:hidden" // Hidden on medium screens and up
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {statsData.map((row) => (
              <motion.div
                key={row.channel}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
                variants={itemVariants}
              >
                <div className="px-4 py-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="text-base font-semibold text-gray-800 dark:text-white">
                    {row.channel}
                  </h4>
                </div>
                <div className="px-4 py-4 sm:px-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">
                      Satisfaction:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {getSatisfactionBadge(row.satisfactionPercent)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">
                      Avg. Resolution:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {row.avgResolutionHours} hrs
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-gray-500 dark:text-gray-400">
                      Received:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {row.received}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">
                      Resolved:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {row.resolved}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">
                      Pending (Start/End):
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {row.pendingStart} / {row.pendingEnd}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Total Stats Card */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-700/50 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 overflow-hidden"
              variants={itemVariants}
            >
              <div className="px-4 py-4 sm:px-6 bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
                <h4 className="text-base font-semibold text-gray-800 dark:text-white">
                  {totalStats.channel}
                </h4>
              </div>
              <div className="px-4 py-4 sm:px-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-300">
                    Avg. Satisfaction:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {getSatisfactionBadge(totalStats.satisfactionPercent)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-300">
                    Overall Avg. Resolution:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {totalStats.avgResolutionHours} hrs
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-gray-500 dark:text-gray-300">
                    Total Received:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {totalStats.received}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-300">
                    Total Resolved:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {totalStats.resolved}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-300">
                    Total Pending (Start/End):
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {totalStats.pendingStart} / {totalStats.pendingEnd}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Table Layout (Hidden on Small Screens) */}
          <motion.div
            className="hidden md:block shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800"
            variants={containerVariants} // Apply variants to the table container as well
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700/50">
                  <tr>
                    {/* Adjusted padding and text alignment */}
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Channel
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"
                    >
                      Pending (Start)
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Received
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Resolved
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"
                    >
                      Pending (End)
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"
                    >
                      Avg. Res. (Hrs)
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Satisfaction*
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {statsData.map((row) => (
                    <motion.tr
                      key={row.channel}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors duration-150"
                      variants={itemVariants} // Apply item variants to each row
                    >
                      <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {row.channel}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center">
                        {row.pendingStart}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center">
                        {row.received}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center">
                        {row.resolved}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center">
                        {row.pendingEnd}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 text-center">
                        {row.avgResolutionHours}
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-sm text-center">
                        {getSatisfactionBadge(row.satisfactionPercent)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
                {/* Footer / Total Row */}
                <tfoot className="bg-gray-100 dark:bg-gray-700/50 border-t-2 border-gray-300 dark:border-gray-600">
                  <motion.tr variants={itemVariants}>
                    {" "}
                    {/* Also animate the total row */}
                    <td className="px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">
                      {totalStats.channel}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-200 text-center">
                      {totalStats.pendingStart}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-200 text-center">
                      {totalStats.received}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-200 text-center">
                      {totalStats.resolved}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-200 text-center">
                      {totalStats.pendingEnd}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-200 text-center">
                      {totalStats.avgResolutionHours}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm font-semibold text-center">
                      {getSatisfactionBadge(totalStats.satisfactionPercent)}
                    </td>
                  </motion.tr>
                </tfoot>
              </table>
            </div>
            {/* Footnotes */}
            <div className="px-5 py-3 bg-gray-50 dark:bg-gray-700/30 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
              <p>
                * Satisfaction measured via post-resolution surveys or channel
                feedback (where applicable).
              </p>
              {/* <p>Resolution time measured in business hours from receipt to resolution.</p> */}
            </div>
          </motion.div>
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <Link
            href="/reports/support" // Adjust link as needed
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-950 transition-colors"
          >
            View Detailed Reports
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SupportStatsSection;
