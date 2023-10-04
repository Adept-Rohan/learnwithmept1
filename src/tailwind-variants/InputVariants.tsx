import { tv } from "tailwind-variants";

export const createInputStyle = tv({
  slots: {
    inputField:
      "appearance-none block w-[399px] text-primary-25 border border-primary-25 rounded-[4px] py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-primary-25",
    label: "text-primary-900 font-normal text-sm leading-normal",
    labelError: "text-red-500 font-normal text-sm leading-normal",
    inputFieldError:
      "text-red-500  block w-[399px] rounded-[4px] py-3 px-4 mb-3 leading-tight focus:outline-none border border-red-500 placeholder-danger-900",
    errorText: "text-[10px] font-medium font-system text-[#DC362E]",
    inputBg: "bg-primary",
    selectInputField:
      "appearance-none block w-[399px] text-primary-25 border border-primary-25 rounded-[4px] py-3 px-4 mb-3 leading-tight focus:outline-none placeholder-primary-25 bg-white",
  },
});
