import { LuGithub } from "react-icons/lu";
import { LinkButton } from "../components";
import { home } from "../data";

export default function Footer() {
  const text = home.my_name;
  const full_name = text.split(" ");

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-300 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-[family-name:var(--font-luckies-sans)] text-2xl font-medium mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
                {full_name[0]}
              </span>{" "}
              {full_name[1]}
            </h3>
            <p className="text-white">
              {home.roles.map((role, index) => (
                <span key={index}>
                  {role}
                  {index < home.roles.length - 1 ? " - " : ""}
                </span>
              ))}
            </p>
          </div>

          <div className="border-t border-gray-300 pt-8">
            <div className="text-white flex items-center justify-center space-x-0.5">
              <span>
                <LinkButton
                  url="https://github.com/erwienwijaya"
                  newTab={true}
                  label="&copy; 2025 Developed on My-own"
                  tooltip="Source My Portfolio"
                />
              </span>
              <LuGithub size={16} className="text-gray-300 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
