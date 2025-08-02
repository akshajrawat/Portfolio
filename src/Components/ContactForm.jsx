import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Set current timestamp
    const currentTime = new Date().toLocaleString();
    form.current.querySelector('[name="time"]').value = currentTime;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Please check the console.");
        }
      );
  };

  return (
    <div
      id="Contact"
      className="max-w-[100vw] w-full flex flex-col justify-start items-center px-4 py-10"
    >
      <form
        ref={form}
        name="contact-form"
        onSubmit={sendEmail}
        className="w-full max-w-3xl p-3 mt-6"
      >
        <div className="border border-[#ffffff51] rounded-xl w-full p-6 flex flex-col gap-4">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 h-[60px] px-6 py-2 flex gap-3 justify-start items-center border border-[#ffffff51] rounded-xl text-sm md:text-base">
              📧 <span>akshajrawat@example.com</span>
            </div>
            <div className="flex-1 h-[60px] px-6 py-2 flex gap-3 justify-start items-center border border-[#ffffff51] rounded-xl text-sm md:text-base">
              📱 <span>+91 9368760635</span>
            </div>
          </div>

          <p className="text-sm text-gray-300 font-semibold text-center mt-2">
            Or send a message
          </p>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />

          {/* Hidden timestamp field */}
          <input type="hidden" name="time" />

          <button
            type="submit"
            className="mt-2 w-full py-2 border border-[#ffffff51] rounded-xl text-white 
             transition-all duration-200 transform hover:scale-105 active:scale-95 hover:bg-[#ffffff15]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
