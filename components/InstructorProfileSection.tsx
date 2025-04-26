import Image from "next/image";
import Link from "next/link";

// Replace with actual instructor details and image path
const instructor = {
  name: "Ms. Anya Sharma", // Fictional name
  title: "Lead Instructor & Founder of Krypto Gyan",
  description: `Anya Sharma, the founder of Krypto Gyan, launched the platform to demystify blockchain and cryptocurrency investing for everyone. She holds advanced degrees in Computer Science and Finance, coupled with over a decade of experience in fintech and crypto markets. Anya honed her expertise under leading blockchain researchers and developed a profound understanding of crypto trends, decentralized finance (DeFi), and NFT ecosystems.`,
  imageUrl: "/image2.png", // << CHANGE TO YOUR IMAGE PATH in /public
  // Example remote URL (remember to configure next.config.mjs)
  // imageUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?&fit=crop&q=80&w=400',
  altText: "Ms. Anya Sharma, Lead Instructor at Krypto Gyan",
  readMoreLink: "/about#instructor", // Example link
};

function InstructorProfileSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      {" "}
      {/* Outer section padding */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 items-stretch">
            {" "}
            {/* Use items-stretch */}
            {/* === Purple Content Area === */}
            {/* Spans more columns on medium screens */}
            <div className="md:col-span-3 lg:col-span-1 bg-purple-600 p-8 sm:p-12 flex flex-col justify-center relative">
              {/* Optional: Abstract decorative shapes (can be complex) */}
              {/* <div className="absolute -right-10 top-1/4 w-20 h-20 bg-purple-500/50 rounded-full filter blur-xl"></div> */}
              {/* <div className="absolute right-5 bottom-10 w-32 h-32 bg-indigo-500/40 rounded-full filter blur-2xl"></div> */}

              <div className="relative z-10">
                {" "}
                {/* Ensure text is above shapes */}
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  {instructor.name}
                </h2>
                <p className="mt-1 text-md font-medium text-purple-200">
                  {instructor.title}
                </p>
                <p className="mt-6 text-sm text-purple-100 leading-relaxed">
                  {instructor.description}
                </p>
                <Link
                  href={instructor.readMoreLink}
                  className="mt-6 inline-block text-sm font-semibold text-white hover:text-purple-100 transition-colors"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
            {/* === Image Area === */}
            {/* Spans fewer columns on medium screens */}
            {/* Using flex to center image, adjust padding/margins */}
            <div className="md:col-span-2 lg:col-span-1 relative flex items-center justify-center bg-purple-600 md:bg-white p-6 md:p-0">
              {/* Image Container */}
              <div className="relative w-full h-80 md:h-full max-w-xs md:max-w-none mx-auto md:mx-0">
                <Image
                  src={instructor.imageUrl}
                  alt={instructor.altText}
                  fill // Fills the container div
                  style={{ objectFit: "cover", objectPosition: "center" }} // Cover ensures it fills, adjust position if needed
                  // Optional: Use sizes for responsive optimization if needed
                  // sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 500px"
                  quality={80}
                />
              </div>
              {/* Optional: Create overlap effect - uncomment and adjust if needed */}
              {/* Add negative margin to pull image slightly over purple on md+ screens */}
              {/* className="... md:-ml-8 lg:-ml-12 relative z-20 ... " on the Image component */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstructorProfileSection;
