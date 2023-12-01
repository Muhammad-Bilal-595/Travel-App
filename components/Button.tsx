import Image from "next/image";

type BtProps = {
  type: "button" | "submit";
  title: string;
  varient: string;
  icon?: string;
  full?: boolean;
};

const Button = ({ type, title, varient, icon, full }: BtProps) => {
  return (
    <>
      <button
        type={type}
        className={`flexCenter  gap-3 rounded-full border ${varient} ${
          full && "w-full"
        }`}
      >
        {icon && <Image src={icon} height={24} width={24} alt="user" />}
        <p className="cursor-pointer bold-16 whitespace-nowrap">{title}</p>
      </button>
    </>
  );
};

export default Button;
