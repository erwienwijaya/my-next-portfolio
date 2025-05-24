import { SocialLinks, LinkButton } from "../components";

export default function Footer() {
  return (
    <div>
      <div className="text-center text-gray-400">
        <SocialLinks />
      </div>
      <div className="font-[family-name:var(--font-poppins-sans)] font-semibold text-center my-4 text-gray-300">
        <LinkButton label="Developed on My-own / 自分で開発した" />
      </div>
    </div>
  );
}
