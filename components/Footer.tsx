// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- SVG Icon Components ---
const FacebookIcon = () => (<svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" clipRule="evenodd" /></svg>);
const TwitterIcon = () => (<svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
const InstagramIcon = () => (<svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882-.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 1.802a3.333 3.333 0 1 1 0 6.666 3.333 3.333 0 0 1 0-6.666zm5.338-3.205a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" clipRule="evenodd" /></svg>);
const LinkedInIcon = () => (<svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>);
const EmailIcon = () => (<svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>);
const PhoneIcon = () => (<svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>);
// ----------------------------------------

const Footer: React.FC = () => {
  // Link structures remain the same
  const pagesLinks = [ { href: '/', label: 'Home' }, { href: '/portfolios/10x-alphas', label: 'Portfolios' }];
  const supportLinks = [ { href: '/about', label: 'About us' }, { href: '/careers', label: 'Career' }];
  const legalLinks = [ { href: '/privacy-policy', label: 'Privacy Policy' }, { href: '/refund-policy', label: 'Refund Policy' }, { href: '/terms-conditions', label: 'Terms & Conditions' }];
  const socialLinks = [
     { href: '#', label: 'Facebook', Icon: FacebookIcon },
     { href: '#', label: 'Twitter', Icon: TwitterIcon },
     { href: '#', label: 'Instagram', Icon: InstagramIcon },
     { href: '#', label: 'LinkedIn', Icon: LinkedInIcon },
  ];

  // Contact information
  const contactInfo = {
    email: "contact@dubaiclub.com",
    phone: "+91 81188 68536"
  };

  return ( // <<< FIXED: Removed extra '>'
    <footer className="relative bg-black text-neutral-300 pt-16 pb-8 overflow-hidden">
       {/* Optional: Subtle background pattern */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/dark-pattern.svg')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Section: Logo, Tagline, Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-2 pr-8">
             {/* Logo Link - NOW WITH IMAGE */}
             <Link href="/" legacyBehavior>
                {/* Removed text styling classes, kept layout classes */}
                <a className="inline-block mb-3" aria-label="Dubai Club Home">
                    {/* --- LOGO IMAGE ADDED HERE --- */}
                    <Image
                       src="/dubaiclublogo.png" // Path from /public
                       alt="Dubai Club Logo"
                       width={140} // Adjust size as needed for footer
                       height={35} // Adjust height to maintain aspect ratio
                       quality={95}
                     />
                    {/* --- END LOGO IMAGE --- */}
                </a>
             </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Dubai Club is a professional Research Analyst who simplifies Crypto Investing & more.
            </p>

            {/* Contact Button */}
            <Link href="/contact" legacyBehavior>
              <a className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-sm rounded transition-colors duration-200">
                Contact Us
              </a>
            </Link>
          </div>

          {/* Columns 2-4: Links */}
          <div>
             <h4 className="font-semibold text-neutral-100 mb-4 uppercase tracking-wider text-sm">Pages</h4>
             <ul className="space-y-2">
                {pagesLinks.map(link => (<li key={link.label}><Link href={link.href} legacyBehavior><a className="hover:text-yellow-400 transition-colors duration-200 text-sm">{link.label}</a></Link></li>))}
             </ul>
          </div>
          <div>
             <h4 className="font-semibold text-neutral-100 mb-4 uppercase tracking-wider text-sm">Support</h4>
             <ul className="space-y-2">
               {supportLinks.map(link => (<li key={link.label}><Link href={link.href} legacyBehavior><a className="hover:text-yellow-400 transition-colors duration-200 text-sm">{link.label}</a></Link></li>))}
             </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-100 mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2">
               {legalLinks.map(link => (<li key={link.label}><Link href={link.href} legacyBehavior><a className="hover:text-yellow-400 transition-colors duration-200 text-sm">{link.label}</a></Link></li>))}
            </ul>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8">
          <h4 className="font-semibold text-neutral-100 mb-4 uppercase tracking-wider text-sm text-center">Contact Us</h4>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8">
            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center text-neutral-400 hover:text-yellow-400 transition-colors duration-200 group">
              <EmailIcon />
              <span className="group-hover:underline">{contactInfo.email}</span>
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="inline-flex items-center text-neutral-400 hover:text-yellow-400 transition-colors duration-200 group">
              <PhoneIcon />
              <span className="group-hover:underline">{contactInfo.phone}</span>
            </a>
          </div>
        </div>

        {/* Bottom Section: Social Icons & Copyright */}
        <hr className="border-t border-gray-700/50 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Social Icons */}
          <div className="flex space-x-5 mb-6 md:mb-0">
            {socialLinks.map(social => (
              <a
                key={social.label} // <<< FIXED: Key moved to the <a> tag
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <social.Icon />
              </a>
            ))}
          </div>

          {/* Copyright Notice */}
          <p className="text-neutral-500 text-center md:text-right">
            © {new Date().getFullYear()} DUBAI CLUB VENTURES All Rights Reserved.
          </p>
        </div>

        {/* Disclaimer Section */}
        <hr className="border-t border-gray-800 my-8" />
        <div className="text-center text-xs text-neutral-600 leading-relaxed">
           <p className="font-semibold mb-2 uppercase tracking-wider">Disclaimer</p>
           <p>
              Dubai Club provides investment guidance and model portfolios for educational and informational purposes only. We are not financial advisors registered with SEBI or any other regulatory body, and investments involve risk, including the possible loss of principal. Past performance is not indicative of future results. Please conduct your own research or consult with a qualified financial advisor before making any investment decisions. Dubai Club does not execute trades or handle client funds. All investment decisions are solely yours.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;