// Agency website static data

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string[];
  thumbnail: string;
  metrics: { label: string; value: string }[];
  description: string;
  challenge: string;
  solution: string;
  results: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Services data
export const services: Service[] = [
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "Data-driven strategies that align with your business goals and drive measurable growth across all digital channels.",
    icon: "strategy",
    features: [
      "Market Research & Analysis",
      "Competitor Benchmarking",
      "Digital Roadmap Development",
      "KPI Framework Design",
    ],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Crafting distinctive brand identities that resonate with your audience and set you apart in the marketplace.",
    icon: "brand",
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Messaging & Tone of Voice",
      "Brand Strategy",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "High-performance websites and applications built with cutting-edge technology for optimal user experience.",
    icon: "web",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Development",
      "Performance Optimization",
    ],
  },
  {
    id: "seo-content",
    title: "SEO & Content",
    description: "Strategic content creation and optimization that improves visibility and drives organic traffic growth.",
    icon: "seo",
    features: [
      "Technical SEO Audits",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Engaging social media strategies that build communities and amplify your brand across platforms.",
    icon: "social",
    features: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Influencer Partnerships",
    ],
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description: "ROI-focused campaigns across paid channels that maximize conversions and minimize acquisition costs.",
    icon: "performance",
    features: [
      "PPC & Paid Social",
      "Conversion Optimization",
      "A/B Testing",
      "Marketing Automation",
    ],
  },
];

// Case studies data
export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "nexus-rebrand",
    title: "Nexus Tech Rebrand",
    client: "Nexus Technologies",
    category: ["Brand Identity", "Web Development"],
    thumbnail: "/images/case-study-1.jpg",
    metrics: [
      { label: "Brand Awareness", value: "+340%" },
      { label: "Lead Generation", value: "+180%" },
      { label: "Website Traffic", value: "+250%" },
    ],
    description: "A complete brand transformation for a leading tech startup, establishing their position as an industry innovator.",
    challenge: "Nexus Technologies needed to transition from a B2B-focused startup to a recognized industry leader. Their existing brand failed to communicate their innovative approach and cutting-edge solutions.",
    solution: "We developed a comprehensive rebrand strategy including a new visual identity, messaging framework, and a high-performance website that showcased their technology leadership.",
    results: "The rebrand resulted in a 340% increase in brand awareness, 180% increase in qualified leads, and positioned Nexus as a thought leader in their space.",
  },
  {
    id: "2",
    slug: "artisan-ecommerce",
    title: "Artisan E-Commerce Platform",
    client: "Artisan Collective",
    category: ["Web Development", "Digital Strategy"],
    thumbnail: "/images/case-study-2.jpg",
    metrics: [
      { label: "Online Revenue", value: "+420%" },
      { label: "Conversion Rate", value: "+85%" },
      { label: "Average Order Value", value: "+60%" },
    ],
    description: "Transforming a traditional artisan marketplace into a thriving digital commerce ecosystem.",
    challenge: "Artisan Collective needed to digitize their marketplace while maintaining the personal touch that made their brand special. They required a platform that could handle high traffic while providing a seamless shopping experience.",
    solution: "We built a custom e-commerce platform with advanced filtering, personalized recommendations, and an intuitive checkout process. The design celebrated the artisan nature of their products.",
    results: "The new platform drove a 420% increase in online revenue with an 85% improvement in conversion rates and 60% higher average order values.",
  },
  {
    id: "3",
    slug: "velocity-growth",
    title: "Velocity Growth Campaign",
    client: "Velocity Fitness",
    category: ["Performance Marketing", "Social Media"],
    thumbnail: "/images/case-study-3.jpg",
    metrics: [
      { label: "New Members", value: "+12K" },
      { label: "Cost Per Acquisition", value: "-45%" },
      { label: "Social Engagement", value: "+500%" },
    ],
    description: "A multi-channel growth campaign that transformed a regional fitness brand into a national phenomenon.",
    challenge: "Velocity Fitness wanted to expand from 5 locations to 25 within two years. They needed a scalable marketing strategy that could drive membership growth while maintaining brand quality.",
    solution: "We developed an integrated campaign combining performance marketing, influencer partnerships, and a user-generated content strategy that turned members into brand ambassadors.",
    results: "The campaign generated 12,000 new members in the first year while reducing cost per acquisition by 45% and increasing social engagement by 500%.",
  },
  {
    id: "4",
    slug: "fintech-launch",
    title: "FinFlow Product Launch",
    client: "FinFlow",
    category: ["Digital Strategy", "Performance Marketing"],
    thumbnail: "/images/case-study-4.jpg",
    metrics: [
      { label: "App Downloads", value: "500K+" },
      { label: "User Retention", value: "78%" },
      { label: "Media Impressions", value: "50M+" },
    ],
    description: "Launching a disruptive fintech app into a crowded market with a comprehensive go-to-market strategy.",
    challenge: "FinFlow was entering a competitive fintech space dominated by established players. They needed a launch strategy that would cut through the noise and rapidly acquire users.",
    solution: "We created a phased launch strategy with teaser campaigns, influencer partnerships, and a referral program that incentivized viral growth. Our PR efforts secured major media coverage.",
    results: "The launch exceeded all targets with 500K+ downloads in the first quarter, 78% user retention, and 50M+ media impressions.",
  },
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "They transformed our digital presence completely. The strategic approach and execution quality exceeded our expectations. Our leads have tripled since launching the new website.",
    author: "Sarah Mishra",
    role: "CEO",
    company: "Nexus Technologies",
  },
  {
    id: "2",
    quote: "Working with this team was a game-changer for our business. Their data-driven approach to marketing delivered results we didn't think were possible.",
    author: "Rahul Singh",
    role: "Founder",
    company: "Velocity Fitness",
  },
  {
    id: "3",
    quote: "The attention to detail and creative excellence is unmatched. They didn't just deliver a website; they created an experience that truly represents our brand.",
    author: "Abhishek Roy",
    role: "Creative Director",
    company: "Artisan Collective",
  },
  {
    id: "4",
    quote: "From strategy to execution, every step was handled with professionalism and expertise. The ROI on our marketing investment has been exceptional.",
    author: "Anya Patel",
    role: "CMO",
    company: "FinFlow",
  },
];

// Client logos (company names for display)
export const clients = [
  "Nexus",
  "Velocity",
  "Artisan",
  "FinFlow",
  "TechCorp",
  "Innovate",
  "Quantum",
  "Stellar",
  "Pulse",
  "Apex",
];

// Stats data
export const stats: Stat[] = [
  { label: "Projects Delivered", value: "100", suffix: "+" },
  { label: "Happy Clients", value: "25", suffix: "+" },
  { label: "Years Experience", value: "3", suffix: "" },
  { label: "Team Members", value: "20", suffix: "+" },
];

// Team members
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Chetan Pratap Singh",
    role: "Founder & CEO",
    bio: "With 3 years in digital marketing, Chetan founded the agency with a vision to blend creativity with data-driven strategy.",
    image: "/images/team-1.jpg",
  },
  {
    id: "2",
    name: "Shalini",
    role: "Creative Director",
    bio: "Shalini leads our creative team, bringing award-winning design expertise and a passion for innovative visual storytelling.",
    image: "/images/team-2.jpg",
  },
  {
    id: "3",
    name: "Devesh Pal",
    role: "Head of Strategy",
    bio: "Devesh combines analytical rigor with creative thinking to develop strategies that drive measurable business growth.",
    image: "/images/team-3.jpg",
  },
  {
    id: "4",
    name: "Sanjay",
    role: "Technical Director",
    bio: "Sanjay oversees all technical projects, ensuring cutting-edge solutions that perform flawlessly at scale.",
    image: "/images/team-4.jpg",
  },
];

// Company values
export const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries to deliver solutions that set new industry standards.",
  },
  {
    title: "Data-Driven",
    description: "Every decision is backed by insights, ensuring strategies that deliver measurable results.",
  },
  {
    title: "Client Partnership",
    description: "We work as an extension of your team, invested in your success as much as you are.",
  },
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we create and deliver.",
  },
];

// Contact information
export const contactInfo = {
  address: "Rajgarh Jhansi, Uttar Pradesh, India",
  phone: "+91 88580 56242",
  email: "moneymantra.agency@gmail.com",
  socials: {
    twitter: "https://twitter.com/agency",
    linkedin: "https://linkedin.com/company/agency",
    instagram: "https://instagram.com/agency",
  },
};
