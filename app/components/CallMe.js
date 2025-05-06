import Image from "next/image";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";

export default function CallMe() {
  return (
    <div className="font-[family-name:var(--font-poppins-sans)] font-semibold text-gray-300 text-center flex flex-row items-center justify-center">
      <div className="grid grid-flow-col grid-rows-3 gap-4 mx-30">
        <div className="row-span-3 col-span-2 grid justify-items-stretch">
          <Image
            aria-hidden
            src="/images/qkfvBOKefD1kGIjM3lb7oV00SYxemB3VViahVAffvHMZRHROHJMV6zHfslczpD1T.jpg"
            alt="Photo Call Me"
            layout="responsive"
            width={720}
            height={640}
            className="rounded-xl filter grayscale-100 shadow-md shadow-gray-400 object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 text-left">
          <div className="md:text-5xl text-lg flex items-center justify-center mb-4">
            Create Innovative Solutions And Bring Them To The World
          </div>
          <div className="flex items-center justify-start md:text-2xl sm:text-lg">
            Full-Stack Data Professional | Full-Stack Web Developer
          </div>
        </div>
        <div className="col-span-1 text-left font-medium flex flex-col justify-end">
          <div className="flex flex-row text-3xl">
            <IoIosMail />
            <span className="ml-2">erwien.growind@gmail.com</span>
          </div>
          <div className="flex flex-row text-3xl">
            <IoLogoWhatsapp />
            <span className="ml-2">+62 81-333-105-149</span>
          </div>
        </div>
      </div>
    </div>
  );
}
