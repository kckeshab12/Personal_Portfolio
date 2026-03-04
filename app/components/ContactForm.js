const contactItems = [
  {
    title: "Email",
    value: "keshab@vkglobalservices.com.np",
    href: "mailto:keshab@vkglobalservices.com.np",
  },
  {
    title: "WhatsApp",
    value: "+977 9749844045",
    href: "https://wa.me/9779749844045",
  },
  {
    title: "Location",
    value: "Lalitpur, Nepal",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 sm:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1.1fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Let us connect and build something useful.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            If you have a collaboration idea, role opportunity, or technical
            discussion, feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="space-y-4">
          {contactItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {item.title}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.title === "WhatsApp" ? "_blank" : undefined}
                  rel={item.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="mt-1 inline-block text-base font-semibold text-slate-900 transition hover:text-cyan-700"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;