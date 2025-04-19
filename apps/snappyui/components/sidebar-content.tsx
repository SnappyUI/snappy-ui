type Content = {
  title: string;
  href?: string;
  // Icon?: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
  isNew?: boolean;
  list?: {
    title: string;
    href: string;
    // icon?: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
    group?: boolean;
    isNew?: boolean;
  }[];
};

export const contents: Content[] = [
  // {
  //   title: "Get Started",
  //   href: "/docs",
  // },
  {
    title: "Auth",
    list: [
      {
        title: "Footer",
        href: "/docs/sections/snappyfooter",
      },
    ],
  },
  {
    title: "Components",
    list: [
      {
        title: "Accordion",
        href: "/docs/components/snappyaccordion",
      },
      {
        title: "Animated Card",
        href: "/docs/components/snappyanimatedcard",
      },
      {
        title: "Animated Text",
        href: "/docs/components/snappyanimatedtext",
      },
      {
        title: "Avatar",
        href: "/docs/components/snappyavatar",
        isNew: true,
      },
      {
        title: "Button",
        href: "/docs/components/snappybutton",
      },
      {
        title: "Card",
        href: "/docs/components/snappycard",
      },
      {
        title: "Carousel",
        href: "/docs/components/snappycarousel",
      },
      {
        title: "Check",
        href: "/docs/components/snappycheck",
      },
      {
        title: "Color Text",
        href: "/docs/components/snappycolorText",
      },
      {
        title: "Dialog",
        href: "/docs/components/snappydialog",
      },
      {
        title: "Dropdown",
        href: "/docs/components/snappydropdown",
      },
      {
        title: "Feedback",
        href: "/docs/components/snappyfeedback",
      },
      {
        title: "Hold To Delete",
        href: "/docs/components/snappyholdtodelete",
      },
      {
        title: "Icon Cloud",
        href: "/docs/components/snappyiconcloud",
        isNew: true,
      },
      {
        title: "Loader",
        href: "/docs/components/snappyloader",
      },
      {
        title: "Skeleton",
        href: "/docs/components/snappyskeleton",
      },
      {
        title: "Scratch",
        href: "/docs/components/snappyscratch",
        isNew: true,
      },
      {
        title: "Splash Screen",
        href: "/docs/components/snappysplashscreen",
      },
      {
        title: "Toast",
        href: "/docs/components/snappytoast",
        isNew: true,
      },
      {
        title: "Toggle",
        href: "/docs/components/snappytoggle",
        isNew: true,
      },
      {
        title: "Tooltip",
        href: "/docs/components/snappytooltip",
      },
    ],
  },
  {
    title: "Enhancers",
    list: [
      {
        title: "Clipbord",
        href: "/docs/enhancers/snappyclipboard",
        isNew: true,
      },
      {
        title: "Json",
        href: "/docs/enhancers/snappyjson",
        isNew: true,
      },
      {
        title: "QR",
        href: "/docs/enhancers/snappyqr",
        isNew: true,
      },
      {
        title: "Sticky Note",
        href: "/docs/enhancers/snappystickynote",
        isNew: true,
      },
      {
        title: "Terminal",
        href: "/docs/enhancers/snappyterminal",
        isNew: true,
      },
    ],
  },
  {
    title: "Inputs",
    list: [
      {
        title: "Footer",
        href: "/docs/sections/snappyfooter",
      },
    ],
  },
  {
    title: "Responses",
    list: [
      {
        title: "Footer",
        href: "/docs/sections/snappyfooter",
      },
    ],
  },
  {
    title: "Sections",
    list: [
      {
        title: "Footer",
        href: "/docs/sections/snappyfooter",
      },
      {
        title: "Hero",
        href: "/docs/components/snappyhero",
        isNew: true,
      },
      {
        title: "Lamp",
        href: "/docs/sections/snappylamp",
      },
      {
        title: "Navbar",
        href: "/docs/sections/snappynavbar",
        isNew: true,
      },
      {
        title: "Pricing Section",
        href: "/docs/sections/snappypricetable",
      },
      {
        title: "Testimonial",
        href: "/docs/sections/snappytestimonial",
      },

    ],
  },
  {
    title: "Inputs",

    list: [
      {
        title: "Date Picker",
        href: "/docs/inputs/snappydatepicker",
      },

    ],
  },
  {
    title: "Responses",

    list: [
      {
        title: "Footer",
        href: "/docs/sections/snappyfooter",
      },

    ],
  },
  {
    title: "Enhancers",

    list: [

      {
        title: "Clipbord",
        href: "/docs/enhancers/snappyclipboard",
        isNew: true,
      },
      {
        title: "Icon Cloud",
        href: "/docs/enhancers/snappyiconcloud",
        isNew: true,
      },
      {
        title: "Json",
        href: "/docs/enhancers/snappyjson",
        isNew: true,
      },
      {
        title: "Terminal",
        href: "/docs/enhancers/snappyterminal",
        isNew: true,
      },
      {
        title: "Scratch",
        href: "/docs/enhancers/snappyscratch",
        isNew: true,
      },
      {
        title: "Sticky Note",
        href: "/docs/enhancers/snappystickynote",
        isNew: true,
      },
      {
        title: "QR",
        href: "/docs/enhancers/snappyqr",
        isNew: true,
      },
      {
        title: "SignIn",
        href: "/docs/components/snappysignin",
      },
    ],
  },

];
