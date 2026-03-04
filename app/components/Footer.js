import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/kckeshab12", label: "GitHub" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/keshab-kc-33a099259/",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/share/1S2Qcys13d/",
    label: "Facebook",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/kesabkc12/",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="px-6 pb-12 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-900">Keshab KC</h2>
          <p className="text-sm text-slate-600">
            {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xl text-slate-700">
          {socialLinks.map(({ icon, link, label }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 p-2 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
