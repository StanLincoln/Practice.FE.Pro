import React, { useEffect, useState } from "react";

import classes from "./DwarfForm.module.css";

import { useForm } from "react-hook-form";

export default function DwarfForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [formError, setFormError] = useState("");

  const dwarfSubmitHandler = async (formData) => {
    if (formData.dwarfName === "Dvalin" && formData.dwarfWeapon === "Sword") {
      setFormError("You already have 2 axes!");
    } else {
      setFormError("");
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(formData),
          }
        );
        if(!response.ok) {
          throw new Error ('Failed to fetch')
        }
        const result = await response.json();
        console.log("Response", result);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const dwarfErrorHandler = (formErrors) => {
    console.log(formErrors);
    //console.error('Fix All Errors!')
  };

  const checkForm = () => {
    const { dwarfName, dwarfWeapon } = getValues();
    if (
      !dwarfName ||
      !dwarfWeapon ||
      dwarfWeapon.toLowerCase() !== "croosbow"
    ) {
      setFormError("Some errors occured!");
    } else {
      setFormError("");
    }
  };

  // const checkForm = () => {
  //   const formInputs = getValues();
  //   let errorMessage = '';
  //   for (let [key, value] of Object.entries(formInputs)) {
  //     if (!value) {
  //       errorMessage += `Field ${key} is empty!`;
  //     }
  //   }
  //   setFormError(errorMessage);
  // }

  return (
    <form
      onSubmit={handleSubmit(dwarfSubmitHandler, dwarfErrorHandler)}
      className={classes.dwarfForm}
    >
      <label htmlFor="dwarfName">Enter your name, brave dwarf!</label>
      <input
        className={classes.dwarfFormInput}
        type="text"
        {...register("dwarfName", {
          required: "Please, enter your name!",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
          maxLength: {
            value: 12,
            message: "Name cannot exceed 12 characters",
          },
        })}
      />
      {errors.dwarfName && errors.dwarfName.message && (
        <p>{errors.dwarfName.message}</p>
      )}

      <label htmlFor="weapon">What weapon do you prefer?</label>
      <input
        className={classes.dwarfFormInput}
        type="text"
        {...register("dwarfWeapon", {
          required: "Choose your weapon!",
          validate: (value) =>
            value.toLowerCase() !== "crossbow" ||
            "We need only strong dwarwes, no shooters!",
        })}
      />
      {errors.dwarfWeapon && errors.dwarfWeapon.message && (
        <p>{errors.dwarfWeapon.message}</p>
      )}

      <label htmlFor="email">Your email address</label>
      <input
        className={classes.dwarfFormInput}
        id="email"
        type="text"
        {...register("email", {
          required: "All our eagles are busy now, please, put your email!",
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Invalid email address.",
          },
        })}
      />
      {errors.email && errors.email.message && (
        <p className={classes.errorField}>{errors.email.message}</p>
      )}

      {formError && <p>{formError}</p>}

      <button
        type="button"
        className={classes.dwarfFormButton}
        onClick={checkForm}
      >
        Check Form
      </button>
      <button type="submit" className={classes.dwarfFormButton}>Join Torin's troop!</button>
    </form>
  );
}
