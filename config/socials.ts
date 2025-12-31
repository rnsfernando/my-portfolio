import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@rnsfernando",
    icon: Icons.gitHub,
    link: "https://github.com/rnsfernando",
  },
  {
    name: "LinkedIn",
    username: "Rebecca Fernando",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/rebecca-fernando-bb4873397/",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  // {
  //   name: "Gmail",
  //   username: "naman.barkiya02",
  //   icon: Icons.gmail,
  //   link: "mailto:naman.barkiya02@gmail.com",
  // },
];
