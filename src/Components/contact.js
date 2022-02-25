import { FaArrowRight } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="max-w-lg w-full text-center m-auto  pb-10" id="contactme">
      <a href="mailto:abdulvohid233@gmail.com">
        <h1 className="text-4xl">Interested in working together?</h1>
        <span className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-10 inline-block w-auto   text-white text-base  py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">Get in touch</span>
            <FaArrowRight color="white" />
          </div>
        </span>
      </a>
    </div>
  );
}
