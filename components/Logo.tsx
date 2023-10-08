import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="relative h-10 w-10 lg:h-14 lg:w-14">
        <Image
          src="/assets/department_state.png"
          alt="logo"
          fill
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-medium leading-5 sm:text-base">
          U.S. Department of State
        </h3>
        <p className="text-xs font-normal leading-4 sm:text-sm">
          Bureau of Consular Affairs
        </p>
      </div>
    </>
  );
};

export default Logo;
