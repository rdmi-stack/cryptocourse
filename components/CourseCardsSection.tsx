import Link from "next/link"; // Import Link for navigation

// You might want to fetch course data dynamically later,
// but for now, we'll hardcode the content based on the previous design.

function CourseCardsSection() {
  // Array of course data (ideal for dynamic rendering later)
  const courses = [
    {
      slug: "blockchain-basics", // For URL generation
      title: "Introduction to Blockchain & Crypto",
      level: "Beginner Level",
      price: "₹1,499",
      description:
        "Understand blockchain technology, how cryptocurrencies work (Bitcoin, Ethereum), wallets, and basic security practices.",
      lessons: 12,
      duration: 4, // in hours
      rating: 4.8,
      gradient: "from-cyan-500 to-blue-600",
      badge: "Foundational",
      badgeColor: "bg-yellow-400 text-gray-900",
      // Heroicon: cube
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white/90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      ),
    },
    {
      slug: "defi-masterclass",
      title: "DeFi Masterclass",
      level: "Intermediate",
      price: "₹5,999",
      description:
        "Dive deep into Decentralized Finance. Explore DEXs, lending protocols, yield farming, staking, and risk management in DeFi.",
      lessons: 25,
      duration: 10,
      rating: 4.9,
      gradient: "from-purple-600 to-indigo-700",
      badge: "Popular",
      badgeColor: "bg-pink-500 text-white",
      // Heroicon: arrows-pointing-out
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white/90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
          />
        </svg>
      ),
    },
    {
      slug: "nft-fundamentals",
      title: "NFT Fundamentals",
      level: "Beginner",
      price: "₹2,499",
      description:
        "Learn what NFTs are, how they work, major marketplaces, how to mint, buy, sell, and evaluate NFT projects. Explore use cases.",
      lessons: 15,
      duration: 6,
      rating: 4.7,
      gradient: "from-rose-400 to-red-500",
      badge: null, // No badge for this one in the example
      badgeColor: "",
      // Heroicon: photo
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white/90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm16.5-1.5L12 12.75M2.25 15.75l12-12"
          />
        </svg>
      ),
    },
    {
      slug: "crypto-trading-strategies",
      title: "Crypto Trading Strategies",
      level: "Advanced",
      price: "₹7,999",
      description:
        "Master technical & fundamental analysis for crypto. Learn chart patterns, indicators, risk management, and develop profitable trading plans.",
      lessons: 30,
      duration: 18,
      rating: 4.8,
      gradient: "from-gray-700 to-gray-900",
      badge: "Advanced",
      badgeColor: "bg-orange-500 text-white",
      // Heroicon: presentation-chart-line
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white/90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-1.5m-1.5 0h-12.75M15 12H9m6 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="courses">
      {" "}
      {/* Added ID for linking */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Courses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start learning about Crypto and Blockchain today.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course) => (
            // Course Card using map
            <div
              key={course.slug}
              className={`relative rounded-xl shadow-lg overflow-hidden bg-gradient-to-br ${course.gradient} text-white flex flex-col min-h-[320px] transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl`}
            >
              {/* Badge */}
              {course.badge && (
                <div
                  className={`absolute top-0 right-0 ${course.badgeColor} text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-xl z-10`}
                >
                  {course.badge}
                </div>
              )}

              {/* Top Content Area */}
              <div className="p-6 pb-4 flex-grow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs text-white/80">
                      {course.level} | {course.price}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-white/95 font-light leading-relaxed mt-3">
                  {course.description}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="p-4 bg-black/15 mt-auto flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  {/* Lessons */}
                  <div
                    className="flex items-center space-x-1"
                    title={`${course.lessons} Lessons`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-white/80"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />{" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                      />{" "}
                    </svg>
                    <span className="font-medium text-white/90">
                      {course.lessons}
                    </span>
                  </div>
                  {/* Duration */}
                  <div
                    className="flex items-center space-x-1"
                    title={`${course.duration} Hours Video`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-white/80"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />{" "}
                    </svg>
                    <span className="font-medium text-white/90">
                      {course.duration}h
                    </span>
                  </div>
                  {/* Rating */}
                  <div
                    className="flex items-center space-x-1"
                    title={`${course.rating} Stars`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-yellow-400"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.597 2.79c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>
                    <span className="font-medium text-white/90">
                      {course.rating}
                    </span>
                  </div>
                </div>
                {/* Use next/link for the button */}
                <Link
                  href={`/courses/${course.slug}`} // Dynamic link based on slug
                  className="text-sm font-semibold opacity-90 hover:opacity-100 hover:underline transition-opacity"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseCardsSection;
