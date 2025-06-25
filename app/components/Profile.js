import { FaCloudDownloadAlt } from "react-icons/fa";
// import { AiFillAppstore } from "react-icons/ai";
// import { HiBuildingOffice2 } from "react-icons/hi2";
import {
  ScrollSwipeDetection,
  BounceButton,
  ProfilePicture,
  // StackRow,
  // WorkExperience,
  // ShowMoreLess,
} from "../components";

import { profile_header } from "../data";

export default function Profile() {
  const HandleDownload = () => {
    const name = "erwien";
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const newDate = `${month}${year}`;

    const fileUrl = "/files/cv-2025-en.pdf";
    const fileName = `${name}-${newDate}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="font-semibold text-gray-300 text-center flex flex-row items-center justify-center">
      <div className="md:text-left text-center">
        <div
          className="text-justify font-medium md:text-lg text-base grid grid-row"
          contentEditable={false}
        >
          <ScrollSwipeDetection
            smartScroll={false}
            showCursor={false}
            className={"custom-height w-screen mb-4"}
          >
            <div className="flex flex-row">
              {/* left side */}
              <div className="relative md:mx-8 mx-6 flex flex-col">
                <div className="font-[family-name:var(--font-russo-one-sans)] md:text-6xl text-xl mt-8 md:mx-30 mx-6 text-left font-bold text-gray-600">
                  <div
                    dangerouslySetInnerHTML={{ __html: profile_header.tagline }}
                  />
                </div>
                <div className="flex items-center justify-start md:mt-8 mt-6 md:mb-14 mb-10 md:mx-30 mx-6">
                  <BounceButton
                    onClick={HandleDownload}
                    className={`md:w-60 w-56 md:text-lg text-base font-semibold border-0 bg-cyan-700/70 hover:text-cyan-600 text-gray-100 hover:bg-gray-100`}
                  >
                    <FaCloudDownloadAlt className="mr-2" />
                    Curriculum Vitae
                  </BounceButton>
                </div>
              </div>

              {/* right side */}
              <div className="relative my-1 rounded-2xl overflow-hidden md:mx-8 mx-6 items-center justify-center md:mr-30">
                {/* <ProfilePicture
                  src={"/images/LJOI8630.png"}
                  alt={"Photo of Profile"}
                  width={860}
                  height={640}
                  className={`rounded-2xl transition-transform`}
                /> */}
              </div>
            </div>
          </ScrollSwipeDetection>
        </div>
      </div>
    </div>
  );
}
