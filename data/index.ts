export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize team collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    // TODO: maybe change this to something better
    id: 2,
    title: "I am a self-starter, fast learner and capable of tackling any challenge.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-left",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast who thrives in a remote environment.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building JS web applications",
    description: "Latest in my development world",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to reach out?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    // bookstore
    id: 1,
    title: "Bookstore App",
    des: "Browse books from various authors, complete purchases, and more. Admins get special access to analytical insights.",
    img: "/bookstore.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/expressjs.svg", "/mongo.svg"],
    link: "https://github.com/UkrainianProgrammer/bookstore",
  },
  {
    // market
    id: 2,
    title: "Online Market",
    des: "Purchase items online from the available inventory and sell them at any time.",
    img: "/market.png",
    iconLists: ["/python.svg", "/bootstrap.svg", "/sqlalchemy.svg", "/flask.png"],
    link: "https://github.com/UkrainianProgrammer/Market",
  },
  {
    // video2mp3
    id: 3,
    title: "Video 2 MP3 Converter",
    des: "A microservice application that converts video to an MP3 file and stores it in a MongoDB database.",
    img: "/video2mp3.png",
    iconLists: ["/k8s.svg", "/flask.png", "/mongo.svg", "/dock.svg", "/nginx.svg"],
    link: "https://github.com/UkrainianProgrammer/video2mp3",
  },
  {
    // API
    id: 4,
    title: "TODO API",
    des: "RESTful API to allow users to manage their to-do list efficiently.",
    img: "/todo.png",
    iconLists: ["/python.svg", "/postgresql.svg", "/dock.svg", "/flask.png"],
    link: "https://github.com/UkrainianProgrammer/TODO-API",
  },
];

// This comes from LinkedIn
export const testimonials = [
  {
    quote:
      "Oleks is extremely proficient in software engineering, but that's only one aspect of his skill set. He has the critical ability of taking a high-level problem statement and breaking it down into multi-layer components and creating a solution that covers various corner cases. He is curious and collegial. His documentation and presentation skills are A+ grade. He is a valuable asset in any engineering team. It has been a pleasure working with him in multiple MAC-layer features at Viasat.",
    name: "Kaushik Charkaborty",
    title: "Lead Systems Engineer",
  },
  {
    quote:
      "I had the pleasure of working with Olek at Viasat. He is a detail-oriented software engineer, willing to step up and take on challenging tasks. He is always willing to help and willing to learn. He provided excellent presentations on features he developed. With his interpersonal and technical skills, Olek will be a good asset to any software organization.",
    name: "Uma Paranjape",
    title: "Senior Software Engineer",
  },
];

export const companies = [
  {
    id: 1,
    name: "Microsoft Azure",
    img: "/azure.svg",
    link: "https://azure.microsoft.com/"
  },
  {
    // k8s
    id: 2,
    name: "k8s",
    img: "/k8s.svg",
    link: "https://kubernetes.io/"
  },
  {
    id: 3,
    name: "Docker",
    img: "/dock.svg",
    link: "https://www.docker.com/"
  },
  {
    id: 4,
    name: "NextJS",
    img: "/next.svg",
    link: "https://nextjs.org/"
  },
  {
    id: 5,
    name: "PostgreSQL",
    img: "/postgresql.svg",
    link: "https://www.postgresql.org/"
  },
];

export const workExperience = [

  {
    id: 1,
    title: "Back-end Software Engineer",
    desc: "Developed and maintained a scalable RESTful API serving as the backbone for multiple front-end applications utilized by over 3,000 customers along the United States-Mexico border.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/tti_light.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    desc: "Spearheaded the development the development of the distributed MAC layer applications written in C/C++ and Python and deployed as Docker containers in Linux environment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/viasat.svg",
  },
  {
    id: 3,
    title: "Associate Product Owner",
    desc: "Successfully utilized Agile methodology in roadmap planning for the communications link between the data center and the satellite fleet.",
    className: "md:col-span-2",
    thumbnail: "/viasat.svg",
  },
  {
    id: 4,
    title: "Frontend Engineer Intern",
    desc: "Designed, developed, and deployed a cross-platform mobile application written in React Native which is still being used today by 150,000+ customers.",
    className: "md:col-span-2",
    thumbnail: "/viasat.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/UkrainianProgrammer"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/oleksandr-sofishchenko/"
  },
];