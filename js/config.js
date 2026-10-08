/* ==========================================================================
   EDIT ONLY THIS FILE to change anything on the website.
   Push to GitHub and the page, vCard and QR code all update automatically.
   ========================================================================== */

window.PROFILE = {
  name: "Anisur Rahman Sajal",
  roles: ["Businessman", "Car Dealer", "Real Estate"],
  tagline: "Cars & Property — dealt with trust.",

  // Used for the QR code only when the page is opened from a file (not from the web).
  // On the live site the QR code always uses the real address automatically.
  siteUrl: "https://sakib69alive.github.io/Anisur-Rahman/",

  phone: "+8801911817122",
  whatsapp: "8801911817122", // digits only, with country code, no "+"

  /* ----------------------------------------------------------------------
     CONTACT LINKS
     A link shows up on the page (and in the vCard) only when `href` is filled
     (or `copy`, which makes the card copy that text when tapped — used for imo).
     To add one later: paste the link into `href` (and `display` if you want
     text under the name). Nothing else to change.
       Facebook   https://facebook.com/yourpage
       Messenger  https://m.me/yourpage
       Email      mailto:you@example.com
       Viber      viber://chat?number=%2B8801911817122
       Telegram   https://t.me/username
       Imo        paste your imo profile link here
     ---------------------------------------------------------------------- */
  links: [
    { id: "call",      label: "Call",      display: "+880 1911-817122", icon: "phone",     color: "#22c55e", href: "tel:+8801911817122" },
    { id: "whatsapp",  label: "WhatsApp",  display: "+880 1911-817122", icon: "whatsapp",  color: "#25d366", href: "https://wa.me/8801911817122?text=Hello%20Anisur%20Rahman%20Sajal%2C%20I%20found%20your%20digital%20card." },
    { id: "sms",       label: "SMS",       display: "Send a message",   icon: "sms",       color: "#38bdf8", href: "sms:+8801911817122" },
    { id: "email",     label: "Email",     display: "afrinr461@gmail.com",                 icon: "mail",      color: "#f97316", href: "mailto:afrinr461@gmail.com" },
    { id: "facebook",  label: "Facebook",  display: "facebook.com/anis.rhaman.121",                 icon: "facebook",  color: "#1877f2", href: "https://www.facebook.com/anis.rhaman.121" },
    { id: "messenger", label: "Messenger", display: "",                 icon: "messenger", color: "#a855f7", href: "" },
    { id: "imo",       label: "imo",       display: "+880 1911-817122 · tap to copy", icon: "imo", color: "#0ea5e9", href: "", copy: "+8801911817122" }, // imo has no public link by number, so tapping copies it
    { id: "viber",     label: "Viber",     display: "+880 1911-817122",                 icon: "viber",     color: "#7360f2", href: "viber://chat?number=%2B8801911817122" },
    { id: "telegram",  label: "Telegram",  display: "",                 icon: "telegram",  color: "#26a5e4", href: "" },
    { id: "instagram", label: "Instagram", display: "",                 icon: "instagram", color: "#e1306c", href: "" },
    { id: "linkedin",  label: "LinkedIn",  display: "",                 icon: "linkedin",  color: "#0a66c2", href: "" },
    { id: "youtube",   label: "YouTube",   display: "",                 icon: "youtube",   color: "#ff0033", href: "" },
    { id: "tiktok",    label: "TikTok",    display: "",                 icon: "tiktok",    color: "#ff0050", href: "" },
    { id: "website",   label: "Website",   display: "",                 icon: "globe",     color: "#d9b54a", href: "" },
    { id: "location",  label: "Office",    display: "",                 icon: "pin",       color: "#ef4444", href: "" } // e.g. a Google Maps link
  ],

  about:
    "A Bangladesh-based businessman working in car dealing and real estate. " +
    "Whether you want to buy, sell or exchange a car, or find the right property, " +
    "you get clear information, fair dealing and a direct line to me.",

  why: [
    { icon: "shield", title: "Transparent deals",  text: "Clear details and honest advice before you decide." },
    { icon: "clock",  title: "Quick response",     text: "Message on WhatsApp or call, and get a direct reply." },
    { icon: "heart", title: "Long-term trust", text: "Every deal is handled with care, start to finish." }
  ],

  /* ----------------------------------------------------------------------
     BUSINESSES
     `items` = list of what you do.
     `listings` = cars / properties to show as cards. Leave it empty [] until
     you have some. Each listing looks like this (all fields optional except title):
       { title: "Toyota Axio 2018", price: "৳ 15,50,000", meta: ["2018", "Hybrid", "Pearl White"],
         image: "assets/cars/axio.jpg", tag: "Available" }
     Put the photos in the assets/ folder.
     ---------------------------------------------------------------------- */
  businesses: [
    {
      id: "cars",
      icon: "car",
      title: "Car Dealership",
      subtitle: "Buy · Sell · Exchange",
      items: [
        "Buy and sell cars",
        "Car exchange and trade-in",
        "Paper, ownership & transfer guidance",
        "Honest price advice before you buy"
      ],
      cta: "Ask about cars",
      message: "Hello Anisur Rahman Sajal, I would like to know about the cars you have.",
      listings: []
    },
    {
      id: "property",
      icon: "building",
      title: "Real Estate",
      subtitle: "Buy · Sell · Rent",
      items: [
        "Apartments, flats and houses",
        "Land and plots",
        "Commercial space and shops",
        "Document and deal support"
      ],
      cta: "Ask about property",
      message: "Hello Anisur Rahman Sajal, I would like to know about the properties you have.",
      listings: []
    }
  ]
};
