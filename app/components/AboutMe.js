import { LuAward, LuUser, LuCoffee, LuZap } from "react-icons/lu";
import { ScrollSwipeDetection, ProfilePicture } from "../components";
import { about_me, home } from "../data";

export default function AboutMe() {
  const { title, tagline, role, description, email, phone } = about_me;

  const stats = [
    {
      icon: <LuAward className="w-8 h-8" />,
      value: "10+",
      label: "Projects Completed",
    },
    {
      icon: <LuUser className="w-8 h-8" />,
      value: "8+",
      label: "Happy Clients",
    },
    {
      icon: <LuCoffee className="w-8 h-8" />,
      value: "50+",
      label: "Cups of Coffee",
    },
    {
      icon: <LuZap className="w-8 h-8" />,
      value: "10+",
      label: "Years Experience",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-luckies-sans)] text-3xl sm:text-4xl font-bold text-gray-600 mb-4">
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </h2>
          <p
            className="font-[family-name:var(--font-luckies-sans)] text-gray-500 max-w-2xl mx-auto md:text-lg text-base leading-relaxed font-normal"
            dangerouslySetInnerHTML={{
              __html: tagline,
            }}
          />
        </div>

        <div className="grid gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="relative rounded-2xl">
              <div className="bg-white rounded-xl flex justify-center items-center">
                <ProfilePicture
                  src={home.photo}
                  alt={"Photo of me"}
                  width={160}
                  height={38}
                  className={`w-44 h-48 rounded-2xl transition-transform`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-50% rounded-2xl z-20"></div>
              </div>
            </div>
            <ScrollSwipeDetection className={`text-gray-600 text-justify`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </ScrollSwipeDetection>

            <div className="flex flex-wrap gap-3">
              {role.map((skill) => (
                <span
                  key={skill}
                  className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-500 group-hover:bg-cyan-50 transition-colors duration-200">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
