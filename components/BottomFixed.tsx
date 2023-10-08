import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const BottomFixed = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <Link
        href="tel:+99900198505"
        className="flex animate-bounce items-center justify-center rounded-full bg-gradient-to-t from-blue-600 to-blue-800 p-3 pl-3 ring-blue-500"
      >
        <FaPhoneAlt className="text-2xl text-white" />
      </Link>
    </div>
  );
};

export default BottomFixed;
