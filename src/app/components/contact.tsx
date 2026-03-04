import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const mailtoSubject = encodeURIComponent(
      formData.subject ? `Portfolio Contact: ${formData.subject}` : 'Portfolio Contact'
    );
    
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default mail client
    window.location.href = `mailto:vinipxf@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Let's discuss how we can work together on innovative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="consulting">Consulting</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">Direct Contact</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Email</p>
                  <a
                    href="mailto:vinipxf@gmail.com"
                    className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    vinipxf@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Response Time</p>
                  <p className="text-lg text-zinc-100">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-100 mb-6">Connect on Social</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/vinipx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 border border-zinc-700 group"
                >
                  <Github className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-xs text-zinc-400">GitHub</p>
                    <p className="text-sm text-zinc-100 group-hover:text-cyan-400 transition-colors">vinipx</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/vinipxf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border border-zinc-700 group"
                >
                  <Linkedin className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-xs text-zinc-400">LinkedIn</p>
                    <p className="text-sm text-zinc-100 group-hover:text-emerald-400 transition-colors">vinipxf</p>
                  </div>
                </a>

                <a
                  href="https://twitter.com/vinipx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 border border-zinc-700 group"
                >
                  <Twitter className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-xs text-zinc-400">Twitter</p>
                    <p className="text-sm text-zinc-100 group-hover:text-blue-400 transition-colors">@vinipx</p>
                  </div>
                </a>

                <a
                  href="mailto:vinipx@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 border border-zinc-700 group"
                >
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-xs text-zinc-400">Email</p>
                    <p className="text-sm text-zinc-100 group-hover:text-purple-400 transition-colors">Direct</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-xl p-6 border border-cyan-500/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="font-bold text-zinc-100">New Jersey, USA</p>
                  <p className="text-sm text-zinc-400">Open to consulting and collaboration</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
