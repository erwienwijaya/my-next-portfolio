{
  /* get more icons in https://react-icons.github.io/react-icons/  */
}

import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import LinkButton from "./LinkButton";

export default function SocialLinks({ className }) {
  const links = [
    {
      url: "https://www.linkedin.com/in/erwien-tjipta-wijaya-79057428/",
      label: <FiLinkedin className={`${className}`} />,
    },
    {
      url: "https://github.com/erwienwijaya",
      label: <FiGithub className={`${className}`} />,
    },
    {
      url: "",
      label: <FiInstagram className={`${className}`} />,
    },
  ];

  return (
    <div
      className={`flex flex-row justify-center items-start space-x-6 text-2xl ${className}`}
    >
      {links.map(({ url, label }, index) => (
        <LinkButton key={index} url={url} newTab={true} label={label} />
      ))}
    </div>
  );
}
