import {MagnifyingGlassIcon, PlusIcon} from '@heroicons/react/20/solid';
import React from 'react';
import {PaintBrushIcon} from "@heroicons/react/20/solid/index.js";

function Right(props) {
    return (
        <>
            <div className="hidden w-[30%] xl:block ">
                {/* Search  */}
                <div className="relative m-2">
                    <MagnifyingGlassIcon className="absolute top-3 left-3 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Twitter"
                        className="w-full h-10 pl-12 pr-3 rounded-full focus:outline-none dark:bg-dim-200 dark:text-white text-gray-900"
                    />
                </div>
                {/* Trends   */}
                <div className="rounded-2xl bg-gray-50 dark:bg-dim-700 m-2">
                    <h3 className='text-gray-900 dark:text-white font-bold p-3 border-b border-gray-200 dark:border-dim-200'>What's happening?</h3>
                    <div className="p-3 border-b border-gray-200 dark:border-dim-200">
                        <h4 className="font-bold text-gray-800 dark:text-white">
                            #Egyption
                        </h4>
                        <p className="text-xs text-gray-400">30K Tweets</p>
                    </div>
                    <div className="p-3 border-b border-gray-200 dark:border-dim-200">
                        <h4 className="font-bold text-gray-800 dark:text-white">
                            #Egyption
                        </h4>
                        <p className="text-xs text-gray-400">30K Tweets</p>
                    </div>
                    <div className="p-3 border-b border-gray-200 dark:border-dim-200">
                        <h4 className="font-bold text-gray-800 dark:text-white">
                            #Egyption
                        </h4>
                        <p className="text-xs text-gray-400">30K Tweets</p>
                    </div>
                    <div className="p-3 border-b border-gray-200 dark:border-dim-200">
                        <h4 className="font-bold text-gray-800 dark:text-white">
                            #Egyption
                        </h4>
                        <p className="text-xs text-gray-400">30K Tweets</p>
                    </div>
                    <div className="p-3 cursor-pointer text-blue-400">
                        Show more
                    </div>
                </div>
                {/* Who to follow  */}
                <div className="rounded-2xl bg-gray-50 dark:bg-dim-700 m-2">
                    <h3 className='text-gray-900 dark:text-white font-bold p-3 border-b border-gray-200 dark:border-dim-200'>Who to follow?</h3>
                    <div className="p-3 border-b border-gray-200 dark:border-dim-200">
                        <div className="w-14 xl:w-full mx-auto mt-auto flex justify-start mb-2 rounded-full p-2 ">
                            <img className="w-10 h-10 rounded-full"
                                 src="https://avatars.githubusercontent.com/u/44329904?v=4" alt="" />
                            <div className="hidden xl:flex flex-col ml-4">
                                <h4 className="text-gray-800 dark:text-white font-bold text-sm">Mohamed Ebadah</h4>
                                <p className="text-gray-400 text-sm">mo3badah@gmail.com</p>
                            </div>
                            <a href="" className="ml-3 py-4 xl:w-full flex w-11 h-11 hover:bg-blue-400 hover:text-white items-center justify-center rounded-full text-blue-400 border-2 border-blue-400 font-bold">
                                <PlusIcon className="w-5 block xl:hidden" />
                                <span className="icon xl:ml-0">Follow</span>
                            </a>
                        </div>
                        <div className="w-14 xl:w-full mx-auto mt-auto flex justify-start mb-2 rounded-full p-2 ">
                            <img className="w-10 h-10 rounded-full"
                                 src="https://avatars.githubusercontent.com/u/44329904?v=4" alt="" />
                            <div className="hidden xl:flex flex-col ml-4">
                                <h4 className="text-gray-800 dark:text-white font-bold text-sm">Mohamed Ebadah</h4>
                                <p className="text-gray-400 text-sm">mo3badah@gmail.com</p>
                            </div>
                            <a href="" className="ml-3 py-4 xl:w-full flex w-11 h-11 hover:bg-blue-400 hover:text-white items-center justify-center rounded-full text-blue-400 border-2 border-blue-400 font-bold">
                                <PlusIcon className="w-5 block xl:hidden" />
                                <span className="icon xl:ml-0">Follow</span>
                            </a>
                        </div>
                        <div className="w-14 xl:w-full mx-auto mt-auto flex justify-start mb-2 rounded-full p-2">
                            <img className="w-10 h-10 rounded-full"
                                 src="https://avatars.githubusercontent.com/u/44329904?v=4" alt="" />
                            <div className="hidden xl:flex flex-col ml-4">
                                <h4 className="text-gray-800 dark:text-white font-bold text-sm">Mohamed Ebadah</h4>
                                <p className="text-gray-400 text-sm">mo3badah@gmail.com</p>
                            </div>
                            <a href="" className="ml-3 py-4 xl:w-full flex w-11 h-11 hover:bg-blue-400 hover:text-white items-center justify-center rounded-full text-blue-400 border-2 border-blue-400 font-bold">
                                <PlusIcon className="w-5 block xl:hidden" />
                                <span className="icon xl:ml-0">Follow</span>
                            </a>
                        </div>
                        <div className="flex justify-evenly gap-x-4 mb-2 p-2 animate-pulse">
                            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                            <div className="flex-1 space-y-2 py-1">
                                <div className="w-4/5 h-4 rounded bg-gray-200"></div>
                                <div className="w-5/5 h-4 rounded bg-gray-200"></div>
                            </div>
                            <div className="w-24 h-11 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                     <div className="p-3 cursor-pointer text-blue-400">
                        Show more
                    </div>
                </div>
                </div>
        </>
    );
}

export default Right;