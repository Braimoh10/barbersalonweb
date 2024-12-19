import {
  DropIcon,
  FacebookIcon,
  HairdryerIcon,
  instagramIcon,
  RazorIcon,
  ScissorsIcon,
  XIcon,
} from "../assets/icons";
import { Barber1, Barber2, Barber3, Barber4, Image1, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from "../assets/images";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Service",
    path: "/service",
  },
  // {
  //   name: "Pricing",
  //   path: "/pricing",
  // },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const services = [
  {
    icon: ScissorsIcon,
    title: "Hairy services",
    desc: "experience precision cuts that range from classic to contemporary styles. our barbers will work with you to create a look that suits your personality and lifestyle.",
  },
  {
    icon: DropIcon,
    title: "Chemical services",
    desc: "Maintain your beard with our expert trimming and shaping services. We also offer luxurious hot towel shaves for a smooth finish that leaves your skin refreshed.",
  },
  {
    icon: HairdryerIcon,
    title: "styling",
    desc: "From sleek hairstyles to textured looks, we’ll help you achieve the perfect finish for any occasion. Our blowout services add volume and shine, making you look and feel your best.",
  },
  {
    icon: RazorIcon,
    title: "Beard grooming",
    desc: "Maintain your beard with our expert trimming and shaping services. We also offer luxurious hot towel shaves for a smooth finish that leaves your skin refreshed.",
  },
];

export const workHours = [
  { day: "Monday", hours: "9 AM - 5 PM" },
  { day: "Tuesday", hours: "9 AM - 5 PM" },
  {
    day: "Sunday",
    hours: "closed",
  },
];

export const teamMembers = [
  {
    name: "John Doe",
    title: "Senior Barber",
    imgSrc: Barber1, // Replace with actual image URL
    socialLinks: [
      { platform: 'facebook', icon: FacebookIcon },
      { platform: 'instagram', icon: instagramIcon },
      { platform: 'twitter', icon: XIcon },
    ],
  },
  {
    name: "Jane Smith",
    title: "Master Stylist",
    imgSrc: Barber2, // Replace with actual image URL
    socialLinks: [
      { platform: 'facebook', icon: FacebookIcon },
      { platform: 'instagram', icon: instagramIcon },
      { platform: 'twitter', icon: XIcon },
    ],
  },
  {
    name: "Mike Johnson",
    title: "Lead Barber",
    imgSrc: Barber3, // Replace with actual image URL
    socialLinks: [
      { platform: 'facebook', icon: FacebookIcon },
      { platform: 'instagram', icon: instagramIcon },
      { platform: 'twitter', icon: XIcon },
    ],
  },
  {
    name: "Emily Davis",
    title: "Senior Barber",
    imgSrc: Barber4, // Replace with actual image URL
    socialLinks: [
       { platform: 'facebook', icon: FacebookIcon },
        { platform: 'instagram', icon: instagramIcon },
        { platform: 'twitter', icon: XIcon },
    ],
  },
  // Add more members as needed
];

export const testimonials = [
  {
    name: "John D.",
    desc: '"I’ve been going to this barber for over a year now, and I’ve never been disappointed. The staff is super friendly, and they always know exactly how I want my haircut. Highly recommend!"',
  },

  {
    name: "Mike R.",
    desc: "Best beard trim I’ve ever had! The attention to detail is unmatched, and I always leave feeling fresh and confident. Can't recommend this place enough!",
  },

  {
    name: "Sarah T.",
    desc: "Finally found my go-to place for haircuts! The atmosphere is welcoming, and the barbers really take their time to make sure everything is perfect. Love my new look!",
  },

  {
    name: "Emily S.",
    desc: "I brought my son in for his first haircut, and it was such a great experience. The barber was patient and made him feel at ease. We’ll definitely be back!",
  },

  {
    name: "Alex P.",
    desc: "Awesome service and a great vibe! The barbers are skilled and really listen to what you want. I walked out with the best haircut I’ve had in years.",
  },
];

export const footerLinks = [
  {
    title: "contact us",
    links: [
      { name: "123 Barber St.", path: "/" },
      { name: "City, State, ZIP", path: "/" },
      { name: "Phone: (123) 456-7890", path: "/" },
      { name: "Email: info@yourbarbersalon.com", path: "/" },
    ],
  },

  {
    title: "quick links",
    links: [
      { name: "home", path: "/" },
      { name: "about us", path: "/" },
      { name: "our services", path: "/" },
      { name: "gallery", path: "/" },
      { name: "contact  us", path: "/" },
    ],
  },

  {
    title: "our services",
    links: [
      { name: "hair services", path: "/" },
      { name: "chemical services", path: "/" },
      { name: "beard grooming", path: "/" },
      { name: "styling", path: "/" },
    ],
  },
];

export const socialMedia = [
  {
    src: FacebookIcon,
    url: "/",
  },
  {
    src: XIcon,
    url: "/",
  },
  {
    src: instagramIcon,
    url: "/",
  },
];

export const pricing = [
    {
      category: 'Haircuts',
      items: [
        { name: 'Classic Cut', price: 25 },
        { name: 'Fade Cut', price: 30 },
        { name: 'Buzz Cut', price: 20 },
      ],
    },
    {
      category: 'Beard Grooming',
      items: [
        { name: 'Beard Trim', price: 15 },
        { name: 'Full Beard Shave', price: 25 },
      ],
    },
    {
      category: 'Shaving Services',
      items: [
        { name: 'Traditional Razor Shave', price: 30 },
        { name: 'Head Shave', price: 25 },
      ],
    },
    {
      category: 'Hair Styling',
      items: [
        { name: 'Styling Products Application', price: 10 },
        { name: 'Special Occasion Styling', price: 40 },
      ],
    },
    {
      category: 'Hair Coloring',
      items: [
        { name: 'Full Color', price: 60 },
        { name: 'Highlights and Lowlights', price: 50 },
      ],
    },
    {
      category: 'Scalp Treatments',
      items: [
        { name: 'Scalp Treatment', price: 30 },
        { name: 'Dandruff Treatment', price: 25 },
      ],
    },
    {
      category: 'Facial Treatments',
      items: [
        { name: "Men's Facial", price: 40 },
        { name: 'Hot Towel Treatment', price: 15 },
      ],
    },
    {
      category: 'Kids’ Cuts',
      items: [
        { name: 'Kids’ Cut', price: 15 },
      ],
    },
   

]

export const promotions= [
  {
    category: 'Combo Packages',
    items: [
      { name: 'Haircut + Beard Trim', price: 35 },
      { name: 'Haircut + Facial', price: 60 },
      { name: 'Haircut + Scalp Treatment', price: 50 },
      { name: 'Haircut + Full Beard Shave', price: 45 },
    ],
  },
  
  {
    category: 'Membership Options',
    items: [
      { name: 'Basic Membership', price: 25, description: 'Includes 1 haircut per month and 10% off all services.' },
      { name: 'Premium Membership', price: 50, description: 'Includes 2 haircuts per month, 15% off all services, and a free scalp treatment.' },
      { name: 'Family Membership', price: 80, description: 'Includes 4 haircuts per month (any family member) and 20% off all services.' },
    ],
  },
]

export const loyalty =[
  {
    category: 'Loyalty Programs',
    items: [
      { name: '10% Off After 5 Visits', description: 'Receive a 10% discount on your next service after completing 5 visits.' },
      { name: 'Free Haircut After 10 Visits', description: 'Get a free haircut after 10 paid visits.' },
      { name: 'Referral Bonus', description: 'Refer a friend and receive $10 off your next service.' },
    ],
  },
]

export const images=[
  {src:Image1, alt:"image1"},
  {src:Image2, alt:"image2"},
  {src:Image3, alt:"image3"},
  {src:Image4, alt:"image4"},
  {src:Image5, alt:"image5"},
  {src:Image6, alt:"image6"},
  {src:Image7, alt:"image7"},
  {src:Image8, alt:"image8"},
  {src:Image9, alt:"image9"},
  {src:Image10, alt:"image10"},
  {src:Image11, alt:"image11"},
  {src:Image12, alt:"image12"},
  {src:Image13, alt:"image13"},
  {src:Image14, alt:"image14"},
  {src:Image15, alt:"image15"},
  {src:Image16, alt:"image16"},
  
]


// export const service = [
//   {category: 'Haircuts',},
//   {category: 'Beard Grooming',},
//   {category: 'Shaving Services',},
//   {category: 'Hair Styling', },
//   {category: 'Hair Coloring',},
//   {category: 'Scalp Treatments',},
//   {category: 'Facial Treatments',},
//   {category: 'Kids’ Cuts',},

// ]