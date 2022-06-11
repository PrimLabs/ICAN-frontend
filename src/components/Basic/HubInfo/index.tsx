import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Gap, Input } from "@/components";
import Icon from "@/icons/Icon";
import { BucketApi } from "@/apis/bucketApi";

interface Props {
  setOpen: Function;
  open: boolean;
  version: number | undefined;
  setUpgrade: Function;
}
export const HubInfo = ({ setOpen, open, version, setUpgrade }: Props) => {
  const { hubId, name }: any = useParams();
  const [controllers, setControllers] = useState<Array<any>>([""]);
  const changeControllers = (controller: string, index: number) => {
    let tControllers: Array<string> = controllers;
    tControllers[index] = controller;
    setControllers(controllers);
  };
  const removeController = (index: number) => {
    let tControllers = controllers;
    tControllers.splice(index, 1);
    setControllers([...tControllers]);
  };
  const fetch = async () => {
    const res = await BucketApi(hubId).getOwners();
    setControllers(res);
  };
  useEffect(() => {
    fetch();
  }, []);
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
      <div className="text-4xl flex items-center font-medium h-14 mb-12">
        Hub canister id: {hubId}
      </div>
      <div className="text-4xl flex items-center font-medium h-14 mb-12">
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
      <div>
        <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
          Controllers
        </label>
        {controllers.map((v, index) => {
          return (
            <div
              key={index}
              className={"relative flex items-center mt-[1.125rem]"}
            >
              <Input
                id="controllers"
                onChange={(e) =>
                  changeControllers(e.target.value.trim(), index)
                }
                placeholder={String(v)}
                value={String(v)}
              />
              <div
                className={"absolute  right-0.5 cursor-pointer flex"}
                onClick={() => removeController(index)}
              >
                <Icon name={"minus"} />
              </div>
            </div>
          );
        })}
        <div
          className={"flex justify-center mt-0.5 cursor-pointer"}
          onClick={() => setControllers([...controllers, ""])}
        >
          <Icon name={"add"} width={"20"} height={"20"} />
        </div>
      </div>
    </div>
  );
};
