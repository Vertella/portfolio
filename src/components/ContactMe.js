import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ContactMe = () => {
  const { state } = useTheme();
  return (
    <div id="contact" className={`${state.theme === "light" ? "bg-white" : "bg-zinc-900"} ${state.theme === "light" ? "text-zinc-800" : "text-white"} flex flex-col py-20 justify-center text-center content-center items-center `}>
      <h1 className="text-3xl font-semibold mb-4">Contact Me</h1>
      <div className={`${state.theme === "light" ? "bg-white" : "bg-zinc-800"} ${state.theme === "light" ? "text-gray-800" : "text-white"} max-w-lg p-10 rounded`}>
        <p className="mb-4">
          Have a question or want to get in touch? Drop me a message using the form below and I&apos;ll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className={`${state.theme === "light" ? "bg-white" : "bg-zinc-500"} w-full  ${state.theme === "light" ? "border-gray-300" : "border-gray-800"} border rounded-md px-4 py-2`}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className={`${state.theme === "light" ? "bg-white" : "bg-zinc-500"} w-full  ${state.theme === "light" ? "border-gray-300" : "border-zinc-800"} border rounded-md px-4 py-2`} placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" className={`${state.theme === "light" ? "bg-white" : "bg-zinc-500"} w-full  ${state.theme === "light" ? "border-gray-300" : "border-zinc-800"} border rounded-md px-4 py-2 resize-none`} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className={`${state.theme === "light" ? "bg-green-400" : "bg-green-800"} ${state.theme === "light" ? "text-gray-800" : "white"} mt-8 hover:bg-green-600 py-2 px-4 rounded-md transition duration-300`}>
            Send Message
          </button>
        </form>
      </div>
      <div className={` ${state.theme === "light" ? "text-gray-400" : "text-zinc-500"} flex flex-row`}>
        <p className="m-4">Thank you for visiting my portfolio!</p>
      </div>
    </div>
  );
};

export default ContactMe;
