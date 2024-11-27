"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .endsWith("zod.com", { message: "Only zod.com emails are allowed" }),
  username: z
    .string()
    .min(5, { message: "Username should be at least 5 characters long." }),
  password: z
    .string()
    .min(10, { message: "Password should be at least 10 characters long." })
    .regex(/\d{1}/, {
      message: "Password should contain at least one number (0123456789)",
    }),
});

export default async function FormAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
  //   if (formData.get("password") === "12345") {
  //   return "";
  // } else {
  //   return "Wrong Password";
  // }
}
