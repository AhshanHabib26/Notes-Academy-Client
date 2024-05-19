import { TBtnProps } from "../types/types.global";

const NHButton: React.FC<TBtnProps> = ({ btnText }) => {
  return (
    <button className=" bg-[#FC4F4F] px-4 py-2 text-white text-md poppins-light rounded-md">
      {btnText}
    </button>
  );
};

export default NHButton;
