import React, { useState } from "react";
import { User, Mail, Phone, Send, Loader2 } from "lucide-react";
import logo from "../assets/logo-min.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSending(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-4 sm:px-8 py-24">
  <div className="w-full max-w-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl p-8 text-white">
    
    <div className="mb-8">
      <div className="flex items-center justify-center md:justify-start mb-4">
        <img className="h-10 mr-3" src={logo} alt="Vectrium Ventures" />
        <h1 className="text-2xl font-semibold tracking-tight">Vectrium Ventures</h1>
      </div>
      <h2 className="text-3xl font-bold mb-2">Let's Get In Touch</h2>
      <p className="text-sm text-neutral-400">
        Or just reach out manually at <span className="text-indigo-400">contact@vectriumventures.in</span>
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex space-x-4">
        {["firstName", "lastName"].map((field) => (
          <div key={field} className="w-1/2">
            <label className="block text-sm text-neutral-300 mb-1">
              {field === "firstName" ? "First Name" : "Last Name"}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-5" />
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={field === "firstName" ? "Enter your first name..." : "Enter your last name..."}
                className="w-full pl-10 px-3 py-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-neutral-500 text-white"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm text-neutral-300 mb-1">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-5" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@gmail.com"
            className="w-full pl-10 px-3 py-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-neutral-500 text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-neutral-300 mb-1">Phone</label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-5" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="w-full pl-10 px-3 py-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-neutral-500 text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-neutral-300 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          placeholder="Type your message here..."
          className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-neutral-500 text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg flex items-center justify-center font-medium disabled:bg-gray-600"
        disabled={isSending}
      >
        {isSending ? (
          <>
            <Loader2 className="size-5 animate-spin mr-2" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-5 mr-2" />
            Submit Form
          </>
        )}
      </button>
    </form>
  </div>
</div>

  );
};

export default ContactUs;
