import Image from "next/image";

import { Search } from "./Search";

import IconDot from "@/images/IconDot.svg";
import IconNotification from "@/images/IconNotification.svg";
import IconLibrary from "@/images/IconLibrary.svg";
import IconContact from "@/images/IconContact.svg";

interface Props {
  className?: string;
}

export const Extra = (props: Props) => {
  return (
    <div
      className={`p-0 m-0 flex items-center justify-end gap-x-8 ${props.className}`}
    >
      <Search className="flex-auto" />
      <button className="flex items-center justify-around rounded-sm uppercase px-2 gap-x-1 text-xs w-[71px] h-[26px] text-[#3CAA2A] bg-[#3CAA2A] bg-opacity-20">
        <Image
          className="cursor-pointer hover:opacity-50"
          src={IconDot}
          width={7}
          alt="IconDot"
        />
        <span>Status</span>
      </button>
      <Image
        className="cursor-pointer hover:opacity-50"
        src={IconNotification}
        width={24}
        alt="IconNotification"
      />
      <Image
        className="cursor-pointer hover:opacity-50"
        src={IconLibrary}
        width={24}
        alt="IconLibrary"
      />
      <Image
        className="cursor-pointer hover:opacity-50"
        src={IconContact}
        width={24}
        alt="IconContact"
      />
    </div>
  );
};
