import React, { useState } from "react";

export default function Card() {
  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  return (
    <main className="bg-[color:hsl(275,100%,97%)] h-3/4 md:h-2/3 relative">
      <div className="w-10/12 md:w-1/3 md:pb-10 mx-auto bg-white px-5 md:px-10 py-3 rounded-lg md:rounded-xl absolute -top-20 md:-top-36 left-1/2 -translate-x-1/2">
        <div className="flex items-center md:mt-10 md:mb-10">
          <img src="assets/images/icon-star.svg" alt="" />
          <h1 className="text-3xl md:text-5xl md:ml-5 font-bold text-[color:hsl(292,42%,14%)]">
            FAQs
          </h1>
        </div>
        <div className="border-b border-gray-200/50 pb-5">
          <div className="flex items-center justify-between mt-5">
            <h2 className="w-2/3 text-sm md:text-base md:w-full font-semibold text-[color:hsl(292,42%,14%)]">
              What is Frontend Mentor, and how will it help me?
            </h2>
            <button onClick={() => setQuestion1(!question1)}>
              <span>
                <img
                  src={`${
                    question1
                      ? "assets/images/icon-minus.svg"
                      : "assets/images/icon-plus.svg"
                  }`}
                  alt="icon button"
                />
              </span>
            </button>
          </div>
          {question1 && (
            <p className="text-[color:hsl(292,16%,49%)] text-sm mt-3">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </p>
          )}
        </div>
        {/* QUESTION 2  */}
        <div className="mt-5  border-b border-gray-200/50 pb-5">
          <div className="flex items-center justify-between">
            <h2 className="w-2/3 text-sm md:text-base font-semibold text-[color:hsl(292,42%,14%)]">
              Is Frontend Mentor free?
            </h2>
            <button onClick={() => setQuestion2(!question2)}>
              <span>
                <img
                  src={`${
                    question2
                      ? "assets/images/icon-minus.svg"
                      : "assets/images/icon-plus.svg"
                  }`}
                  alt="icon button"
                />
              </span>
            </button>
          </div>
          {question2 && (
            <p className="text-[color:hsl(292,16%,49%)] text-sm mt-3">
              Yes, Frontend Mentor offers both free and premium coding
              challenges, with the free option providing access to a range of
              projects suitable for all skill levels.
            </p>
          )}
        </div>
        {/* QUESTION 3 */}
        <div className="border-b border-gray-200 pb-5">
          <div className="flex items-center justify-between mt-5 ">
            <h2 className="w-2/3 text-sm md:text-base font-semibold text-[color:hsl(292,42%,14%)]">
              Can I use Frontend Mentor projects in my portfolio?
            </h2>
            <button onClick={() => setQuestion3(!question3)}>
              <span>
                <img
                  src={`${
                    question3
                      ? "assets/images/icon-minus.svg"
                      : "assets/images/icon-plus.svg"
                  }`}
                  alt="icon button"
                />
              </span>
            </button>
          </div>
          {question3 && (
            <p className="text-[color:hsl(292,16%,49%)] text-sm mt-3">
              Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!
            </p>
          )}
        </div>
        {/* QUESTION 4 */}
        <div>
          <div className="flex items-center justify-between mt-5 ">
            <h2 className="w-2/3 text-sm md:text-base font-semibold text-[color:hsl(292,42%,14%)]">
              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </h2>
            <button onClick={() => setQuestion4(!question4)}>
              <span>
                <img
                  src={`${
                    question4
                      ? "assets/images/icon-minus.svg"
                      : "assets/images/icon-plus.svg"
                  }`}
                  alt="icon button"
                />
              </span>
            </button>
          </div>
          {question4 && (
            <p className="text-[color:hsl(292,16%,49%)] text-sm mt-3">
              The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
