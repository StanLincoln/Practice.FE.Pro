import React from "react";
import { useForm } from "react-hook-form";
import classes from "./DwarfForm.module.css";

export default function DwarfForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Определить функцию createUser, кторая будет отправлять ПОСТ-звапрос
  // на адрес https://jsonplaceholder.typicode.com/users
  // тело запроса - это сериализованный JSON объект, который содержит id = 1
  // name = 'Vasya'.
  // Headers: content-type: application/json

  // const createUser = async () => {
  //   try{
  //     const response = await fetch('https://dummyjson.com/users/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         id: 1,
  //         name: 'Vasya',
  //       })
  //     })
  //     if (!response.ok) throw new Error("Couldn't add the user");
  //     const data = await response.json()
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const submitForm = (data) => {
    console.log(data);
    reset();
  };

  const errorForm = (errors) => {
    console.log("Please, fix all errors!");
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm, errorForm)}
      className={classes.dwarfForm}
    >
      <label htmlFor="dwarfName">Enter your name, brave dwarf!</label>
      <input
        {...register("dwarfName", {
          required: "We do not need anonymous dwarves!",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
          maxLength: {
            value: 12,
            message: "Name cannot exceed 12 characters",
          },
        })}
        className={classes.dwarfFormInput}
        type="text"
      />
      {errors.dwarfName && errors.dwarfName.message && (
        <p className={classes.errorField}>{errors.dwarfName.message}</p>
      )}

      <label htmlFor="weapon">What weapon do you prefer?</label>
      <input
        {...register("weapon", {
          required: "You will not be userful without weapon!",
        })}
        className={classes.dwarfFormInput}
        type="text"
      />
      {errors.weapon && errors.weapon.message && (
        <p className={classes.errorField}>{errors.weapon.message}</p>
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

      <button type="submit" className={classes.dwarfFormButton}>
        Join Torin's troop!
      </button>
    </form>
  );
}
