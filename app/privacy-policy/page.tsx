// app/privacy-policy/page.tsx
import React from 'react';
import Link from 'next/link';

// Reusable Heading Component for consistency
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
    {children}
  </h2>
);

// Reusable Paragraph Component for consistency
const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-600 mb-4 leading-relaxed">
    {children}
  </p>
);

const PrivacyPolicyPage: React.FC = () => {
  const websiteName = "Dubai Club";
  const websiteUrl = "mydubaiclub.com"; // Replace if different
  const companyName = "DUBAI CLUB VENTURES"; // From footer copyright
  const contactEmail = "support@mydubaiclub.com"; // Corrected domain
  const contactPageUrl = "/contact"; // Link to contact page
  const lastUpdatedDate = "May 5, 2025"; // Replace with actual date

  return (
    // Main container - Consider adding dark theme wrapper if needed
    // For readability of policy text, a light background is often preferred.
    <div className="bg-white text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-500 mb-10">
            Last Updated: {lastUpdatedDate}
          </p>

          <SectionHeading>1. Introduction</SectionHeading>
          <Paragraph>
            Welcome to {websiteName} (the "Website"), operated by {companyName} ("we", "us", "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {websiteUrl}, use our services (including accessing model portfolios and investment guidance), or otherwise interact with us. Please read this policy carefully. By using the Website and our services, you agree to the collection and use of information in accordance with this policy.
          </Paragraph>

          <SectionHeading>2. Information We Collect</SectionHeading>
          <Paragraph>
            We may collect information about you in a variety of ways. The information we may collect on the Website includes:
          </Paragraph>
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Personal Data</h3>
          <Paragraph>
            Personally identifiable information, such as your name, email address, phone number, and potentially demographic information or information related to your investment profile or risk appetite that you voluntarily give to us when you register for an account, subscribe to our services, or fill out forms on the Website. Payment information (like credit card numbers) may be collected by our third-party payment processors when you subscribe; we do not typically store this information directly.
          </Paragraph>
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Derivative Data</h3>
          <Paragraph>
            Information our servers automatically collect when you access the Website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Website. We may also collect information about the device you use to access the Website.
          </Paragraph>
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Financial Data (Guidance Context)</h3>
          <Paragraph>
            While we provide investment guidance, we emphasize that <strong className="font-semibold">we do not handle your funds or execute investments directly</strong>. Any information you provide regarding your financial goals or risk tolerance is used solely to tailor the guidance offered through our model portfolios. If you choose to use a third-party broker via redirection from our site, their data collection is governed by their own privacy policy.
          </Paragraph>

          <SectionHeading>3. How We Use Your Information</SectionHeading>
          <Paragraph>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:
          </Paragraph>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Create and manage your account and subscription.</li>
            <li>Provide our services, including access to model portfolios and investment guidance.</li>
            <li>Process payments and refunds.</li>
            <li>Email you regarding your account, subscription, or service updates.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Website and our services.</li>
            <li>Notify you of updates to the Website or changes to our terms or policies.</li>
            <li>Personalize guidance based on information you provide (e.g., risk profile), subject to your consent where required.</li>
            <li>Comply with legal and regulatory obligations.</li>
            <li>Send you newsletters, promotions, and marketing materials (where you have opted-in), with the option to opt-out at any time.</li>
          </ul>

          <SectionHeading>4. How We Share Your Information</SectionHeading>
          <Paragraph>
            We do not sell your personal information. We may share information we have collected about you in certain situations:
          </Paragraph>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong className="font-semibold">With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf (e.g., payment processing, data analysis, email delivery, hosting services, customer service).</li>
            <li><strong className="font-semibold">Broker Redirection:</strong> Our service involves providing guidance and potentially redirecting you to third-party brokers for investment execution. If you choose to follow such a redirection link, limited information might be passed as part of that process, or you may need to provide information directly to the broker. Their use of your information is governed by their privacy policy.</li>
            <li><strong className="font-semibold">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            <li><strong className="font-semibold">Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong className="font-semibold">With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
          </ul>

          <SectionHeading>5. Cookies and Tracking Technologies</SectionHeading>
          <Paragraph>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Website to help customize the site and improve your experience. When you access the Website, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies, but be aware that such action could affect the availability and functionality of the Website.
          </Paragraph>

          <SectionHeading>6. Data Security</SectionHeading>
          <Paragraph>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </Paragraph>

          <SectionHeading>7. Data Retention</SectionHeading>
          <Paragraph>
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by applicable laws (e.g., for tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.
          </Paragraph>

          <SectionHeading>8. Your Rights</SectionHeading>
          <Paragraph>
            Depending on your location and applicable data protection laws, you may have certain rights regarding your personal information, including the right to access, correct, update, or request deletion of your personal information. To exercise these rights, please contact us using the contact information provided below. We will respond to your request in accordance with applicable laws.
          </Paragraph>

          <SectionHeading>9. Children's Privacy</SectionHeading>
          <Paragraph>
            Our services are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to remove that information from our servers.
          </Paragraph>

          <SectionHeading>10. Third-Party Links</SectionHeading>
          <Paragraph>
            The Website may contain links to third-party websites and applications of interest, including advertisements and external services (such as broker platforms), that are not affiliated with us. Once you have used these links to leave the Website, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties.
          </Paragraph>

          <SectionHeading>11. Changes to This Privacy Policy</SectionHeading>
          <Paragraph>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </Paragraph>

          <SectionHeading>12. Contact Us</SectionHeading>
          <Paragraph>
            If you have questions or comments about this Privacy Policy, please contact us:
          </Paragraph>
          <ul className="list-none space-y-1 mb-4 text-gray-600">
            <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a></li>
            <li><strong>Via Contact Page:</strong> <Link href={contactPageUrl} legacyBehavior><a className="text-blue-600 hover:underline">Visit our Contact Page</a></Link></li>
            {/* Add physical address if required/applicable */}
            {/* <li><strong>Address:</strong> [Your Company Address]</li> */}
          </ul>

          <Paragraph className="mt-10 text-sm text-gray-500">
             <strong className="font-semibold">Disclaimer:</strong> This Privacy Policy is provided as a template. Consult with a legal professional to ensure compliance with all applicable laws and regulations before publishing.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;