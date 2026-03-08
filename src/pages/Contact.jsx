import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";

const OFFICES = [
  {
    city: "Hyderabad",
    lines: [
      "Plot No. 573 B & C, Road No. 1",
      "Jubilee Hills, Hyderabad 500 096",
      "Telangana, India",
    ],
  },
  {
    city: "New York",
    lines: [
      "1166 Avenue of the Americas",
      "New York, NY 10036",
      "United States",
    ],
  },
  {
    city: "London",
    lines: [
      "One Canada Square",
      "Canary Wharf, London E14 5AB",
      "United Kingdom",
    ],
  },
];

const INPUT_CLS =
  "w-full bg-white border border-stone-200 text-stone-800 px-3 py-2.5 text-[13.5px] outline-none transition-colors duration-200 focus:border-stone-800 font-jost font-light";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const inp = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <div className="bg-white">
      {/* ── Header ── */}
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-14 max-w-3xl">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-baskerville text-[clamp(30px,4.5vw,60px)] font-normal text-stone-800 leading-[1.12] mt-4 tracking-tight">
              Let's start a conversation.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Form + Offices ── */}
      <section className="max-w-3xl">
        <div className="px-6 sm:px-10 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16">
          {/* Form */}
          <Reveal>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 bg-stone-50 border border-stone-200"
              >
                <div className="font-baskerville text-5xl text-stone-800">
                  ✓
                </div>
                <h3 className="font-baskerville text-2xl text-stone-800 mt-4">
                  Message received.
                </h3>
                <p className="text-stone-400 mt-2 text-sm font-light">
                  We'll be in touch within 2 business days.
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "name", label: "Full Name", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1.5 font-medium font-jost">
                        {f.label}
                      </label>
                      <input
                        name={f.name}
                        type={f.type}
                        value={form[f.name]}
                        onChange={inp}
                        className={INPUT_CLS}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1.5 font-medium font-jost">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={inp}
                    className={INPUT_CLS}
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1.5 font-medium font-jost">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={inp}
                    rows={6}
                    className={`${INPUT_CLS} resize-y`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="self-start bg-stone-800 text-white text-[11px] tracking-[0.17em] uppercase font-medium px-7 py-3 border-none cursor-pointer transition-colors duration-200 hover:bg-stone-900 font-jost"
                >
                  Send Message
                </button>
              </div>
            )}
          </Reveal>

          {/* Offices */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-7">
              <div>
                <Eyebrow>Our Offices</Eyebrow>
                <div className="w-6 h-px bg-stone-800 mt-3" />
              </div>

              {OFFICES.map((o) => (
                <div
                  key={o.city}
                  className="pl-3.5 border-l-2 border-stone-200"
                >
                  <div className="font-baskerville text-[15px] text-stone-800 mb-1.5">
                    {o.city}
                  </div>
                  {o.lines.map((l, j) => (
                    <div
                      key={j}
                      className="text-[12.5px] text-stone-400 leading-loose font-light"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              ))}

              <div className="p-4 sm:p-5 bg-stone-50 border border-stone-200">
                <Eyebrow>Careers Enquiries</Eyebrow>
                <div className="font-baskerville text-sm text-stone-800 mt-2">
                  careers@dscapital.com
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
