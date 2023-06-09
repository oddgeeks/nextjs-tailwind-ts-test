import Image from "next/image";
import cn from "classnames";

import IconLoader from "@/images/IconLoader.svg";

interface Props {
  className?: string;
  ticked?: boolean;
  text: string;
}

export const Airdrop = (props: Props) => {
  return (
    <div
      className={cn(
        "pl-[25px] pr-2 w-[110px] h-7 rounded-r-lg flex items-center justify-between",
        props.className,
        {
          "bg-[#3CAA2A]": props.ticked == false,
          "bg-[#28458F]": props.ticked == true,
        }
      )}
    >
      <Image src={IconLoader} alt="IconLoader" width={16} />
      <span className="uppercase text-xs text-white font-semibold">
        {props.text}
      </span>
    </div>
  );
};
