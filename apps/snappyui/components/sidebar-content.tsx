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
      // {
      //   title: "Avatar",
      //   href: "/docs/components/snappyavatar",
      // },
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
        title: "Dropdown",
        href: "/docs/components/snappydropdown",
      },
      {
        title: "Icon Cloud",
        href: "/docs/components/snappyiconcloud",
        isNew: true,
      },
      {
        title: "Hold To Delete",
        href: "/docs/components/snappyholdtodelete",
        isNew: true,
      },
      {
        title: "Loader",
        href: "/docs/components/snappyloader",
      },
      {
        title: "Marquee",
        href: "/docs/components/snappymarquee",
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
    title: "Sections",
    list: [
      {
        title: "Footer",
        href: "/docs/sections/snappyfooter",
      },
      {
        title: "Hero",
        href: "/docs/sections/snappyheader",
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
    title: "Auth",

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
        title: "Terminal",
        href: "/docs/enhancers/snappyterminal",
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
