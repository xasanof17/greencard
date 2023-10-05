import { features } from "@/constants";

const Features = () => {
  return (
    <section role="main" id="features" className="py-10 lg:py-20">
      <div className="container flex flex-col">
        <h2 role="heading" className="title mb-5 md:mb-9">
          Biz bilan bo'lishning afzalliklari
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
          {features.map(({ icon, text, title }, i) => (
            <div
              key={i}
              className="rounded-lg border bg-white p-3 shadow-md transition-all duration-200 ease-in hover:shadow-sm lg:p-5"
            >
              <h3
                role="heading"
                className="mb-3 text-base font-bold text-black lg:text-lg"
              >
                {title}
              </h3>
              <p className="text-sm font-medium text-black">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
