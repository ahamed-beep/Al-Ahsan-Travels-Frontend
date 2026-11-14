const sections = [
  {
    title: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how information may be collected, used, and protected when you visit our website. By continuing to use the website, you acknowledge this policy.",
      "We aim to handle personal information thoughtfully and to be clear about the choices available to you. Please review this page from time to time, as it may be updated.",
    ],
  },
  {
    title: "Personal Identification Information",
    paragraphs: [
      "We may receive personal information when you choose to contact us, request information, or use a feature on the website. This may include details you submit, such as your name and contact information.",
      "You can choose not to provide requested information, though some website features or responses may then be unavailable. Please only submit information that you are comfortable sharing.",
      "Information is used to respond to your request, provide the service you asked for, and maintain communications related to that request. We do not ask you to submit sensitive personal information through general website forms.",
    ],
  },
  {
    title: "Non-personal Identification Information",
    paragraphs: [
      "When you browse the website, technical details may be collected automatically. These can include browser type, device information, pages visited, and general usage data that helps us understand how the website is used.",
    ],
  },
  {
    title: "Web Browser Cookies",
    paragraphs: [
      "The website may use cookies or similar technologies to support basic functions and understand website traffic. Your browser settings can be used to manage or block cookies; some features may not work as expected if they are disabled.",
    ],
  },
  {
    title: "How We Collect Information",
    paragraphs: [
      "Information may be provided directly when you contact us or complete a website form. Limited technical information may also be collected automatically when you visit or interact with the website.",
      "We use information in ways that relate to your request and the operation of the website, and take reasonable steps to limit access to people who need it for those purposes.",
    ],
  },
  {
    title: "How We Use Collected Information",
    paragraphs: [
      "Information may be used to respond to messages, provide requested details, improve website content, and understand general visitor activity. We may also use it to keep the website reliable and secure.",
      "You may contact us if you have a question about information you have shared or would like to update a request you sent us.",
    ],
  },
  {
    title: "How We Protect Your Information",
    paragraphs: [
      "We use reasonable administrative and technical measures intended to protect information from unauthorized access, alteration, or disclosure. No method of transmission or storage can be guaranteed to be completely secure.",
      "Please take care when sharing information online and avoid sending confidential details through general contact forms.",
    ],
  },
  {
    title: "Information Sharing",
    paragraphs: [
      "We do not sell personal information submitted through this website. Information may be shared when needed to respond to your request, operate the website with service providers, or comply with a legal obligation.",
      "Where service providers assist with website operations, they should only use information as needed to perform those services.",
    ],
  },
  {
    title: "Links",
    paragraphs: [
      "Our website may contain links to other websites. Those websites have their own privacy practices and policies, which we encourage you to review. We are not responsible for the content or privacy practices of third-party websites.",
    ],
  },
  {
    title: "Changes to this privacy policy",
    paragraphs: [
      "We may update this Privacy Policy when our practices or website change. Updates will appear on this page, and continued use of the website after an update means you acknowledge the revised policy.",
    ],
  },
  {
    title: "Your acceptance of these terms",
    paragraphs: [
      "By using this website, you acknowledge that you have read this Privacy Policy. If you do not agree with it, please discontinue use of the website.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or information you have shared with us, please contact our team through the contact options on our website.",
    ],
  },
];

export default function PolicyContent() {
  return (
    <article className="mx-auto max-w-[1180px] px-5 py-7 sm:px-8 sm:py-9">
      <div className="space-y-5">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-1.5 text-sm font-bold leading-5 text-gray-800 sm:text-base">
              {section.title}
            </h2>
            <div className="space-y-2 text-[11px] leading-[1.65] text-gray-600 sm:text-xs">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}