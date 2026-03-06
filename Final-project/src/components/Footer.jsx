import React from "react";
// Using simple inline icons to avoid an extra dependency (lucide-react)

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section: About University */}
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-gray-300">
            Since its establishment in 1981, this University has been playing a
            vital role in imparting Agricultural Education and conducting basic
            and applied agricultural research throughout the Province, and
            disseminating the results of agricultural research among the farmers
            and general public through its outreach/public service activities.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 inline-block">
            Links
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {[
              "Home",
              "About us",
              "Tenders",
              "Jobs / Careers",
              "Auctions",
              "UAP Alumni",
              "Annual Reports",
              "News Letters",
              "Picture Galleries",
              "Guest House / Accommodation",
            ].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-yellow-500 mr-1" aria-hidden>
                  ›
                </span>
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Public Information & Admin */}
        <div className="space-y-8">
          {/* Public Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Public Information / Public Services Office
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-yellow-500" aria-hidden>
                  📞
                </span>
                <span>+92 91 9221144 Ext: 3344</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-500" aria-hidden>
                  ✉️
                </span>
                <a href="mailto:pio@aup.edu.pk" className="hover:underline">
                  pio@aup.edu.pk
                </a>
              </div>
            </div>
          </div>

          {/* Director Admin */}
          <div>
            <h2 className="text-xl font-bold mb-4">Director Administration</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-yellow-500" aria-hidden>
                  📞
                </span>
                <span>+92 91 9221167 Ext: 3142</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-500" aria-hidden>
                  ✉️
                </span>
                <a
                  href="mailto:##########################"
                  className="hover:underline"
                >
                 ##########################
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
