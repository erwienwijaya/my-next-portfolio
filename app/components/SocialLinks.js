{
  /* get more icons in https://react-icons.github.io/react-icons/  */
}

import {
  FaLinkedin,
  FaGithubAlt,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import LinkButton from "./LinkButton";

export default function SocialLinks() {
  const links = [
    {
      url: "https://www.linkedin.com/in/erwien-tjipta-wijaya-79057428/",
      label: <FaLinkedin className="hover:text-white" />,
    },
    {
      url: "https://github.com/erwienwijaya",
      label: <FaGithubAlt className="hover:text-white" />,
    },
    {
      url: "",
      label: <FaDiscord className="hover:text-white" />,
    },
    {
      url: "",
      label: <FaInstagram className="hover:text-white" />,
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center space-x-6 text-2xl text-orange-400">
      {links.map(({ url, label }, index) => (
        <LinkButton key={index} url={url} newTab={true} label={label} />
      ))}
    </div>
  );
}
