import Link from "next/link";
import Image from "next/image";
import Sliding from "./components/Sliding";
import Question from "./components/Question";
import Review from "./components/Review";
import Typing from "./components/Typing";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-violet-100">
      <div className="flex w-full flex-row items-center justify-center px-8 py-4 pb-16 sm:justify-between sm:pb-40">
        <div className="flex flex-col items-center sm:flex-row sm:gap-4">
          <Link className="" href="/">
            <Image
              className="h-[46px] w-[132px] sm:h-[57px] sm:w-[166px]"
              src="/jargon.png"
              alt="Jargon Logo"
              width={166}
              height={57}
            />
          </Link>
          <div className="hidden text-center text-lg font-medium leading-[33px] text-indigo-400 sm:flex sm:text-2xl">
            In-Context Language Learning for Everyday Use
          </div>
        </div>
        <Link
          className="hidden flex-row items-center justify-center gap-2 rounded-[20px] bg-violet-700 px-6 py-2 sm:flex"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfOcYOZsjZXoeZE8HIHk7VW8bVGG6k4SjpuWFcQabo31zzotA/viewform"
          target="_blank"
        >
          <div className="whitespace-nowrap text-nowrap text-[15px] font-semibold text-white">
            Join Our Waitlist
          </div>
          <Image
            src="/external_site.svg"
            alt="External Link Icon"
            height={14}
            width={15}
          />
        </Link>
      </div>

      <h3 className="sm-1 text-center text-[16px] font-bold text-zinc-500 sm:p-4 sm:text-3xl">
        Learn a foreign language
      </h3>
      <Typing
        phrases={[
          "scroll Reddit",
          "surf the web",
          "search Wikipedia",
          "browse the internet",
        ]}
      />

      <Link
        className="mt-10 h-[64px] w-[218px] sm:mt-12 sm:h-[85px] sm:w-[290px]"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfOcYOZsjZXoeZE8HIHk7VW8bVGG6k4SjpuWFcQabo31zzotA/viewform"
        target="_blank"
      >
        <Image src="/jar_top.svg" alt="Jar Top Icon" height={85} width={290} />
      </Link>
      <Image
        className="h-[245px] w-[320px] sm:h-[338px] sm:w-[435px]"
        src="/half_jar.svg"
        alt="Half Jar Icon"
        height={612}
        width={435}
      />

      <Sliding
        contents={[
          "Spanish 🇪🇸",
          "Italian 🇮🇹",
          "French 🇫🇷",
          "German 🇩🇪",
          "Portuguese 🇵🇹",
          "Mandarin 🇨🇳",
          "Japanese 🇯🇵",
          "Korean 🇰🇷",
          "Hindi 🇮🇳",
        ]}
      />

      <div className="flex flex-col items-start justify-start gap-2 px-10 pt-20 sm:gap-4">
        <h2 className="bg-violet-300 text-left text-[18px] font-bold text-zinc-500 sm:text-4xl">
          Why is language learning so hard?
        </h2>

        <p className="max-w-[950px] text-left text-[16px] leading-6 text-zinc-500 sm:text-[26px] sm:leading-8">
          Online language learning is widely accessible, yet many apps offer
          irrelevant content that requires A LOT OF willpower to actually
          practice until fluency
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-between py-8 sm:flex-row sm:py-16">
        <div></div>
        <div className="flex h-full  max-w-96 flex-grow flex-col justify-end px-8 pb-12 pt-4 text-center sm:px-0 sm:pb-0 sm:pt-40 sm:text-right">
          <h3 className="text-[17px] font-bold leading-[30px] text-violet-700 sm:text-3xl sm:leading-[42px]">
            Consistent Practice
          </h3>
          <p className="text-[14px] font-medium leading-6 text-zinc-500 sm:text-2xl sm:leading-8">
            Doing vocabulary practice is easy, but practicing 30 minutes
            everyday is hard.
          </p>
        </div>
        <div className="rotate-[-5.92deg]">
          <Question
            progress={50}
            sentence="¿Por qué es ____ difícil aprender un idioma?"
            options={["muy", "tan", "esto", "demasido"]}
            correct="tan"
          />
        </div>
        <div className="flex h-full max-w-96 flex-col justify-start px-8 pt-12 text-center sm:px-0 sm:pb-40 sm:pt-0 sm:text-left">
          <h3 className="text-[17px] font-bold leading-[30px] text-violet-700 sm:text-3xl sm:leading-[42px]">
            Contextual Learning
          </h3>
          <p className="text-[14px] font-medium leading-6 text-zinc-500 sm:text-2xl sm:leading-8">
            Learning to say “I am hungry” is fun, but learning to say phrases in
            real context and jargons in your interest are more practical.
          </p>
        </div>
        <div></div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2 bg-blue-50 px-10 pb-12 pt-8 sm:gap-6 sm:py-16">
        <h2 className="text-center text-[18px] font-bold text-violet-700 sm:text-[45px]">
          In Context + Integrated Learning ={" "}
          <span className="inline-flex h-full align-middle">
            <Image
              className="h-[42px] w-[130px] sm:h-[66px] sm:w-[190px]"
              src="/jargon.png"
              alt="Jargon Logo"
              width={190}
              height={66}
            />
          </span>
        </h2>

        <p className="max-w-[1100px] text-center text-[15px] font-medium leading-6 text-zinc-500 sm:text-[26px] sm:leading-9">
          Jargon integrates learning into your browsing experience: whether you
          are checking emails, reading the news, doing work or even scrolling
          through Reddit threads, you can learn new vocabularies and phrases
          more effortlessly!
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-between pt-12 sm:flex-row sm:pb-20 sm:pt-24">
        <div></div>
        <div></div>
        {[
          {
            name: "Vijay",
            lang: "🇪🇸 Spanish Learner",
            review:
              "I started using Jargon right before my college Spanish proficiency test— I ended up placing at the highest level! The constant practice and varied contexts definitely helped.",
            tilt: "rotate-[-5.92deg]",
            offset:
              "translate-x-[-30px] sm:translate-x-0 sm:translate-y-[-30px]",
          },
          {
            name: "David",
            lang: "🇫🇷 French Learner",
            review:
              "I get to turn my mindless web-surfing into something productive! Definitely a lot more interesting than the exercises I pored over in high school.",
            tilt: "rotate-[5.61deg]",
            offset: "translate-x-[30px] sm:translate-x-0 sm:translate-y-[30px]",
          },
          {
            name: "Stephen",
            lang: "🇨🇳 Chinese Learner",
            review:
              "Jargon is a great supplement to my Chinese school, and lets me stay ahead of the curve with new vocab. The proficiency feature is great for matching what I’m learning.",
            tilt: "rotate-[-4.85deg]",
            offset:
              "translate-x-[-30px] sm:translate-x-0 sm:translate-y-[-30px]",
          },
          {
            name: "Lucy",
            lang: "🇪🇸 Spanish Learner",
            review:
              "As someone gearing up to study abroad, Jargon has made me more confident than any pocket dictionary in navigating a city, reading instructions, and more all in a foreign language!",
            tilt: "rotate-[1.57deg]",
            offset: "translate-x-[30px] sm:translate-x-0 sm:translate-y-[30px]",
          },
        ].map((rev, index) => (
          <div key={index} className={`${rev.tilt} ${rev.offset} pb-8 sm:pb-0`}>
            <Review name={rev.name} lang={rev.lang} review={rev.review} />
          </div>
        ))}
        <div></div>
        <div></div>
      </div>

      <h2 className="pb-8 text-center text-[20px] font-bold text-neutral-700 sm:text-[45px]">
        People love{" "}
        <span className="inline-flex h-full align-middle">
          <Image
            className="h-[42px] w-[130px] sm:h-[66px] sm:w-[190px]"
            src="/jargon.png"
            alt="Jargon Logo"
            width={190}
            height={66}
          />
        </span>{" "}
        !!
      </h2>

      <div className="flex w-full flex-row items-center justify-center bg-violet-200 px-20 py-8 sm:justify-between">
        <Image
          className="hidden sm:flex"
          src="/jargon.png"
          alt="Jargon Logo"
          width={262}
          height={91}
        />
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex flex-row gap-6">
            <Link href="https://www.instagram.com/jargonlearn" target="_blank">
              <Image
                className="h-[28px] w-[28px] sm:h-[56px] sm:w-[56px]"
                src="/instagram.svg"
                alt="Instagram Icon"
                width={56}
                height={56}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jargon-learn/"
              target="_blank"
            >
              <Image
                className="h-[28px] w-[28px] sm:h-[56px] sm:w-[56px]"
                src="/linkedin.svg"
                alt="Linkedin Icon"
                width={56}
                height={56}
              />
            </Link>
            <Link href="mailto:jargonlearn@gmail.com" target="_blank">
              <Image
                className="h-[28px] w-[28px] sm:h-[56px] sm:w-[56px]"
                src="/email.svg"
                alt="Email Logo"
                width={56}
                height={56}
              />
            </Link>
          </div>
          <Link
            className="flex flex-row items-center justify-center gap-1 sm:gap-2 rounded-[40px] bg-violet-700 px-6 py-2 sm:px-12 sm:py-4"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOcYOZsjZXoeZE8HIHk7VW8bVGG6k4SjpuWFcQabo31zzotA/viewform"
            target="_blank"
          >
            <div className="whitespace-nowrap text-nowrap text-[16px] font-medium text-white sm:text-[22px]">
              Join Our Waitlist
            </div>
            <Image
              className="w-[12px] h-[13px] sm:w-[14px] sm:h-[15px]"
              src="/external_site.svg"
              alt="External Link Icon"
              height={14}
              width={15}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
