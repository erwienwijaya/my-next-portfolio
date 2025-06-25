// import { SocialLinks, LinkButton } from "../components";
import { LuGithub } from "react-icons/lu";
import { LinkButton } from "../components";

export default function Footer({ className_icons, className_parent }) {
  return (
    <footer className="bg-cyan-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-[family-name:var(--font-luckies-sans)] text-2xl font-medium mb-2">
              <span className="text-cyan-400">Erwien</span> Wijaya
            </h3>
            <p className="text-gray-300">
              Fullstack Data Professional - Fullstack Web Developer
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-300 flex items-center justify-center space-x-2">
              <span>
                <LinkButton
                  url="https://github.com/erwienwijaya"
                  newTab={true}
                  label="@ 2025 Developed on My-own / 自分で開発した"
                />
              </span>
              <LuGithub size={16} className="text-gray-300 fill-current" />
              {/* <span>© 2025 Alex Morgan. Made with</span>
              <LuHeart size={16} className="text-red-500 fill-current" />
              <span>and lots of coffee</span> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
