import React from "react";
import email from "../../assets/img/email.png";
import user from "../../assets/img/user.png";
import lock from "../../assets/img/lock.png";

export const LoginSignup = () => {
  return (
    <div>
      <div className="loginheader">
        <div className="login">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user} alt="" />
          <input type="text" placeholder="Usuário" />
        </div>
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={lock} alt="" />
          <input type="password" placeholder="Senha" />
        </div>
      </div>
    </div>
  );
};
