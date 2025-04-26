import Link from "next/link";

// Define an interface/type for the data rows if using TypeScript
// interface StatRow {
//   channel: string;
//   pendingStart: number;
//   received: number;
//   resolved: number;
//   pendingEnd: number;
//   avgResolutionHours: number | string; // Can be number or string like '~9.8'
//   satisfactionPercent: number | null; // Use null for N/A
// }

// Define props for the component
// interface SupportStatsSectionProps {
//   month: string;
//   year: number;
//   statsData: StatRow[];
//   totalStats: StatRow; // Or calculate totals within the component
// }

// Example data structure (can be passed as props)
const exampleStatsData = [
  {
    channel: "Discord Support Channel",
    pendingStart: 8,
    received: 150,
    resolved: 145,
    pendingEnd: 13,
    avgResolutionHours: 4.2,
    satisfactionPercent: 90,
  },
  {
    channel: "Email Support",
    pendingStart: 3,
    received: 60,
    resolved: 58,
    pendingEnd: 5,
    avgResolutionHours: 8.0,
    satisfactionPercent: 95,
  },
  // Add more rows if needed
];

const exampleTotalStats = {
  channel: "Grand Total",
  pendingStart: 11, // Sum of pendingStart
  received: 210, // Sum of received
  resolved: 203, // Sum of resolved
  pendingEnd: 18, // Sum of pendingEnd
  avgResolutionHours: "~5.5", // Calculated average
  satisfactionPercent: "~91", // Calculated average
};

// Component using example data directly (can be modified to accept props)
function SupportStatsSection({
  month = "[Insert Month]", // Default values if props not provided
  year = "[Year]",
  statsData = exampleStatsData,
  totalStats = exampleTotalStats,
}) // Or using props: SupportStatsSection({ month, year, statsData, totalStats }: SupportStatsSectionProps) {
{
  const getSatisfactionBadge = (percent) => {
    if (percent === null || typeof percent === "string") {
      return (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
          {typeof percent === "string" ? percent : "N/A"}
        </span>
      );
    }
    if (percent >= 90) {
      return (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {percent}%
        </span>
      );
    }
    if (percent >= 75) {
      return (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
          {percent}%
        </span>
      );
    }
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        {percent}%
      </span>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titles */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Student Support & Feedback Summary
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Monthly overview of student interactions for{" "}
            <span className="font-semibold text-purple-700">Krypto Gyan</span>{" "}
            courses.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-slate-800">
            Data for the month ending{" "}
            <span className="text-purple-700">
              {month}, {year}
            </span>
          </h3>
        </div>

        {/* Enhanced Table Section */}
        <div className="shadow-xl rounded-xl border border-slate-200 overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-100 border-b-2 border-slate-300">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider"
                  >
                    Interaction Channel
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap"
                  >
                    Pending (Start)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider"
                  >
                    Received
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider"
                  >
                    Resolved
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap"
                  >
                    Pending (End)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap"
                  >
                    Avg. Resolution (Hours)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap"
                  >
                    Satisfaction*
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {statsData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-purple-50/50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800 border-b border-slate-200">
                      {row.channel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center border-b border-slate-200">
                      {row.pendingStart}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center border-b border-slate-200">
                      {row.received}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center border-b border-slate-200">
                      {row.resolved}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center border-b border-slate-200">
                      {row.pendingEnd}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center border-b border-slate-200">
                      {row.avgResolutionHours}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center border-b border-slate-200">
                      {getSatisfactionBadge(row.satisfactionPercent)}
                    </td>
                  </tr>
                ))}
                {/* Grand Total Row */}
                <tr className="bg-slate-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                    {totalStats.channel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-center">
                    {totalStats.pendingStart}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-center">
                    {totalStats.received}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-center">
                    {totalStats.resolved}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-center">
                    {totalStats.pendingEnd}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-center">
                    {totalStats.avgResolutionHours}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-center">
                    {getSatisfactionBadge(totalStats.satisfactionPercent)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Footnotes */}
          <div className="px-6 py-3 bg-slate-50 text-xs text-slate-500 border-t border-slate-200">
            <p>
              * Satisfaction measured via post-resolution surveys or channel
              feedback (where applicable).
            </p>
            <p>
              Resolution time measured in business hours from receipt to
              resolution.
            </p>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-10 text-center">
          <Link
            href="/reports/support" // Example link to detailed reports page
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          >
            View Detailed Reports
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SupportStatsSection;
