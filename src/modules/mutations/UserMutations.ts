/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useMutation } from "react-query";

import { IRegister } from "@/modules/utils/schemas/auth";

export const RegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: IRegister) => {
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          username: data.username,
        }),
      });
      return response.json();
    },
  });
};
