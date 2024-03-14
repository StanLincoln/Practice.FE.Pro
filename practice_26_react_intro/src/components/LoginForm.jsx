import React from 'react';

export default function LoginForm() {
    return (
        <form>
      <label for="login">Login:</label>
      <input type="text" id="login" name="login" />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Вход</button>
    </form>
    )
}