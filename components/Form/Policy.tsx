type Props = {
  title: string;
  text: string;
};

const Policy = ({ title, text }: Props) => {
  return (
    <div className="inline-block mb-5">
      <p className="text-base font-normal leading-5 tracking-wide text-[#333]">
        <span className="font-bold uppercase">{title}:</span> {text}
      </p>
    </div>
  );
};

export default Policy;
