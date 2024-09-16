import email from "../../assets/img/email.png";
import user from "../../assets/img/user.png";
import lock from "../../assets/img/lock.png";
import { BackgroundLogin, LoginLayout } from "../../style/styled";

export const LoginSignup = () => {
  return (
    
    <div>
        <BackgroundLogin>
        <LoginLayout>
        <div className="login-container">
        <div className="headerlogin">
        <div className="texto">Cadastro</div>
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
      <div className="forgot-password">Esqueceu a senha? <span>Clique Aqui!</span></div>
      <div className="submit-container">
        <div className="submit">Cadastro</div>
        <div className="submit">Login</div>
        </div>
      </div>
      </LoginLayout>
      </BackgroundLogin>
    </div>
  );
};
