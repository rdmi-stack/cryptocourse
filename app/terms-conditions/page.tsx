// app/terms-conditions/page.tsx
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

const TermsConditionsPage: React.FC = () => {
  const websiteName = "Dubai Club";
  const websiteUrl = "mydubaiclub.com";
  const companyName = "DUBAI CLUB VENTURES"; // From footer copyright
  const contactEmail = "support@mydubaiclub.com";
  const contactPageUrl = "/contact";
  const privacyPolicyUrl = "/privacy-policy";
  const refundPolicyUrl = "/refund-policy";
  const effectiveDate = "May 5, 2025"; // Replace with actual date
  const governingLaw = "the laws of India"; // Be more specific if advised by counsel
  const jurisdiction = "Agra, Uttar Pradesh, India"; // Location for disputes

  return (
    // Using light background for policy text readability
    <div className="bg-white text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-center text-gray-500 mb-10">
            Effective Date: {effectiveDate}
          </p>

          <Paragraph>
            Welcome to {websiteName}! These Terms and Conditions ("Terms") govern your use of the website located at {websiteUrl} (the "Site") and the investment guidance services, model portfolios, and related content provided by {companyName} ("Company", "we", "us", "our") (collectively, the "Service").
          </Paragraph>
          <Paragraph>
            By accessing or using our Site and Service, you agree to be bound by these Terms, our <Link href={privacyPolicyUrl} legacyBehavior><a className="text-blue-600 hover:underline">Privacy Policy</a></Link>, and our <Link href={refundPolicyUrl} legacyBehavior><a className="text-blue-600 hover:underline">Refund Policy</a></Link>. If you do not agree to these Terms, please do not use the Site or the Service.
          </Paragraph>

          <SectionHeading>1. Service Description and Important Disclaimers</SectionHeading>
          <Paragraph>
            <strong className="font-semibold">Guidance Only:</strong> The Service provides model portfolios, market analysis, AI-powered insights, and general investment guidance related primarily to the cryptocurrency market for informational and educational purposes only.
          </Paragraph>
          <Paragraph>
            <strong className="font-semibold">Not Financial Advice:</strong> {companyName} is <strong className="font-semibold uppercase">not</strong> a registered investment advisor, broker-dealer, financial analyst, financial bank, securities broker, or financial planner. We are not registered with the Securities and Exchange Board of India (SEBI) or any other regulatory body in any advisory capacity. The information provided through the Service does <strong className="font-semibold">not</strong> constitute personalized financial advice, investment advice, trading advice, or any other sort of advice. You should not construe any such information or other material as legal, tax, investment, financial, or other advice.
          </Paragraph>
          <Paragraph>
            <strong className="font-semibold">No Guarantees & Risk of Loss:</strong> All investments involve risk, including the potential for loss of principal. The cryptocurrency market is particularly volatile. We make no guarantees or representations regarding the accuracy, completeness, timeliness, or performance of any information or guidance provided. Past performance of any model portfolio or strategy discussed is not indicative of future results. We do not guarantee any specific outcome or profit.
          </Paragraph>
          <Paragraph>
            <strong className="font-semibold">User Responsibility:</strong> You are solely responsible for your own investment research and decisions. You should conduct your own thorough research and due diligence, and consider consulting with a qualified, independent financial advisor registered with relevant authorities before making any investment decisions based on the information provided by our Service. Any action you take upon the information on this website is strictly at your own risk.
          </Paragraph>
           <Paragraph>
            <strong className="font-semibold">No Fund Handling/Execution:</strong> {companyName} does not handle, manage, or custody client funds, nor do we execute trades on behalf of users. Our Service may provide links or redirections to third-party broker platforms, but your relationship and transactions with such platforms are governed entirely by their terms and policies.
          </Paragraph>

          <SectionHeading>2. User Accounts and Registration</SectionHeading>
          <Paragraph>
            To access certain features of the Service (e.g., premium portfolios), you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account password and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account. You must be at least 18 years old to register for an account and use the Service.
          </Paragraph>

          <SectionHeading>3. Subscriptions and Payment</SectionHeading>
          <Paragraph>
            Access to premium features of the Service requires a paid subscription. Subscription fees, durations, and billing cycles are specified at the time of purchase. By subscribing, you agree to pay the applicable fees.
          </Paragraph>
          <Paragraph>
            Payments are processed through third-party payment gateways. You agree to provide valid and current payment information. By providing payment information, you authorize us (or our third-party processor) to charge the specified fees on a recurring basis (if applicable) according to your chosen subscription plan. All fees are quoted in Indian Rupees (INR) unless otherwise specified. Please refer to our <Link href={refundPolicyUrl} legacyBehavior><a className="text-blue-600 hover:underline">Refund Policy</a></Link> for details on refunds. You are responsible for canceling your subscription before the renewal date to avoid future charges.
          </Paragraph>

          <SectionHeading>4. Intellectual Property Rights</SectionHeading>
          <Paragraph>
            The Site and Service, including all content, features, information, model portfolio names, methodologies (where proprietary), text, graphics, logos, images, and software ("Content"), are the property of {companyName} or its licensors and are protected by copyright, trademark, and other intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service and Content solely for your personal, non-commercial informational purposes, subject to these Terms. You agree not to reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the Content without our prior written consent.
          </Paragraph>

          <SectionHeading>5. Prohibited Uses</SectionHeading>
          <Paragraph>
            You agree not to use the Site or Service:
          </Paragraph>
           <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which, as determined by us, may harm the Company or users of the Site or expose them to liability.</li>
            <li>To scrape, crawl, data-mine, or otherwise extract data from the Site or Service without our express written permission.</li>
           </ul>

          <SectionHeading>6. Third-Party Links & Services</SectionHeading>
          <Paragraph>
            The Site may contain links to third-party websites or services that are not owned or controlled by {companyName}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services (including broker platforms). You acknowledge and agree that {companyName} shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </Paragraph>

          <SectionHeading>7. Termination</SectionHeading>
          <Paragraph>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion. Provisions of these Terms that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </Paragraph>

          <SectionHeading>8. Disclaimer of Warranties</SectionHeading>
          <Paragraph>
            The Site and Service are provided on an "AS IS" and "AS AVAILABLE" basis. {companyName} expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and accuracy or completeness of information. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.
          </Paragraph>

          <SectionHeading>9. Limitation of Liability</SectionHeading>
          <Paragraph>
            To the fullest extent permitted by applicable law, in no event shall {companyName}, its affiliates, directors, employees, agents, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, the Service or Site, including any investment losses incurred by you based on information obtained from the Service. Our total liability to you for all claims arising out of or relating to these Terms or the Service is limited to the amount you paid us for the Service in the 12 months preceding the claim (if any).
          </Paragraph>

          <SectionHeading>10. Indemnification</SectionHeading>
          <Paragraph>
            You agree to defend, indemnify, and hold harmless {companyName}, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service, including, but not limited to, any investment decisions made based on information obtained from the Service.
          </Paragraph>

          <SectionHeading>11. Governing Law and Dispute Resolution</SectionHeading>
          <Paragraph>
            These Terms shall be governed and construed in accordance with {governingLaw}, without regard to its conflict of law provisions. You agree that any legal action or proceeding arising out of or relating to these Terms or the Service shall be brought exclusively in the competent courts located in {jurisdiction}, and you irrevocably consent to the jurisdiction of such courts.
             {/* Note: Consider an arbitration clause if preferred and legally advised */}
          </Paragraph>

          <SectionHeading>12. Changes to Terms</SectionHeading>
          <Paragraph>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect (e.g., via email or a notice on the Site). What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
          </Paragraph>

          <SectionHeading>13. Contact Information</SectionHeading>
           <Paragraph>
            If you have any questions about these Terms, please contact us:
          </Paragraph>
           <ul className="list-none space-y-1 mb-4 text-gray-600">
             <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a></li>
             <li><strong>Via Contact Page:</strong> <Link href={contactPageUrl} legacyBehavior><a className="text-blue-600 hover:underline">Visit our Contact Page</a></Link></li>
          </ul>

          <SectionHeading>14. Miscellaneous</SectionHeading>
           <Paragraph>
             These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and {companyName} regarding our Service. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
           </Paragraph>

           <Paragraph className="mt-10 text-sm text-gray-500">
              <strong className="font-semibold">Disclaimer:</strong> These Terms and Conditions are provided as a template. You must consult with a qualified legal professional to ensure compliance with all applicable laws and regulations and to tailor the terms precisely to your business model and risk tolerance before publishing.
            </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;