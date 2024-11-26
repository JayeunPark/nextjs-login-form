"use server";

export default async function FormAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  if (formData.get("password") === "12345") {
    return "";
  } else {
    return "Wrong Password";
  }
}
