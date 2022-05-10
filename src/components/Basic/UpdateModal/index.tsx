import React, {useState} from 'react';
import {Input} from "@/components";
import Icon from "@/icons/Icon";
import {useParams} from "react-router-dom";
import {Principal} from "@dfinity/principal";
import {useAuth} from "@/usehooks/useAuth";
import {toast} from "react-toastify";
import {BucketApi} from "@/apis/bucketApi";
import {ManageApi} from "@/apis/manageApi";

interface Props {
    bucket: string;
    open: boolean;
    setOpen: Function;
    setStatus: Function;
    controllers: Array<string>
}

function UpdateModal({open, setOpen, controllers, bucket, setStatus}: Props) {
    const {hubId}: { hubId: string } = useParams();
    const {principal}: { principal: Principal } = useAuth();
    const [val, setVal] = useState<any>({
        freezing: 2592000,
        memory: 0,
        compute: 0,
        controllers: [hubId, String(principal), ...controllers, ""]
    });

    const changeControllers = (controller: string, index: number) => {
        const controllers = val.controllers
        controllers[index] = controller
        setVal({...val, controllers: controllers})
    }

    const removeController = (index: number) => {
        const controllers = val.controllers
        controllers.splice(index, 1)
        setVal({...val, controllers: controllers})
    }


    const standardControllers = () => {
        const controllers = new Array<Principal>()
        Array.prototype.forEach.call(val.controllers, e => {
            try {
                controllers.push(Principal.from(e))
            } catch (e) {
            }
        });
        return controllers
    }

    const updateSettings = () => {
        const controllers = standardControllers()
        toast.promise(BucketApi(hubId).updateCanisterSettings(
                Principal.fromText(bucket),
                val.freezing,
                val.memory,
                val.compute,
                controllers
            ), {
                pending: "updating",
                success: {
                    render() {
                        (async () => {
                            const res = await ManageApi.getCanisterStatus(Principal.from(bucket));
                            setStatus(res);
                        })();
                        return `success !`;
                    },
                },
                error: {
                    render({data}) {
                        return `🤯 ${data}`;
                    },
                },
            }
        ).then()
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full
            ${open ? `flex` : `hidden`} items-center justify-center z-50`}
        >
            <div
                className="absolute w-full h-full bg-gray-900 opacity-25 "
                onClick={() => setOpen(false)}
            />
            <div
                className="bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 w-[600px] h-[700px] p-[20px] rounded shadow-lg z-50 overflow-y-scroll noBar">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-[20px]">
                        <p className="text-5xl font-medium"> Update Settings</p>
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
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                        </div>
                    </div>
                    <form
                        action="#"
                    >
                        <div>
                            <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                Memory Allocation
                            </label>
                            <Input
                                id="memory"
                                type="number"
                                onChange={(e) => {
                                    const data = val;
                                    data["memory"] = e.target.value;
                                    setVal(data);
                                }}
                                value={val.memory}
                                placeholder="0"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                Compute Allocation
                            </label>
                            <Input
                                id="compute"
                                type="number"
                                onChange={(e) => {
                                    const data = val;
                                    data["compute"] = e.target.value;
                                    setVal(data);
                                }}
                                value={val.compute}
                                placeholder="0"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                Freezing Threshold
                            </label>
                            <Input
                                id="freezing"
                                type="number"
                                onChange={(e) => {
                                    const data = val;
                                    data["freezing"] = e.target.value;
                                    setVal(data);
                                }}
                                value={val.freezing}
                                placeholder="2592000"
                            />
                        </div>
                        <div>
                            <label
                                className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                Init Controllers
                            </label>
                            {val.controllers.map((v, index) => {
                                return (
                                    <div key={index}
                                         className={"relative flex items-center mt-[1.125rem]"}>
                                        <Input
                                            id="controllers"
                                            onChange={(e) => changeControllers(e.target.value.trim(), index)}
                                            placeholder={String(v)}
                                            value={String(v)}
                                            readOnly={index === 0 || index === 1}
                                        />
                                        <div
                                            className={"absolute  right-0.5 cursor-pointer " + (index === 1 || index === 0 ? "hidden" : "flex")}
                                            onClick={() => removeController(index)}>
                                            <Icon name={"minus"}/>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className={"flex justify-center mt-0.5 cursor-pointer"} onClick={() => setVal({
                                ...val,
                                controllers: [...val.controllers, '']
                            })}>
                                <Icon name={"add"} width={"20"} height={"20"}/>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center py-[30px]">
                        {/* <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                            Action
                        </button> */}
                        <button
                            className={` px-[40px] py-[10px] rounded-lg text-white text-4xl  bg-blue-400 hover:bg-blue-300`}
                            onClick={() => updateSettings()}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateModal;
