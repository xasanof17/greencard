import clsx from "clsx";

type FormHeaderProps = {
  title: string;
  className?: string;
  welcome?: boolean;
};

const FormHeader = ({ title, className, welcome }: FormHeaderProps) => {
  const variants = {
    base: "flex w-full items-center justify-center rounded-t-md border px-5 py-2 md:py-3",
    notWelcome: "border-slate-300 bg-gradient-to-b from-slate-100 to-slate-200",
    welcome: "border-[#9ACFEA] bg-gradient-to-b from-blue-100 to-blue-200",
  };
  return (
    <div
      className={clsx(
        variants.base,
        className ? className : "",
        welcome ? variants.welcome : variants.notWelcome,
      )}
    >
      <h2
        role="heading"
        aria-label={title}
        className="text-center text-base font-semibold uppercase text-primary sm:text-lg"
      >
        {title}
      </h2>
    </div>
  );
};

export default FormHeader;
