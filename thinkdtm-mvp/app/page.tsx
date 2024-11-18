import { RegisterForm } from "@/components/global/consult-us";
import Navbar from "@/components/global/navbar";
import { TextGenerateEffect } from "@/components/global/text-generate-effect";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  const words = `From one Dreamer to another, we believe: "There is no such thing as a small idea!"`;
  const words2 = `From one Dreamer to another, we believe,`;
  const words3 = `"There is no such thing as a small idea!"`;

  return (
    <main className="">
      <Navbar />
      <section
        className="h-screen w-full bg-neutral-950 rounded-md 
        !overflow-visible relative flex flex-col items-center antialiased"
      >
        <div
          className="absolute inset-0 h-full w-full items-center px-5
           py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#225_100%)]"
        ></div>
        <div className="my-32 text-center z-10">
          <TextGenerateEffect duration={2} filter={false} words={words2} />
          <TextGenerateEffect
            className="italic"
            duration={2}
            filter={false}
            words={words3}
          />
          <div className="flex justify-center mt-12 mx-32 md:text-5xl bg-clip-text text-zinc-500">
            <div className="text-md">
              We at {"ThinkDTM"} believe that it's not the idea, but the
              dreamers, their passion and execution that makes a business
              successful. So you do what you do best, as we know technology,
              marketing, and execution!
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x gap-8 px-4">
          {/* Product Development As-A-Service */}
          <div className="space-y-4 text-center ">
            <div className="flex items-center justify-center">
              <Image
                className="center"
                src="/image-p.png"
                alt="Product Development As-A-Service"
                width={250}
                height={300}
              />
            </div>

            <div className="font-bold text-xl">
              Product Development As-A-Service
            </div>
            <p className="text-zinc-400 mx-4">
              Empowering your product from conception to market.
            </p>

            <div className="font-bold text-xl  mt-6">Services</div>
            <ul className="text-zinc-400">
              <li>MVP Development</li>
              <li>Go-To-Market Strategies</li>
            </ul>
          </div>

          {/* Digital Office As-A-Service */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center">
              <Image
                className="center"
                src="/image13.png"
                alt="Product Development As-A-Service"
                width={400}
                height={400}
              />
            </div>
            <div className="font-bold text-xl ">
              Digital Office As-A-Service
            </div>
            <p className="text-zinc-400 mx-12">
              Ideal for businesses needing expert guidance in software
              selection, tech stack management, and long-term marketing strategy
              implementation.
            </p>

            <div className="font-bold text-xl  mt-6">Services</div>
            <ul className="text-zinc-400 space-y-1">
              <li>Website Design & SEO</li>
              <li>Marketing & Advertising Strategy</li>
              <li>Email Marketing</li>
              <li>Lead Management & CRM</li>
              <li>E-commerce Experiences</li>
              <li>Internal Operational Tech</li>
              <li>Supply Chain & Logistics Tech</li>
            </ul>
          </div>

          {/* Strategy Office As-A-Service */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center">
              <Image
                className="center"
                src="/image-4.png"
                alt="Product Development As-A-Service"
                width={300}
                height={300}
              />
            </div>
            <div className="font-bold text-xl ">
              Strategy Office As-A-Service
            </div>
            <p className="text-zinc-400 mx-12">
              Perfect for businesses seeking expert guidance in team building,
              goal-setting, and strategy development. We leverage our proven
              "Win by Design" framework to drive transformation.
            </p>

            <div className="font-bold text-xl  mt-6">Services</div>
            <ul className="text-zinc-400 space-y-1">
              <li>Coaching for Execs & Senior Leaders</li>
              <li>Organizational Design</li>
              <li>Outcome-Based Operational Excellence</li>
              <li>OKRs and Goal-Setting Strategies</li>
              <li>Innovation Strategy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-5 divide-x gap-8 px-4">
          <div className="space-y-4 text-center ">
            <div className="flex items-center justify-center">
              <Image
                className="center"
                src="/value-1.png"
                alt="Product Development As-A-Service"
                width={200}
                height={300}
              />
            </div>

            <div className="font-bold text-xl mt-6">Growth Mindset</div>
            <p className="text-zinc-400 mx-12">
              Anything is possible and if it's worth while we will achieve it.
            </p>
          </div>

          <div className="space-y-4 text-center ">
            <div className="flex items-center justify-center">
              <Image
                className="center"
                src="/value-2.png"
                alt="Product Development As-A-Service"
                width={200}
                height={300}
              />
            </div>

            <div className="font-bold text-xl mt-6">Integrity</div>
            <p className="text-zinc-400 mx-12">
            We are a function of our values. We focus on the right things to do, and drive instead of control outcomes.
            </p>
          </div>

          <div className="space-y-4 text-center ">
            <div className="flex items-center justify-center">
              <Image
                className="center"
                src="/value-3.png"
                alt="Product Development As-A-Service"
                width={200}
                height={300}
              />
            </div>

            <div className="font-bold text-xl mt-6">Objectivity</div>
            <p className="text-zinc-400 mx-12">
            We raise the bar but still focus on facts and numbers to make decisions.
            </p>
          </div>

          <div className="space-y-4 text-center ">
            <div className="flex items-center justify-center">
              <Image
                className="center"
                src="/value-4.png"
                alt="Product Development As-A-Service"
                width={200}
                height={300}
              />
            </div>

            <div className="font-bold text-xl mt-6">Creativity</div>
            <p className="text-zinc-400 mx-12">
            If there is a simpler, and more fun way to do something we strive to find it.
            </p>
          </div>

          <div className="space-y-4 text-center ">
            <div className="flex items-center justify-center">
              <Image
                className="center"
                src="/value-5.png"
                alt="Product Development As-A-Service"
                width={200}
                height={300}
              />
            </div>

            <div className="font-bold text-xl mt-6">First Principle Thinking</div>
            <p className="text-zinc-400 mx-12">
            We invest time in understanding the problem and only solve once we know them at the core
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
      <div className="flex items-center justify-center gap-[2px]">
                <p className="text-6xl font-bold">About us</p>

            </div>
        <div className="flex justify-center mt-12 mx-32 md:text-5xl bg-clip-text text-zinc-500">
            <div className="text-md">
            We are a group of Entrepreneurs and Executives who come from Technology, Engineering, Marketing, Sales, Product Development, Commerce and Investment backgrounds who have invested our careers into Growth, Learning Innovation & Disruption and have stellar track record of execution.
            </div>
          </div>
      </section>

      <section>
        <div>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
