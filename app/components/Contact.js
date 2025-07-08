import { useState } from "react";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuSend,
  LuGithub,
  LuLinkedin,
  LuTwitter,
  LuInstagram,
} from "react-icons/lu";
import { BounceButton, LinkButton } from "../components";
import { home, social_links } from "../data";

export default function Contact() {
  const { my_name, email, phone, location } = home;
  const full_name = my_name.split(" ");

  const formatPhoneNumber = (phone) =>
    phone.replace(/[^0-9+]/g, "").replace(/^\+62/, "62");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const message = `Hi, ${full_name[0]}\nI’d like to get in touch with you`;
  const contactInfo = [
    {
      icon: <LuMail className="w-6 h-6" />,
      title: "Email",
      content: `${email}`,
      link: `mailto:${email}`,
    },
    {
      icon: <LuPhone className="w-6 h-6" />,
      title: "Phone",
      content: `${phone}`,
      link: `https://wa.me/${formatPhoneNumber(
        phone
      )}?text=${encodeURIComponent(message)}`,
    },
    {
      icon: <LuMapPin className="w-6 h-6" />,
      title: "Location",
      content: `${location}`,
      link: "https://maps.app.goo.gl/2UpnTSWGGA6nDTzW7",
    },
  ];

  const socialLinks = social_links;
  const socialIcons = [
    {
      icon: <LuGithub className="w-6 h-6" />,
    },
    {
      icon: <LuLinkedin className="w-6 h-6" />,
    },
    {
      icon: <LuTwitter className="w-6 h-6" />,
    },
    {
      icon: <LuInstagram className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-800 bg-clip-text text-transparent mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-slate-700 via-blue-700 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-cyan-800 max-w-2xl mx-auto  md:text-2xl text-lg leading-relaxed">
            Ready to work together? Let&apos;s create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-cyan-800 mb-6">
              Let&apos;s Talk
            </h3>
            <p className="text-cyan-800 mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new opportunities and
              exciting projects. Whether you have a question or just want to say
              hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  <div className="bg-blue-100 text-cyan-500 p-3 rounded-lg mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-cyan-800">{info.title}</h4>
                    <p className="text-cyan-800">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-cyan-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <LinkButton
                    key={index}
                    url={social.url}
                    newTab={true}
                    label={socialIcons[index]["icon"]}
                    tooltip={social.label}
                    className="bg-white text-cyan-800 p-3 flex items-center justify-center w-12 h-12 rounded-lg shadow-sm hover:bg-blue-300 hover:text-white transition-all duration-200 transform hover:scale-105"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-cyan-800 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-cyan-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-cyan-800 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-cyan-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-cyan-800 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-cyan-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-cyan-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-cyan-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <BounceButton
                icon={<LuSend size={18} className="mr-2" />}
                animateType={"bounce"}
                className="w-full px-6 py-3  text-white bg-gradient-to-br from-slate-800 via-blue-800 to-purple-400 border-cyan-600 transition-colors duration-200 transform hover:shadow-xl hover:scale-105 rounded-lg mb-2"
              >
                Send Message
              </BounceButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
