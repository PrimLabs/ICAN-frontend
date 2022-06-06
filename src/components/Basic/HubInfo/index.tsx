import React from "react";
import { useParams } from "react-router-dom";
import { Button, Gap } from "@/components";
interface Props {
  setOpen: Function;
  open: boolean;
  version: number | undefined;
  setUpgrade: Function;
}
export const HubInfo = ({ setOpen, open, version, setUpgrade }: Props) => {
  const { hubId, name }: any = useParams();
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-center pb-[20px]">
        <p className="text-5xl font-medium">{name}</p>
        <div
          className="close-icon cursor-pointer z-50"
          onClick={() => setOpen(false)}
        >
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </div>{" "}
      </div>
      <div className="text-4xl flex items-center font-medium h-14">
        version: {version} <Gap width={6} />
        {version != undefined && Number(version) < 1 ? (
          <Button
            width="w-40"
            height="h-14"
            onClick={() => {
              setUpgrade(true);
              setOpen(false);
            }}
          >
            Upgrade
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
