type FormPolicy = {
  title: string;
  text: string;
};

const FormPolicy = ({ title, text }: FormPolicy) => {
  return (
    <div className="mb-5 inline-block">
      <p className="text-base font-normal leading-5 tracking-wide text-[#333]">
        <span className="font-bold uppercase">{title}:</span> {text}
      </p>
    </div>
  );
};

export default FormPolicy;
