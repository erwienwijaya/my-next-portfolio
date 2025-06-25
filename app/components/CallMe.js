import { MdOutlineMail, MdOutlineWhatsapp } from "react-icons/md";
import { ScrollSwipeDetection } from "../components";
import { about_me } from "../data";

export default function CallMe() {
  const { tagline, role, description, email, phone } = about_me;

  return (
    <div className="font-semibold text-gray-600 text-center flex flex-row items-center justify-center">
      <div className="md:mx-20 mx-8">
        <div className="md:text-left text-center">
          <div className="md:text-4xl text-2xl flex items-center justify-start mb-2">
            <div
              dangerouslySetInnerHTML={{
                __html: tagline,
              }}
            />
          </div>
          <div className="flex items-center justify-start md:text-xl text-lg text-cyan-600 mb-4 text-center">
            <div
              dangerouslySetInnerHTML={{
                __html: role,
              }}
            />
          </div>

          <div
            className="text-justify font-medium md:text-lg text-base flex justify-start mb-4"
            contentEditable={false}
          >
            <ScrollSwipeDetection className={`h-96`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </ScrollSwipeDetection>
          </div>

          <div className="text-left font-medium justify-end text-orange-500 ">
            <div className="flex flex-row items-center text-lg ">
              <MdOutlineMail />
              <span className="ml-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: email,
                  }}
                />
              </span>
            </div>
            <div className="flex flex-row items-center text-lg">
              <MdOutlineWhatsapp />
              <span className="ml-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: phone,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
