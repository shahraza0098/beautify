// components/Features.jsx

import Image from 'next/image';
import Link from 'next/link';

// Reusable component for each feature block
function FeatureBlock({ title, description, imageUrl, imageAlt, reverse = false }) {
  const direction = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${direction} items-center gap-12 lg:gap-24`}>
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-gray-600">
          {description}
        </p>
        <Link href="#">
          <span className="inline-block mt-6 rounded-md px-4 py-2 text-sm font-semibold text-indigo-600 bg-indigo-200 hover:bg-indigo-50 transition-colors">
            Learn more
          </span>
        </Link>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 relative">
         {/* Decorative dot pattern */}
        <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8080ff] to-[#c2b2ff] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={400}
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
}


// Main component that uses the FeatureBlock
export function Features() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        <FeatureBlock
          title="Smart Appointments for Sharp Looks"
          description="Book haircuts, facials, and grooming services in seconds — no waiting, no calls."
          imageUrl="/schedule_icon.svg" 
          imageAlt="Illustration of smart scheduling"
        />
        <FeatureBlock
          title="Book on the Go"
          description="Let us take the hassle out of your grooming routine."
          imageUrl="/Enthusiastic-pana.svg" 
          imageAlt="Illustration of sharing a schedule"
          reverse={true} // This reverses the layout for the second block
        />
      </div>
    </section>
  );
}