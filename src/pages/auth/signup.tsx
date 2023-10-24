/* eslint-disable import/no-unresolved */
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
/* eslint-disable jsx-a11y/label-has-associated-control */

import { RegisterMutation } from "@/modules/mutations/UserMutations";
import { IRegister, signUpSchema } from "@/modules/utils/schemas/auth";

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();
  const { data: session } = useSession();

  const { mutateAsync: registerAsync } = RegisterMutation();

  const [defaultError, setDefaultError] = useState<string>("");

  const handleSignUp = async ({
    username,
    email,
    password,
    passwordCheck,
  }: IRegister) => {
    const res = await registerAsync({
      username,
      email,
      password,
      passwordCheck,
    });
    setDefaultError("");
    if (res.error) {
      setDefaultError(res.error);
    } else {
      await signIn("credentials", { email, password, redirect: false });
      router.push("/");
    }
  };

  useEffect(() => {
    if (session?.accessToken) router.push("/");
  }, [router, session?.accessToken]);

  return (
    <div className="flex h-screen w-full items-center bg-gray-100">
      <div className="mx-auto flex h-[500px] w-11/12  flex-col rounded-md bg-white  p-10 shadow-2xl sm:w-[400px]">
        <div className="relative top-[-130px] mx-auto flex h-[170px] w-[170px] items-center justify-center rounded-full border-[10px] border-gray-200 bg-white">
          <div className="  text-center text-6xl font-bold text-primary-500">
            Q
          </div>
        </div>

        <div className="w-full ">
          {" "}
          {defaultError !== "" && (
            <p className="mt-2 text-xl italic text-red-500">{defaultError}</p>
          )}
          <form action="" onSubmit={handleSubmit(handleSignUp)}>
            <div className="mb-6">
              {errors.username && (
                <p className="mt-2 text-xs italic text-red-500">
                  {errors.username?.message}
                </p>
              )}
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium  text-gray-900 dark:text-white"
              >
                <input
                  {...register("username")}
                  type="name"
                  id="name"
                  className="block w-full rounded-lg border !border-primary-100 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-lg placeholder:text-gray-400 focus:border-2  focus:ring-primary-500 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="uživatelské jméno"
                  required
                />
              </label>
            </div>
            <div className="mb-6">
              {errors.email && (
                <p className="mt-2 text-xs italic text-red-500">
                  {errors.email?.message}
                </p>
              )}
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
              {errors.password && (
                <p className="mt-2 text-xs italic text-red-500">
                  {errors.password?.message}
                </p>
              )}
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
            </div>
            <div className="mb-6">
              {errors.passwordCheck && (
                <p className="mt-2 text-xs italic text-red-500">
                  {errors.passwordCheck?.message}
                </p>
              )}
              <label
                htmlFor="passwordCheck"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                <input
                  {...register("passwordCheck")}
                  type="password"
                  id="passwordCheck"
                  className="block w-full rounded-lg border !border-primary-100 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-lg placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  required
                  placeholder="Znovu heslo"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-secondary-900 focus:outline-none focus:ring-4  "
            >
              Registrovat se
            </button>
          </form>
          <Link
            href="/auth/signin"
            className="mt-3 block text-center text-sm font-light text-gray-600 dark:text-white"
          >
            Přihlášení
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
