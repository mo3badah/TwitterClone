import React from "react";
import {
    BellIcon,
    BookmarkIcon, ChevronDownIcon, EllipsisHorizontalIcon,
    EnvelopeIcon,
    HashtagIcon,
    HomeIcon,
    ListBulletIcon, PaintBrushIcon, UserIcon
} from "@heroicons/react/20/solid/index.js";

function Left() {
  return (
    <>
      <div className="xl:w-1/5 w-20 h-full flex flex-col xl:pr-4">
        <a href="" className="link-active my-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
        </a>
        <nav className="mt-5">
          <a href="" className="link-active mb-8 ">
            <HomeIcon className="w-5" />
            <span className="icon">Home</span>
          </a>
          <a href="" className="link mb-8 ">
            <HashtagIcon className="w-5" />
            <span className="icon">Explore</span>
          </a>
          <a href="" className="link mb-8 ">
            <BellIcon className="w-5" />
            <span className="icon">Notification</span>
          </a>
          <a href="" className="link mb-8 ">
            <EnvelopeIcon className="w-5" />
            <span className="icon">Messages</span>
          </a>
          <a href="" className="link mb-8 ">
            <BookmarkIcon className="w-5" />
            <span className="icon">Bookmarks</span>
          </a>
          <a href="" className="link mb-8 ">
            <ListBulletIcon className="w-5" />
            <span className="icon">Lists</span>
          </a>
          <a href="" className="link mb-8 ">
            <UserIcon className="w-5" />
            <span className="icon">Profile</span>
          </a>
          <a href="" className="link mb-8 ">
            <EllipsisHorizontalIcon className="w-5" />
            <span className="icon">More</span>
          </a>
        </nav>
          <a href="" className="mx-auto py-4 xl:w-full flex w-11 h-11 items-center justify-center bg-blue-400 rounded-full text-white font-bold">
              <PaintBrushIcon className="w-5 block xl:hidden" />
              <span className="icon xl:ml-0">Tweet</span>
          </a>
          {/*user*/}
          <div className="w-14 xl:w-full mx-auto mt-auto flex justify-between mb-2 rounded-full p-2 cursor-pointer">
              <img className="w-10 h-10 rounded-full"
                   src="https://avatars.githubusercontent.com/u/44329904?v=4" alt="" />
              <div className="hidden xl:flex flex-col ml-4">
                  <h4 className="text-gray-800 dark:text-white font-bold text-sm">Mohamed Ebadah</h4>
                  <p className="text-gray-400 text-sm">mo3badah@gmail.com</p>
              </div>
              <span>
              <ChevronDownIcon className="w-5 hidden xl:flex items-center xl:ml-4 text-gray-800 dark:text-white" />
          </span>
          </div>
      </div>
    </>
  );
}

export default Left;
