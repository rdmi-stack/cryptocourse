// app/refund-policy/page.tsx
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

const RefundPolicyPage: React.FC = () => {
  const websiteName = "Dubai Club";
  const companyName = "DUBAI CLUB VENTURES";
  const contactEmail = "support@mydubaiclub.com";
  const contactPageUrl = "/contact";
  const lastUpdatedDate = "May 5, 2025"; // Replace with actual date

  return (
    // Using light background for policy text readability
    <div className="bg-white text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Refund Policy
          </h1>
          <p className="text-center text-gray-500 mb-10">
            Last Updated: {lastUpdatedDate}
          </p>

          <SectionHeading>1. Introduction</SectionHeading>
          <Paragraph>
            Thank you for subscribing to {websiteName}. This Refund Policy outlines the terms and conditions under which refunds are processed for subscription fees paid to {companyName} ("we", "us", "our") for access to our investment guidance services and model portfolios via {websiteName}. Our goal is to provide valuable insights, but due to the nature of digital content and information services, our refund policy is specific. Please read it carefully.
          </Paragraph>

          <SectionHeading>2. General Policy - Subscription Fees</SectionHeading>
          <Paragraph>
            Dubai Club offers subscription-based access to premium content, including model portfolios, market insights, and investment guidance. Once a subscription fee is paid and access to the service is granted, it is generally <strong className="font-semibold">non-refundable</strong>. This is because the value of our service lies in the immediate access to proprietary information, research, and analysis.
          </Paragraph>

          <SectionHeading>3. Eligibility for Refund</SectionHeading>
          <Paragraph>
            While subscriptions are typically non-refundable, exceptions may be considered under the following specific circumstances:
          </Paragraph>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>
              <strong className="font-semibold">Accidental Duplicate Purchase:</strong> If you were accidentally charged multiple times for the same subscription period due to a technical error during the payment process. Proof of duplicate charges will be required.
            </li>
            <li>
              <strong className="font-semibold">Service Non-Accessibility (Our Fault):</strong> If you are unable to access the subscribed services for an extended period (e.g., more than 48 consecutive hours) due to a technical failure originating solely from our platform, and we are unable to resolve the issue within a reasonable timeframe after you report it. General internet connectivity issues or problems with your own devices do not qualify.
            </li>
            {/* Optional: Add a very short initial guarantee if decided by business/legal */}
            {/* <li>
              <strong className="font-semibold">Initial Satisfaction Window (If Applicable):</strong> [Example - REMOVE IF NOT OFFERED] If explicitly stated during a specific promotion, a refund may be requested within the first 24 hours of the *initial* subscription purchase, provided the service has not been significantly used (e.g., extensive downloading of reports, repeated access to all portfolio details). This is offered at our sole discretion and may not always be available.
            </li> */}
          </ul>
          <Paragraph>
            Refunds will <strong className="font-semibold">not</strong> be issued for reasons including, but not limited to:
          </Paragraph>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Dissatisfaction with the investment guidance, portfolio performance, or market outcomes. Investment involves risk, and past performance does not guarantee future results.</li>
            <li>Change of mind after purchasing or accessing the subscription content.</li>
            <li>Failure to use the service during the subscription period.</li>
            <li>Forgetting to cancel a recurring subscription before the renewal date (see Section 6).</li>
            <li>Technical issues related to your own device, internet connection, or software incompatibilities.</li>
          </ul>


          <SectionHeading>4. How to Request a Refund</SectionHeading>
          <Paragraph>
            To request a refund based on the eligible circumstances listed above (Section 3), you must contact our support team within <strong className="font-semibold">7 (seven) days</strong> of the charge occurring (for duplicate payments) or the service accessibility issue beginning.
          </Paragraph>
          <Paragraph>
            Please email <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a> with the following information:
          </Paragraph>
          <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
            <li>Your full name and registered email address.</li>
            <li>Subscription details (plan name, date of purchase/charge).</li>
            <li>Proof of purchase (receipt or transaction ID).</li>
            <li>A clear explanation of the reason for the refund request, including supporting evidence (e.g., proof of duplicate charge, description and timeline of accessibility issues).</li>
          </ul>
          <Paragraph>
            Alternatively, you can submit your request via our <Link href={contactPageUrl} legacyBehavior><a className="text-blue-600 hover:underline">Contact Page</a></Link>. We reserve the right to deny refund requests that do not meet the eligibility criteria or lack sufficient information.
          </Paragraph>

          <SectionHeading>5. Processing Refunds</SectionHeading>
          <Paragraph>
            Once your refund request is received and reviewed, we will notify you of the approval or rejection of your request. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within approximately <strong className="font-semibold">7-14 business days</strong>, depending on your payment provider.
          </Paragraph>

          <SectionHeading>6. Subscription Renewals</SectionHeading>
          <Paragraph>
            If your subscription is set to automatically renew, you are responsible for canceling it prior to the renewal date if you do not wish to continue. Subscription fees charged on or after the renewal date are generally non-refundable. Instructions on how to manage or cancel your subscription can typically be found in your account settings or by contacting support.
          </Paragraph>

          <SectionHeading>7. Partial Refunds</SectionHeading>
          <Paragraph>
            We do not offer partial or pro-rata refunds for unused portions of a subscription term.
          </Paragraph>

          <SectionHeading>8. Policy Changes</SectionHeading>
          <Paragraph>
            We reserve the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting the updated policy on the Website. Your continued use of the service after any such changes constitutes your acceptance of the new Refund Policy.
          </Paragraph>

          <SectionHeading>9. Contact Information</SectionHeading>
          <Paragraph>
            If you have any questions about this Refund Policy, please contact us:
          </Paragraph>
          <ul className="list-none space-y-1 mb-4 text-gray-600">
            <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a></li>
            <li><strong>Via Contact Page:</strong> <Link href={contactPageUrl} legacyBehavior><a className="text-blue-600 hover:underline">Visit our Contact Page</a></Link></li>
          </ul>

           <Paragraph className="mt-10 text-sm text-gray-500">
             <strong className="font-semibold">Note:</strong> This Refund Policy is subject to our main Terms & Conditions. Please consult with a legal professional to ensure this policy complies with all applicable laws and regulations before publishing.
           </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;