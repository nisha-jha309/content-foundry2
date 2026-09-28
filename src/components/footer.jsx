const Footer = () => {
  return (
    <footer className="bg-[#171613] py-[35px] text-white">
      <div
        className="
          mx-auto
          flex max-w-[1440px]
          flex-col
          gap-8
          px-[5vw]
          text-[13px]

          sm:flex-row
          sm:flex-wrap
          sm:justify-between
          sm:gap-6
        "
      >
        {/* Logo */}
        <div className="w-[60px] shrink-0">
          <img
            src="/content-foundry.png"
            alt="Content Foundry"
            className="h-auto w-full"
          />
        </div>

        {/* Address */}
        <div className="max-w-[280px]">
          <h3 className="mb-1 text-sm font-black">
            Studio Address
          </h3>

          <p className="leading-5">
            FBD One Corporate Park 10th Floor, NH-44
            Faridabad-121003, Haryana (India)
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <h3 className="mb-1 text-sm font-black">
            Contact us
          </h3>

          <a
            href="mailto:info@contentfoundry.in?subject=Content%20Foundry%20project"
            className="transition-opacity hover:opacity-70"
          >
            info@contentfoundry.in ↗
          </a>

          <a
            href="tel:+919773500316"
            className="transition-opacity hover:opacity-70"
          >
            +91 97735 00316
          </a>
        </div>

        {/* Copyright */}
        <span className="text-white/70 sm:self-end">
          © 2025 Content Foundry. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;