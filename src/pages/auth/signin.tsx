/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable import/no-extraneous-dependencies */
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type LoginValues = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const { register, handleSubmit } = useForm<LoginValues>();
  const [defaultError] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  const handleStudentCredentialsLogin = async ({
    email,
    password,
  }: LoginValues) => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) {
      console.error(res.error);
    } else if (res?.url) {
      const url = new URL(res?.url);
      const redirectUrl = url.searchParams.get("callbackUrl");
      router.push(redirectUrl || res.url);
    }
  };

  useEffect(() => {
    if (session?.accessToken) router.push("/");
  }, [router, session?.accessToken]);

  return (
    <div className="flex h-screen w-full items-center bg-gray-100">
      <div className="mx-auto flex h-[500px] w-11/12  flex-col bg-white rounded-md  p-10 shadow-2xl sm:w-[400px]">
        <div className="border-[10px] relative border-gray-200 rounded-full mx-auto h-[170px] justify-center w-[170px] flex bg-white items-center top-[-130px]">
          <div className="  text-center text-6xl font-bold text-primary-500">
            Q
          </div>
        </div>

        <div className="w-full ">
          {defaultError !== "" && (
            <p className="mt-2 text-xl italic text-red-500">{defaultError}</p>
          )}
          <form
            action=""
            onSubmit={handleSubmit(handleStudentCredentialsLogin)}
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium  text-gray-900 dark:text-white"
              >
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border !border-primary-100 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-lg placeholder:text-gray-400 focus:border-2  focus:ring-primary-500 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="E-mail"
                  required
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <input
                  {...register("password")}
                  type="password"
                  id="password"
                  className="block w-full rounded-lg border !border-primary-100 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-lg placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  required
                  placeholder="Heslo"
                />
              </label>
            </div>{" "}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full rounded-lg hover:bg-secondary-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-all bg-primary-500 focus:outline-none focus:ring-4  "
              >
                Přihlásit se
              </button>
            </div>
            <button
              type="button"
              onClick={() => signIn("google")}
              className="w-full rounded-lg hover:bg-secondary-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-all bg-[#de5246] focus:outline-none focus:ring-4  "
            >
              <GoogleIcon /> Přihlásit se přes Google
            </button>
          </form>
          <Link
            href="/auth/signup"
            className="mt-3 block text-center text-sm font-light text-gray-600 dark:text-white"
          >
            Registrovat se
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
