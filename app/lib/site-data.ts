export const siteConfig = {
  name: "Messy Mamas NW",
  tagline: "You Make the Mess. We Handle the Rest.",
  description:
    "Practical, judgment-free household support for Bellingham, Ferndale, and surrounding Whatcom County homes.",
  serviceArea: "Bellingham, Ferndale, and surrounding Whatcom County communities",
  contactPath: "/contact",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Request Help" },
] as const;

export const services = [
  {
    title: "Laundry Pickup & Delivery",
    status: "Active launch service",
    summary:
      "A simple way to catch up on the piles that start to take over the week.",
    includes: [
      "Pickup coordination and drop-off scheduling",
      "Washing, drying, and folding for standard household laundry",
      "Return of clean, sorted laundry to the home",
    ],
    excludes: [
      "Specialized fabric or stain treatment beyond normal household care",
      "Large-volume or commercial laundry needs",
    ],
  },
  {
    title: "Garage Sale Leftover Pickup",
    status: "Soft-launch option",
    summary:
      "Clear out the leftovers after the sale, donation pile, or end-of-event sorting. ",
    includes: [
      "Sorting leftover items by keep, donate, trash, or recycle",
      "Bagging or staging items for pickup or drop-off",
      "Final sweep of sale areas and staging zones",
    ],
    excludes: [
      "Heavy lifting beyond manageable household sorting",
      "Items requiring special handling or disposal approval",
    ],
  },
  {
    title: "Donation Drop-Off",
    status: "Active launch service",
    summary:
      "Help gather, load, and deliver household goods to local donation channels. ",
    includes: [
      "Item sorting and donation-ready preparation",
      "Load-out assistance and vehicle staging",
      "Drop-off coordination with local donation partners",
    ],
    excludes: [
      "Pickup of items from unsafe or inaccessible locations",
      "Items that do not meet the donation partner's intake rules",
    ],
  },
  {
    title: "Light Junk Removal",
    status: "Soft-launch option",
    summary:
      "Remove a manageable load of no-longer-needed household clutter without the overwhelm. ",
    includes: [
      "Simple collection of targeted items",
      "Load staging and responsible removal plan",
      "Walk-through confirmation before departure",
    ],
    excludes: [
      "Hazardous materials, e-waste, or specialty disposal",
      "Large renovation debris or construction-scale cleanup",
    ],
  },
  {
    title: "Dishes and Kitchen Cleanup",
    status: "Expanding service",
    summary:
      "Restock the rhythm of a busy kitchen when the dishes and counters start taking over. ",
    includes: [
      "Dishwashing and kitchen reset tasks",
      "Counter and surface tidying in active-use zones",
      "Quick kitchen reset after a meal or event",
    ],
    excludes: [
      "Deep cleaning of built-up grease or major appliance detailing",
      "Biohazard cleaning beyond standard household care",
    ],
  },
  {
    title: "Decluttering and Organization",
    status: "Expanding service",
    summary:
      "Create order without judgment so daily life feels lighter and easier to manage. ",
    includes: [
      "Tidy and sort targeted spaces",
      "Create simple organizing systems for active household areas",
      "Bag and separate donation, trash, and keep piles",
    ],
    excludes: [
      "Professional organizing or full-home redesign",
      "Work requiring a licensed contractor or building modifications",
    ],
  },
] as const;

export const serviceHighlights = [
  "Built around real life, not perfection",
  "Judgment-free support for busy or overwhelmed homes",
  "Flexible services with clear boundaries",
  "Designed for soft-launch service validation",
] as const;

export const values = [
  {
    title: "Practical support",
    description:
      "Useful help that meets the moment—whether that means laundry, a quick reset, or making the next step obvious.",
  },
  {
    title: "No shame, no lecture",
    description:
      "You do not need to justify your home or your life. Messes are normal, and help should feel respectful and relieving.",
  },
  {
    title: "Local and familiar",
    description:
      "A neighborhood-first approach built around Whatcom County families, routines, and real-world household needs.",
  },
] as const;

export const howItWorks = [
  {
    title: "Choose a service",
    description:
      "Tell us what needs attention most; choose the kind of help you need and what matters most right now.",
  },
  {
    title: "Share the basics",
    description:
      "Describe the space, the workload, and any access needs so we can understand the scope before moving forward.",
  },
  {
    title: "Receive a reply",
    description:
      "You will hear back with next steps, scheduling guidance, and confirmation before the work is booked.",
  },
  {
    title: "Schedule and reset",
    description:
      "Once details are confirmed, the project can move forward in a planned, respectful way that fits your home.",
  },
] as const;

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "Messy Mamas NW is currently focused on Bellingham, Ferndale, and nearby Whatcom County communities. Availability outside the primary service area is considered individually based on timing and logistics.",
  },
  {
    question: "How do I request help?",
    answer:
      "Use the intake form on the contact page to tell us what kind of support you need, what area of the home is involved, and when you would like help. A follow-up message with next steps will come after review.",
  },
  {
    question: "Are prices published?",
    answer:
      "Not yet. The service model is intentionally soft-launch and quote-based so estimates reflect the actual job needs, scope, and access requirements before any commitment is made.",
  },
  {
    question: "What if I need help with laundry?",
    answer:
      "Laundry support is one of the core pilot services. Just tell us how much laundry is involved, whether there are access or pickup constraints, and whether you need a simple sort-and-return workflow or a larger reset.",
  },
  {
    question: "What about donation items?",
    answer:
      "Donation drop-off and sorting can be coordinated as part of a request. Items may be sorted and staged before delivery, but the final donation process still depends on partner intake rules and the condition of the items.",
  },
  {
    question: "Do you handle unsafe or heavy jobs?",
    answer:
      "Not every household task is a fit for this service model. Hazardous materials, unsafe access, heavy debris, construction-scale cleanup, or work that requires professional handling are not included in the launch scope.",
  },
  {
    question: "Will my information be private?",
    answer:
      "Your request details are used only to understand the service need and coordinate next steps. Privacy expectations are still being formalized for the soft launch, and any public-facing policy updates will be added as the business grows.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "A formal cancellation policy is still being finalized for the pilot phase. Until then, the service request process will clarify scheduling expectations and rescheduling needs directly with each customer.",
  },
] as const;

export const blogPosts = [
  {
    title: "Three ways to make a laundry cycle feel manageable again",
    summary:
      "Practical steps to reduce the mental load and build a laundry rhythm that actually lasts.",
    href: "/blog#laundry-rhythm",
  },
  {
    title: "A gentle approach to sorting donation piles",
    summary:
      "How to separate what is useful, what should go, and what is worth letting go of without getting stuck.",
    href: "/blog#donation-piles",
  },
  {
    title: "Small reset routines that keep clutter from taking over",
    summary:
      "A realistic, low-pressure plan for the rooms that seem to collect all the mess.",
    href: "/blog#reset-routines",
  },
] as const;
