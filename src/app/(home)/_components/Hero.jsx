// components/Hero.jsx

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Effortlessly organize
              <br />
              your <span className="text-indigo-600">schedule</span>
            </h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl">
              Utilize digital calendars or scheduling apps to keep track of your
              appointments, deadlines, and events. These tools often offer
              reminders and can sync across multiple devices, ensuring you stay
              on top of your schedule.
            </p>
            <div className="mx-auto mt-4">
              <Button size="lg">Get started</Button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 flex justify-center">
             {/* Floating avatar images - positioned relative to this container */}
            {/* <Image
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="Avatar 1"
                width={64}
                height={64}
                className="rounded-full object-cover absolute top-0 left-[15%] shadow-lg"
            />
            <Image
                src="https://i.pravatar.cc/150?u=a042581f4e29026705d"
                alt="Avatar 2"
                width={56}
                height={56}
                className="rounded-full object-cover absolute top-[20%] right-[10%] shadow-lg"
            />
             <Image
                src="https://i.pravatar.cc/150?u=a042581f4e29026706d"
                alt="Avatar 3"
                width={48}
                height={48}
                className="rounded-full object-cover absolute bottom-[25%] right-[20%] shadow-lg"
            /> */}
            <Image
              src="/man_book_herosec.svg" // Make sure this path is correct
              alt="Hero Illustration"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}





