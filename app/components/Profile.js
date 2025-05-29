import { FaCloudDownloadAlt } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { HiBuildingOffice2 } from "react-icons/hi2";
import {
  ScrollSwipeDetection,
  BounceButton,
  StackRow,
  WorkExperience,
  CollapseExpanded,
} from "../components";

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
    <div className="font-[family-name:var(--font-poppins-sans)] font-semibold text-gray-300 text-center flex flex-row items-center justify-center">
      <div className="md:mx-20 mx-8">
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
              <div className="relative md:mx-10 mx-8 flex flex-col">
                <div className="font-[family-name:var(--font-russo-one)] md:text-3xl text-lg mt-8 md:mx-38 mx-6 text-center font-bold text-gray-300">
                  With expertise in{" "}
                  <span className="text-orange-300">
                    Web Development & Data Science
                  </span>
                  , I blend cutting-edge technology with data-driven insights to
                  deliver innovative solutions that make a real impact.
                </div>
                <div className="flex items-center justify-center md:mt-8 mt-6 md:mb-14 mb-10">
                  <BounceButton
                    onClick={HandleDownload}
                    className={`md:w-60 w-56 md:text-lg text-base font-semibold border-0 bg-orange-400 hover:text-gray-200 text-gray-100 hover:bg-orange-500`}
                  >
                    <FaCloudDownloadAlt className="mr-2" />
                    Curriculum Vitae
                  </BounceButton>
                </div>

                {/* Stack: Summary */}
                <StackRow
                  icon={<AiFillAppstore className="mr-2" />}
                  title={"Summary"}
                  classHeader={`md:mx-38 mx-6`}
                  classDescription={`flex items-center font-bold md:text-2xl text-lg`}
                  classLine={`border-t-1 border-orange-400 rounded shadow-md shadow-gray-200 mb-4`}
                >
                  <div className="text-justify md:text-lg text-base">
                    <CollapseExpanded gradient={true} limit={300}>
                      With over 15 years of experience in the information
                      technology and education sectors, I am highly motivated to
                      continuously learn and grow. I excel at communicating
                      effectively across all organizational levels, from
                      operational staff to executive leadership (C-Level). My
                      expertise includes fostering strong teamwork, skillfully
                      organizing and coordinating multiple teams in a
                      synergistic manner, and demonstrating resilience when
                      tackling challenges beyond my core specialization. I
                      thrive on deep analytical thinking to develop innovative
                      and strategic solutions that drive success.
                    </CollapseExpanded>
                  </div>
                </StackRow>

                {/* Stack: Working Experience */}
                <StackRow
                  icon={<HiBuildingOffice2 className="mr-2" />}
                  title={"Work Experience"}
                  classHeader={`md:mx-38 mx-6 md:mt-10 mt-6`}
                  classDescription={`flex items-center font-bold md:text-2xl text-lg`}
                  classLine={`border-t-1 border-orange-400 rounded shadow-md shadow-gray-200 mb-4`}
                >
                  <div className="text-justify">
                    <WorkExperience />
                  </div>
                </StackRow>
              </div>
            </ScrollSwipeDetection>
          </div>
        </div>
      </div>
    </div>
  );
}
