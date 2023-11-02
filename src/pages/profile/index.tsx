import Link from "next/link";
import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center bg-white p-6 pt-16 text-black">
      <div className="mt-28 w-[90%] rounded-xl bg-white p-8  shadow-[0px_7px_29px_0px_rgba(0,0,0,0.1)] sm:w-4/5 lg:w-3/5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="order-last mt-20 grid grid-cols-2 text-center md:order-first md:mt-0">
            <div>
              {/* TO DO: Video count */}
              <p className="text-xl font-bold text-gray-700">fsa</p>
              <p className="text-gray-400">Videos</p>
            </div>
            <div>
              {/* TO DO: Like count */}
              <p className="text-xl font-bold text-gray-700">fsa</p>
              <p className="text-gray-400">Videos liked</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-48 w-48 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="mt-32 flex justify-between space-x-8 text-center md:mt-0 md:justify-center">
            {/* TO DO: Subscribe */}
            <Link
              className="hover:primary-red-500 rounded border-2 border-primary-500 bg-primary-500 px-4 py-3 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:shadow-lg"
              href="/profile/edit"
            >
              edit profile
            </Link>
            <div>
              {/* TO DO: Like count */}
              <p className="text-xl font-bold text-gray-700">fsa</p>
              <p className="text-gray-400">Videos viewed</p>
            </div>
          </div>
        </div>
        <div className="mt-20 border-b pb-12 text-center">
          <h1 className="text-4xl font-medium text-gray-700">
            {session?.user?.username}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
