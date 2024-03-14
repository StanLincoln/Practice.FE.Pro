import React, { useState } from "react";
import classes from "./formDwarf.module.css";
import { useForm } from "react-hook-form";

const FormDwarf = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const [formError, setFormError] = useState("");

  const dwarfSubmitHandler = async (formData) => {
    if (formData.dwarfName === "Dvalin" && formData.weapon === "Sword") {
      setFormError(`You already have 2 axes!`);
    } else {
      setFormError("");
      console.log(formData);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const result = response.json();
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }

      const savedDwarves = JSON.parse(localStorage.getItem("submittedDwarves")) || [];
      localStorage.setItem("submittedDwarves", JSON.stringify([...savedDwarves, formData]));

      onFormSubmit(formData);
      reset();
    }
  };

  //   const checkForm = () => {
  //     const { dwarfName, weapon, email } = getValues();
  //     if (
  //       !dwarfName ||
  //       !weapon ||
  //   !age ||
  //       !email ||
  //       weapon.toLowerCase() === "crossbow"
  //     ) {
  //       setFormError("Some errors occurred!");
  //     } else {
  //       setFormError("");
  //     }
  //   };

  const checkForm = () => {
    const formInputs = getValues();
    let errorMessage = "";
    for (let [key, value] of Object.entries(formInputs)) {
      if (!value) {
        errorMessage += `Field ${key} is empty! `;
      }
    }
    setFormError(errorMessage);
  };

  return (
    <form
      onSubmit={handleSubmit(dwarfSubmitHandler)}
      className={classes.dwarfForm}
    >
      <label htmlFor="dwarfName">Enter your name, brave dwarf!</label>
      <input
        className={classes.dwarfFormInput}
        id="dwarfName"
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
        <p className={classes.errorField}>{errors.dwarfName.message}</p>
      )}

      <label htmlFor="weapon">What weapon do you prefer?</label>
      <input
        className={classes.dwarfFormInput}
        id="weapon"
        type="text"
        {...register("weapon", {
          required: "Choose your weapon!",
          validate: (value) =>
            value.toLowerCase() !== "crossbow" ||
            "We need only strong dwarwes, no shooters!",
        })}
      />
      {errors.weapon && errors.weapon.message && (
        <p className={classes.errorField}>{errors.weapon.message}</p>
      )}

      <label htmlFor="age">How old are you?</label>
      <input
        className={classes.dwarfFormInput}
        id="age"
        type="number"
        {...register("age", {
          required: "How old are you?",
          min: {
            value: 100,
            message: "You must be older than 100 years!!!",
          },
        })}
      />
      {errors.age && errors.age.message && (
        <p className={classes.errorField}>{errors.age.message}</p>
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

      {formError && <p className={classes.errorField}>{formError}</p>}
      <button
        type="button"
        className={classes.dwarfFormButton}
        onClick={checkForm}
      >
        Check form!
      </button>
      <button className={classes.dwarfFormButton} type="submit">
        Join Torin's troop!
      </button>
    </form>
  );
};

export default FormDwarf;
