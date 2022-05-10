import React, {useState, useEffect} from "react";
import {Input} from "@/components";
import Icon from "@/icons/Icon";
import {KitApi} from "@/apis/kitApi";
import {ManageApi} from "@/apis/manageApi";
import {BucketApi} from "@/apis/bucketApi";
import {Principal} from "@dfinity/principal";
import {useAuth} from "@/usehooks/useAuth";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

interface Props {
    isUpdate: boolean,
    bucket: string;
    open: boolean;
    setCreate: Function;
    setList: Function;
    setStatus: Function;
    controllers: Array<string>
}

export const CreateModal = ({bucket, open, setCreate, setList, setStatus, isUpdate, controllers}: Props) => {
    const {principal}: { principal: Principal } = useAuth();
    const [toggle, setToggle] = useState(!isUpdate);
    const [file, setFile] = useState<string>("");
    const [data, setData] = useState<Array<number>>();
    const {hubId}: { hubId: string } = useParams();
    const [val, setVal] = useState<any>({
        name: "",
        desc: "",
        freezing: 2592000,
        memory: 0,
        compute: 0,
        init: 0,
        controllers: [hubId, String(principal), ...controllers, ""]
    });
    const handleFile = (e) => {
        //@ts-ignore
        const file = document.getElementById("wasm").files[0];
        if (!file) return;
        console.log(file);
        setFile(file.name);
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
            //@ts-ignore
            const result = e.target.result;
            //@ts-ignore
            const tData = new Uint8Array(result);
            const data = [];
            for (let i = 0; i < tData.length; i++) {
                //@ts-ignore
                data.push(tData[i]);
            }
            console.log(data);
            setData(data);
        };
    };

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

    const result = () => {
        return {
            pending: isUpdate ? "updating" : "creating canister 😄",
            success: {
                render() {
                    (async () => {
                        const res = await BucketApi(hubId).getCanisters();
                        if (res.ok) setList(res.ok);
                    })();
                    (async () => {
                        const res = await BucketApi(hubId).getStatus();
                        if (res.ok) setStatus(res.ok);
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
    }

    const handleClick = async () => {
        const controllers = standardControllers()
        if (principal) {
            toast.promise(
                BucketApi(bucket).deployCanister(
                    val.freezing,
                    val.memory,
                    val.compute,
                    val.name,
                    val.desc,
                    val.init,
                    controllers,
                    data
                ),
                result()
            ).then();
            setCreate(false);
        }
    };

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

    const checkOk = (): boolean => {
        console.log(val.init);
        if (val.init >= 0.2) return true;
        return false;
    };

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

    const toggleClass = "transform translate-x-14";
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full
            ${open ? `flex` : `hidden`} items-center justify-center z-50`}
        >
            <div
                className="absolute w-full h-full bg-gray-900 opacity-25 "
                onClick={() => setCreate(false)}
            />
            <div
                className="bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 w-[600px] h-[700px] p-[20px] rounded shadow-lg z-50 overflow-y-scroll">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-[20px]">
                        <p className="text-5xl font-medium">{isUpdate ? "Update Settings" : "Create Canister"}</p>

                        <div
                            className="close-icon cursor-pointer z-50"
                            onClick={() => setCreate(false)}
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
                        <div className={isUpdate ? "hidden" : "px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"}>
                            <div>
                                <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                    Canister Name
                                </label>
                                <Input
                                    id="name"
                                    onChange={(e) => {
                                        let data = {};
                                        data = val;
                                        data["name"] = e.target.value;
                                        setVal(data);
                                    }}
                                    value={val.name}
                                    placeholder="abc"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                    Canister Description (optional)
                                </label>
                                <Input
                                    id="desc"
                                    onChange={(e) => {
                                        const data = val;
                                        data["desc"] = e.target.value;
                                        setVal(data);
                                    }}
                                    value={val.desc}
                                    placeholder="abc"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                    Init Cycles Balance (T)
                                </label>
                                <Input
                                    id="cycles"
                                    type="number"
                                    error={val.init < 0.2}
                                    onChange={(e) => {
                                        const data = JSON.parse(JSON.stringify(val));
                                        data["init"] = e.target.value;
                                        setVal(data);
                                    }}
                                    value={val.init}
                                    placeholder="minimum 0.2 T"
                                    required
                                />
                            </div>
                            <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                Wasm File (optional)
                            </label>
                            {file ? (
                                <div className="flex w-full items-center justify-between">
                                    <div className="text-3xl">{file}</div>
                                    <div
                                        className="close-icon cursor-pointer z-50"
                                        onClick={() => setFile("")}
                                    >
                                        <svg
                                            className="fill-current text-black"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <div className="border border-dashed  rounded border-gray-500 relative">
                                    <input
                                        id="wasm"
                                        type="file"
                                        className="cursor-pointer absolute opacity-0 w-full h-full p-20 z-50"
                                        onChange={(e) => handleFile(e)}
                                    />
                                    <div
                                        className="text-center p-10 flex flex-col items-center justify-center h-full w-full">
                                        <Icon name="file"/>
                                        <p className="text-3xl">Select File or Drop File</p>
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center">
                                <div
                                    className={
                                        "w-24 h-13 flex items-center rounded-full p-1 cursor-pointer " +
                                        (toggle ? "bg-gray-300" : "bg-blue-300")
                                    }
                                    onClick={() => {
                                        setToggle(!toggle);
                                    }}
                                >
                                    <div
                                        className={
                                            "bg-white h-10 w-10 rounded-full shadow-md transform" +
                                            (toggle ? null : toggleClass)
                                        }
                                    />
                                </div>
                                <div className=" font-light pl-5 text-3xl">Advanced</div>
                            </div>
                        </div>
                        {!toggle ? (
                            <>
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
                                        {isUpdate ? "Change" : "Init"} Controllers
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
                            </>
                        ) : null}
                    </form>
                    <div className="flex justify-center py-[30px]">
                        {/* <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                            Action
                        </button> */}
                        <button
                            className={` px-[40px] py-[10px] rounded-lg text-white text-4xl ${
                                val.init < 0.2 ? "bg-blue-300" : "bg-blue-400"
                            }  hover:bg-blue-300`}
                            onClick={() => isUpdate ? updateSettings() : handleClick()}
                            disabled={isUpdate ? false : val.init < 0.2}
                        >
                            {isUpdate ? "Update" : "Create"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
