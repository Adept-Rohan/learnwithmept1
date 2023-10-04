import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, forwardRef, useId } from "react";
import { createInputStyle } from "../tailwind-variants/InputVariants";

interface InputFieldProps extends Omit<ComponentProps<"input">, "ref"> {
  asChild?: boolean;
  errorMessage?: string | undefined;
  labelProps?: ComponentProps<"label">;
  required?: boolean;
  labels?: string;
  error?: string;
}

export const InputField = forwardRef(
  (
    {
      asChild,
      labels,
      required,
      errorMessage,
      error,
      labelProps: rawLabelProps = {},
      ...inputProps
    }: InputFieldProps,
    ref
  ) => {
    const Comp = asChild ? Slot : "input";

    const { inputField, inputFieldError, label, labelError, errorText } =
      createInputStyle();

    const { ...labelProps } = rawLabelProps;
    const id = useId();
    return (
      <>
        <label
          htmlFor={id}
          className={`${errorMessage ? labelError() : label()}`}
          {...labelProps}
        >
          {labels}{" "}
          {required ? <span className="text-error ">*</span> : "(optional)"}
        </label>
        <Comp
          id={id}
          className={`${errorMessage ? inputFieldError() : inputField()}`}
          {...inputProps}
          ref={ref as never}
        />
        {error && (
          <div className="flex gap-x-[4px] justify-start">
            <span className={errorText()}>{error}</span>
          </div>
        )}
      </>
    );
  }
);
