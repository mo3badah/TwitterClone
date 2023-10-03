import {
    ArrowPathRoundedSquareIcon,
    ArrowUpOnSquareIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon, MoonIcon, PaintBrushIcon,
    PhotoIcon, ShareIcon,
    UserCircleIcon,
    VideoCameraIcon,
    ViewfinderCircleIcon,
} from "@heroicons/react/20/solid/index.js";
// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';

const Middle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };
    return (
    <>
      <div className="xl:w-1/2 w-full h-screen overflow-y-auto">
        {/*sticky header*/}
        <div className="flex justify-between items-center border px-4 py-3 sticky top-0 bg-white dark:bg-dim-900 border-gray-200 dark:border-gray-700">
          <h4 className="text-gray-800 dark:text-gray-100 font-bold">Home</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </div>
        {/*tweet box*/}
        <div className="border pb-3 border-gray-200 dark:border-dim-200">
          <div className="flex p-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/44329904?v=4"
              alt=""
            />
            <textarea
              placeholder="What's happening?"
              name="text-area"
              id=""
              className="p-2 h-16 bg-transparent focus:outline-none resize-none w-full dark:text-white text-gray-900"
            ></textarea>
          </div>
          <div className="flex w-full p-4">
            <a href="" className="text-blue-400 rounded-full p-2">
              <PhotoIcon className="w-5" />
            </a>
            <a href="" className="text-blue-400 rounded-full p-2">
              <ArrowUpOnSquareIcon className="w-5" />
            </a>
            <a href="" className="text-blue-400 rounded-full p-2">
              <UserCircleIcon className="w-5" />
            </a>
            <a href="" className="text-blue-400 rounded-full p-2">
              <VideoCameraIcon className="w-5" />
            </a>
            <a href="" className="text-blue-400 rounded-full p-2">
              <ViewfinderCircleIcon className="w-5" />
            </a>
            <a
              href=""
              className=" font-bold bg-blue-400 text-white rounded-full px-6 ml-auto mr-1 flex items-center"
            >
              <span>Tweet</span>
            </a>
          </div>
        </div>
        {/*Show Tweets*/}
        <div className="text-center text-sm py-4 bg-white dark:bg-dim-900 cursor-pointer text-blue-400 border border-gray-200 dark:border-dim-200">
          Show 9 Tweets
        </div>
        {/*Tweets*/}
<div className="border border-gray-200 dark:border-dim-200">
    <div className="flex p-4 pb-0">
        <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/44329904?v=4" alt="" />
        <div className="flex flex-row ml-4 items-center">
            <h4 className="text-gray-800 dark:text-gray-100 pr-4 flex flex-shrink-0 font-medium">Mohamed Ebadah</h4>
            <p className="text-gray-400 text-sm pr-2">
                @mo3badah
            </p>
            <p className="text-gray-400 text-sm">
               .Nov 1
            </p>
        </div>
      </div>
    <div className="flex flex-col pl-8 pr-4 xl:pl-16">
        <p className="w-auto dark:text-white text-dim-900 text-sm pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto at atque aut, commodi consequatur dolores eaque <br/> <br/> ex ipsum laudantium molestias nemo obcaecati officiis quaerat quo, quos repellat veritatis vero. <a
            href="" className="text-blue-400">#mistake</a> <br/><br/> Hello Every one Again.
        </p>
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/cryptocurrency-casting-ethereum-allan-swart.jpg" alt="etherum" className="rounded-2xl border border-gray-600 my-3 mr-2 w-full"/>
        <div className="flex justify-between items-center w-full pb-4">
            <div className="flex items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 cursor-pointer">
                <ChatBubbleOvalLeftEllipsisIcon className="w-4 mr-2 text-lg"/>
                15.6 K
            </div>
            <div className="flex items-center dark:text-white text-xs text-gray-400 hover:text-green-400 cursor-pointer">
                <ArrowPathRoundedSquareIcon className="w-4 mr-2 text-lg"/>
                1.2 K
            </div>
            <div className="flex items-center dark:text-white text-xs text-gray-400 hover:text-red-400 cursor-pointer">
                <HeartIcon className="w-4 mr-2 text-lg"/>
                35.8 K
            </div>
            <div className="flex items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 cursor-pointer">
                <ShareIcon className="w-4 mr-2 text-lg"/>
                6.2 K
            </div>
        </div>
    </div>
</div>
          {/*toggle*/}
          <div className="py-2 border border-gray-200 dark:border-dim-200 bg-gray-50 dark:bg-dim-300">
              <div className="text-center px-6 py-4  xl:py-8 bg-white dark:bg-dim-900 border-b border-t border-gray-200 dark:border-dim-200">
                  <h3 className="dark:text-white text-gray-900 text-2xl font-bold mb-2">Customize your view</h3>
                  <p className="text-gray-500 text-sm mb-5">
                      Manage your font size, color and background. these settings affect all the twitter accounts on this browser.
                  </p>
                  <button onClick={toggleDarkMode} className="mx-auto py-4 xl:w-56 flex w-11 h-11 items-center justify-center bg-blue-400 rounded-full text-white font-bold">
                      <MoonIcon className="w-5 block xl:hidden" />
                      <span className="icon xl:ml-0 hidden xl:block">Customize your theme</span>
                  </button>
              </div>
          </div>
          {/*Spinner*/}
          <div className="flex justify-center items-center border p-4 border-gray-200 dark:border-gray-700">
            <img width="64" height="64" className="animate-spin  w-8 h-8" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/rotate-right--v1.png" alt="rotate-right--v1"/>
          </div>

      </div>

    </>
  );
}

export default Middle;
