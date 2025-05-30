import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { ScrollSwipeDetection } from "../components";

export default function CallMe() {
  return (
    <div className="font-[family-name:var(--font-poppins-sans)] font-semibold text-gray-300 text-center flex flex-row items-center justify-center">
      <div className="md:mx-20 mx-8">
        <div className="md:text-left text-center">
          <div className="md:text-4xl text-2xl flex items-center justify-start mb-2">
            Create Innovative Solutions And Bring Them To The World
          </div>
          <div className="flex items-center justify-start md:text-xl text-lg text-orange-400 mb-4 text-center">
            Full-Stack Data Professional | Full-Stack Web Developer
          </div>

          <div
            className="text-justify font-medium md:text-lg text-base flex justify-start mb-4"
            contentEditable={false}
          >
            <ScrollSwipeDetection className={`h-96`}>
              I&apos;ve been walking through tons of experiences as a Software
              Engineer. Since 2002, I&apos;ve also dealt with various projects
              from government and private companies. My skill, technique, and
              analytic thinking keep growing with the projects I&apos;ve built
              year by year. With the passage of time, technology never stops at
              just one point; it is always evolving and improving. That makes me
              aware to keep updated and move from my comfort zone with learning
              new technology such as new programming languages, Cloud
              Technology, Blockchain, and Artificial Intelligence. Currently,
              I&apos;m focused on Data Analytics, Machine Learning, Large
              Language Models, and SaaS Technology. I&apos;m so passionate about
              new technology, in particular data. Other than that, I love
              sharing and teaching what I&apos;ve learned on my projects in the
              class, therefore, I&apos;ve been a Lecturer and speaker in some
              Colleges. I&apos;m so delighted when sharing new knowledge
              I&apos;ve learnt and from my research. I&apos;ve worked with big
              teams, small teams, and individuals as well. Despite occour
              different ideas and generations, and with their respective issues,
              I can address them nicely. I&apos;ve also worked with
              methodologies such as Agile, which involves frameworks such as
              Scrum and Kanban to manage projects, and with tools such as
              Pivotal Tracker, Jira, and Trello. One of my positive abilities is
              that I can catch up and quickly learn and adapt to all conditions
              and tech. That&apos;s it about me, and I&apos;m open to work for
              companies as a Software Engineer, Full-Stack Developer, Data
              Analyst, and Data Scientist. Also open to work as a Lecturer or
              Mentor at a University or work on a project basis. If you want to
              reach more information about me, please don&apos;t hesitate to
              chat or call. I&apos;m looking forward to get connected and
              collaborate with you.
            </ScrollSwipeDetection>
          </div>

          <div className="text-left font-medium justify-end">
            <div className="flex flex-row items-center md:text-xl text-lg">
              <IoIosMail />
              <span className="ml-2">erwien.wijaya10@gmail.com</span>
            </div>
            <div className="flex flex-row items-center md:text-xl text-lg">
              <IoLogoWhatsapp />
              <span className="ml-2">+62 81-333-175-881</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
