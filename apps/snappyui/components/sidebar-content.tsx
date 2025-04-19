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
  {
    title: "Animated",
    list: [
      {
        title: "Animated Card",
        href: "/docs/animated/snappyanimatedcard",
      },
      {
        title: "Animated Text",
        href: "/docs/animated/snappyanimatedtext",
      },
      {
        title: "Color Text",
        href: "/docs/animated/snappycolorText",
      },
      {
        title: "Icon Cloud",
        href: "/docs/animated/snappyiconcloud",
        isNew: true,
      },
      {
        title: "Scratch",
        href: "/docs/animated/snappyscratch",
        isNew: true,
      },
      {
        title: "Sticky Note",
        href: "/docs/animated/snappystickynote",
        isNew: true,
      },
      {
        title: "Terminal",
        href: "/docs/animated/snappyterminal",
        isNew: true,
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
        title: "Avatar",
        href: "/docs/components/snappyavatar",
        isNew: true,
      },
      {
        title: "Bell",
        href: "/docs/components/snappybell",
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
        title: "Clipboard",
        href: "/docs/components/snappyclipboard",
      },
      {
        title: "Date Picker",
        href: "/docs/components/snappydatepicker",
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
        isNew: true,
      },
      {
        title: "Hold To Delete",
        href: "/docs/components/snappyholdtodelete",
      },
      {
        title: "Json",
        href: "/docs/components/snappyjson",
        isNew: true,
      },
      {
        title: "Loader",
        href: "/docs/components/snappyloader",
      },
      {
        title: "Progress bar",
        href: "/docs/components/snappybar",
      },
      {
        title: "QR",
        href: "/docs/components/snappyqr",
        isNew: true,
      },
      {
        title: "Skeleton",
        href: "/docs/components/snappyskeleton",
      },
      {
        title: "Star Rating",
        href: "/docs/components/snappystarrating",
      },
      {
        title: "Textarea",
        href: "/docs/components/snappytextarea",
      },
      {
        title: "Toast",
        href: "/docs/components/snappytoast",
      },
      {
        title: "Toggle",
        href: "/docs/components/snappytoggle",
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
        href: "/docs/sections/snappyhero",
      },
      {
        title: "Lamp",
        href: "/docs/sections/snappylamp",
        isNew: true,
      },
      {
        title: "Navbar",
        href: "/docs/sections/snappynavbar",
      },
      {
        title: "Pricing Section",
        href: "/docs/sections/snappypricetable",
      },
      {
        title: "SignIn",
        href: "/docs/sections/snappysignin",
      },
      {
        title: "Splash Screen",
        href: "/docs/sections/snappysplashscreen",
      },
      {
        title: "Testimonial",
        href: "/docs/sections/snappytestimonial",
      },
    ],
  },
];
