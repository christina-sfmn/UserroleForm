import React from "react";
import { SubmitHandler, useForm } from "react-hook-form"; // Import useForm hook
import * as yup from "yup"; // Import yup
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver

// Type for form inputs
export type FormInputs = {
  vorname: string;
  nachname: string;
  userrole: string;
  newsletter: boolean;
};

type FormInputProps = {
  addUser: (
    vorname: string,
    nachname: string,
    userrole: string,
    newsletter: boolean
  ) => void;
};

export const FormInput = ({ addUser }: FormInputProps) => {
  // Setup validation with yup
  const schema = yup.object().shape({
    vorname: yup.string().required("Bitte Vorname eingeben!"),
    nachname: yup.string().required("Bitte Nachname eingeben!"),
    userrole: yup.string().required("Bitte eine Auswahl treffen!"),
    newsletter: yup.boolean().required(), // notRequired & optional are not working?! -> error message
  });

  // Register input fields + handle submit + add yup schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  // Submit function
  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) =>
    addUser(data.vorname, data.nachname, data.userrole, data.newsletter);

  return (
    <section className="md:w-2/5 w-full">
      <h2 className="uppercase text-2xl text-center text-blue-400 font-semibold mb-5">
        User Form
      </h2>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Vorname"
          {...register("vorname")}
          className="bg-neutral-300 text-sm px-4 py-3"
        />
        <p className="text-red-600">{errors.vorname?.message}</p>

        <input
          type="text"
          placeholder="Nachname"
          {...register("nachname")}
          className="bg-neutral-300 text-sm px-4 py-3"
        />
        <p className="text-red-600">{errors.nachname?.message}</p>

        <select
          id="userrole"
          {...register("userrole")}
          className="bg-neutral-300 text-sm px-4 py-3 appearance-none">
          <option value="">Userrole</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="User">User</option>
        </select>
        <p className="text-red-600">{errors.userrole?.message}</p>

        <div className="flex gap-2">
          <input type="checkbox" id="newsletter" {...register("newsletter")} />
          <label htmlFor="newsletter" className="text-sm">
            Newsletter
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-400 hover:bg-black hover:transition-all uppercase text-sm text-white font-semibold p-3 mt-3">
          Absenden
        </button>
      </form>
    </section>
  );
};
