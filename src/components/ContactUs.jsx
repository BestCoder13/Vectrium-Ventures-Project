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
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-6 pt-20">
      <div className="w-full max-w-md p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <div className="mb-6">
          <div className="flex items-center justify-center ">
            <img className="h-12 mx-auto mb-3" src={logo} alt="Vectrium Ventures" />
            <h1 className="text-2xl font-bold">Vectrium Ventures</h1>
          </div>
          <h1 className="text-3xl font-bold">Let's Get In Touch.</h1>
          <p className="text-gray-400 text-sm">Or just reach out manually to <span className="text-indigo-400">contact@vectriumventures.in</span></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            {["firstName", "lastName"].map((field) => (
              <div key={field} className="w-1/2">
                <label className="block text-gray-300 text-sm">{field === "firstName" ? "First Name" : "Last Name"}</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-400"
                    placeholder={field === "firstName" ? "John" : "Doe"}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-gray-300 text-sm">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-400"
                placeholder="example@gmail.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-400"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-indigo-400"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-indigo-600 hover:bg-indigo-500 transition rounded flex items-center justify-center font-medium disabled:bg-gray-500"
            disabled={isSending}
          >
            {isSending ? (
              <><Loader2 className="size-5 animate-spin mr-2" />Sending...</>
            ) : (
              <><Send className="size-5 mr-2" />Submit Form</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
