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
        title: "Color Text",
        href: "/docs/components/snappycolorText",
      },

      {
        title: "Hold To Delete",
        href: "/docs/components/snappyholdtodelete",
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
        title: "Tooltip",
        href: "/docs/components/snappytooltip",
      },
    ],
  },
  {
    title: "Responses",
    list: [
      {
        title: "Dialog",
        href: "/docs/responses/snappydialog",
        isNew: true,
      },

      {
        title: "Bell",
        href: "/docs/responses/snappybell",
        isNew: true,
      },
      {
        title: "Progres bar",
        href: "/docs/responses/snappybar",
        isNew: true,
      },
      {
        title: "Feedback",
        href: "/docs/components/snappyfeedback",
        isNew: true,
      },
    ],
  },
  {
    title: "Sections",
    list: [
      {
        title: "SignIn",
        href: "/docs/components/snappysignin",
        isNew: true,
      },
      {
        title: "Splash Screen",
        href: "/docs/components/snappysplashscreen",
      },
      {
        title: "Footer",
        href: "/docs/sections/snappyfooter",
        isNew: true,
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
        isNew: true,
      },
      {
        title: "Testimonial",
        href: "/docs/sections/snappytestimonial",
        isNew: true,
      },
      {
        title: "Toast",
        href: "/docs/components/snappytoast",
        isNew: true,
      },

    ],
  },
  {
    title: "Inputs",

    list: [
      {
        title: "Check",
        href: "/docs/components/snappycheck",
        isNew: true,
      },
      {
        title: "Dropdown",
        href: "/docs/components/snappydropdown",
        isNew: true,
      },
      {
        title: "Date Picker",
        href: "/docs/inputs/snappydatepicker",
        isNew: true,
      },
      {
        title: "Star Rating",
        href: "/docs/inputs/snappystarrating",
        isNew: true,
      },
      {
        title: "Textarea",
        href: "/docs/components/snappytextarea",
        isNew: true,
      },

      {
        title: "Toggle",
        href: "/docs/components/snappytoggle",
        isNew: true,
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

    ],
  },

];
