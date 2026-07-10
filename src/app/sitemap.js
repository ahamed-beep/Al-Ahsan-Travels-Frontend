export default function sitemap() {
  const baseUrl = "https://alahsantravels.co.uk";

  const routes = [
    "",
    "hajjguidline",
    "shiftinghajj",
    "nonshiftinghajj",
    "umrahpage",
    "familyumrahpackage",
    "grouppackage",
    "threestarpackage",
    "fourstarpackage",
    "fivestarpackage",
    "umrahjanuary",
    "umrahfebruary",
    "umrahmarch",
    "umrahapril",
    "umrahmay",
    "umrahjune",
    "umrahjuly",
    "umrahaugust",
    "umrahseptember",
    "umrahoctober",
    "umrahnovember",
    "umrahdecember",
    "ramadanhajj",
    "secondashra",
    "thirdashra",
    "christmasumrahpackage",
    "clocktowerumrahpackage",
    "coupleumrahpackage",
    "easterumrahpackage",
    "londonumrahpackage",
    "manchesterumrahpackage",
    "flight",
    "contactus",
    "aboutus",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}