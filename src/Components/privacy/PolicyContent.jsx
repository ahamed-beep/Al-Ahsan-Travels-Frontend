const sections = [
  {
    title: "Introduction",
    paragraphs: [
      "This policy at https://alahsantravels.co.uk/ deals with the data that is collected on this website and the usage of that data. When you make a decision to carry on with using the services we provide, you are agreeing to the procedure and method we use in conducting our services.",
    ],
  },
  {
    title: "Personal Identification Information",
    paragraphs: [
      "The data which this website collects is your personal information like your name and email address. There are several other aspects of your details which we are interested in, some of which include more of a general set of data which does not have anything to do with you alone, it is more for the purpose of learning more about the demographics of our website’s visitors such as age, gender, area ZIP code and preferences. Specifications about the gadget you are using to reach this website are also collected which can include the IP address and the exact time at which you came across our website.",
      "Please note that collection of personal identification information from users can be done in a variety of ways, including, but not limited to, when users visit our website, subscribe to the newsletter, fill out a form, live chat support and in connection with other activities, services, features or resources we make available on our website. Users may visit our website anonymously. We will collect personal identification information from users only if they voluntarily submit such information to us, we also request you to select a login name and password in order to contact some of our valued services. To have analysis about the advertisement campaigns, Al Ahsan Travels may ask you that from where you knew about Al Ahsan Travels. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain site related activities."
      ,
      "Please note that we require your personal or business e-mail address in order to relay you verification of online bookings, special customer service emails and to verify your new member registration. Throughout your member registration, you will have the preference to take delivery of travel offers by email – if you do not wish to carry on to receive these travel offers by email. You can eschew at any-time by emailing to info@alahsantravels.co.uk policy described beneath."
    ],
  },
  {
    title: "Non-personal Identification Information",
    paragraphs: [
      "We could collect non-personal identification data concerning users whenever they interact with our web site. Non-personal identification data could embody the browser name, the kind of laptop or PC and technical data for the connection of users to our web site, that can be OS and internet service providers utilized and other similar data.",
    ],
  },
  {
    title: "Web Browser Cookies",
    paragraphs: [
      "For the sake of improving effective and useful experiences for visitors on Al Ahsan Travels site. We keep permanent cookies. (A Cookie is a file sent by the website to the user’s hard drive. The next visit our site may ask to recover those cookies). User may choose to set their web browser to refuse cookies, or to notify you when cookies are being sent. If they do so, note that some parts of the site may not work properly.",
    ],
  },
  {
    title: "How We Use Collected Information",
    paragraphs: [
      "Al Ahsan Travels may collect and use users’ personal information for the following purposes:",
      "• To improve user experience",
      "We may use feedback you provide to improve our products and services.",
      "• To send systematic emails",
      "We may use the e-mail address to reply to clients’ enquiries, questions, and/or alternative requests. If a user decides to opt-in to our listing, they’re going to receive emails which contain company news, updates, connected product or service info, etc. If at any time the user would like to unsubscribe from receiving future emails, they will do thus by contacting us at info@alahsantravels.co.uk"
    ],
  },
  {
    title: "How We Protect Your Information",
    paragraphs: [
      "We ensure that whatever details of yourself you decide to trust us with is protected strictly. This website is designed to certify that not a bit of the detail which you provide is subject to any unlawful access. The highly sensitive details like your credit card number or any passwords are strictly protected making use of encryption systems and software. You should be free of any worries when sharing any of the required material with us and not fear that our system will allow any sort of illegal usage of the provided data that you allowed us to access.",
      "We adopt acceptable knowledge assortment, storage and process practices and security measures to safeguard against unauthorized access, alteration, revealing or destruction of your personal data, username, password, dealing data and knowledge hold on our website.",
      "Our website is in compliance with PCI vulnerability standards so as to make as secure of associate setting as attainable for users."
    ],
  },
  {
    title: "Information Sharing",
    paragraphs: [
      "Please note that we don’t sell, trade, or rent users personal identification information to others. The data gathered from the clients may be move to, and stored at, an intention outside the European Economic Area (“EEA”). It may also be process by staff working outside the EEA who works for us or for one of our suppliers. Such staff perhaps engaged in, among different things, the fulfilment of your order, the process of your payment details and also the provision of setback services. By submitting your personal information, you be in agreement to the current transfer, storing or process. We’ll take all steps realistically necessary to confirm that your information is treated steadily in secure manner and in accordance with this privacy policy.",
      "The data provided or received by customer is managed in a secure manner. We can use this data for market research and analysis. Mostly Al Ahsan Travels has expert for analysis and research for the market. Al Ahsan Travels may hire a 3rd party for the sake of market research and analysis but Al Ahsan Travels always make secrecy agreement with that 3rd party, for keeping the data secure and utilizing solely for completing the explicit project."
    ],
  },
  {
    title: "Links",
    paragraphs: [
      "Al Ahsan Travels might contain links to other websites. We have aligned with some of them. Please note that when you click on one of these links, you are ‘clicking’ to an additional website. We persuade you to read the privacy statements of these linked sites as their privacy policy may be different from ours. On the other hand, our partnered sites have the same look and seemed to be ours, and may only utilize the personally exclusive information collected to accomplish services they are designated to offer.",
    
    ],
  },
  {
    title: "Changes to this privacy policy",
    paragraphs: [
      "Al Ahsan Travels has the discretion to update this privacy policy at any time. In order to do so, we can update it on our website or notify through an email. We always encourage users to check our website for any changes to remain enlightened about how we tend to guard the personal data we collect. You acknowledge and agree that it’s your responsibility to review this privacy policy intermittently and become tuned in to modifications.",
    ],
  },

  {
    title: "Your acceptance of these terms",
    paragraphs: [
      "By using this website, you signify your acceptance and agreement of the policies. If you do not agree to the policies, please do not use our website. Your continued use of the website following the posting of changes to this policy will be deemed your acceptance of those changes.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have any queries about this Privacy Policy, the practices of this site, or your dealings with this site, please feel free contact us at any-time:",
        "Al Ahsan Travels",
            "https://alahsantravels.co.uk/",
    ],
  },
];

function renderWithLinks(text) {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1C398E] font-inter underline hover:text-blue-800"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default function PolicyContent() {
  return (
    <article className="mx-auto max-w-[1180px] px-5 py-7 sm:px-0 sm:py-9">
      <div className="space-y-5">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-1.5 text-[21px] leading-[30px]  font-inter font-bold md:leading-5 text-[#101828] sm:text-[36px]">
              {section.title}
            </h2>
            <div className="md:space-y-4 mt-5 md:mt-8 mb-8 md:mb-15 font-inter leading-[28px] text-[16px] md:leading-[31px] text-[#4A5565] sm:text-[18px] ">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{renderWithLinks(paragraph)}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}