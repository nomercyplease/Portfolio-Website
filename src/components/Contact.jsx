import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl p-8 shadow-lg max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2 mb-6">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Contact Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — message simulated!");
          }}
        >
          <motion.input
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            name="name"
            placeholder="Your name"
            className="p-3 border border-slate-200 rounded-xl w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
          <motion.input
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            name="email"
            placeholder="Your email"
            type="email"
            className="p-3 border border-slate-200 rounded-xl w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
          <motion.textarea
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            name="message"
            placeholder="Write your message..."
            className="p-3 border border-slate-200 rounded-xl w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            rows={5}
          />
          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-md transition"
          >
            ✉️ Send Message
          </motion.button>
        </motion.form>

        {/* RIGHT: Contact Info */}
        <div className="flex flex-col justify-center space-y-4 text-slate-700">
          <div>
            <h3 className="font-semibold text-lg">📧 Email</h3>
            <p>
              <a href="mardiantoriski5@gmail.com" className="text-indigo-600 hover:underline">
                mardiantoriski5@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">📱 Phone</h3>
            <p>+62 812-3456-xxxx</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">📍 Address</h3>
            <p>Sleman, Yogyakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
