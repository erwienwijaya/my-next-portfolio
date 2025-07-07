{
  /* get more icons in https://react-icons.github.io/react-icons/  */
}

import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";
import LinkButton from "./LinkButton";
import { social_links } from "../data";

export default function SocialLinks({ className }) {
  const socialIcons = [
    {
      icon: <FiGithub className={`${className}`} />,
    },
    {
      icon: <FiLinkedin className={`${className}`} />,
    },
    {
      icon: <FiTwitter className={`${className}`} />,
    },
    {
      icon: <FiInstagram className={`${className}`} />,
    },
  ];

  const links = social_links;

  return (
    <div
      className={`flex flex-row justify-center items-start space-x-6 text-2xl ${className}`}
    >
      {links.map(({ url, label }, index) => (
        <LinkButton
          key={index}
          url={url}
          newTab={true}
          label={socialIcons[index]["icon"]}
          tooltip={label}
        />
      ))}
    </div>
  );
}
