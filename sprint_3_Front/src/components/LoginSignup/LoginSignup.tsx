import { useNavigate } from "react-router-dom";
import email from "../../assets/img/email.png";
import user from "../../assets/img/user.png";
import lock from "../../assets/img/lock.png";
import { BackgroundLogin, LoginLayout } from "../../style/styled";
import { useEffect, useState } from "react";

export const LoginSignup = () => {
  const navigate = useNavigate();
  const [acao, setAcao] = useState(
    () => localStorage.getItem("acao") || "Login"
  );
  const [usuario, setUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState(() => {
    const storedUsuarios = localStorage.getItem("usuarios");
    return storedUsuarios ? JSON.parse(storedUsuarios) : [];
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("acao", acao);
  }, [acao]);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCadastro = () => {
    if (!validateEmail(emailUsuario)) {
      setError("Por favor, insira um e-mail válido.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    if (usuario && emailUsuario && senha) {
      setUsuarios([...usuarios, { usuario, email: emailUsuario, senha }]);
      setUsuario("");
      setEmailUsuario("");
      setSenha("");
      setAcao("Login");
      setError("");
    } else {
      setError("Por favor, preencha todos os campos.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleLogin = () => {
    if (!validateEmail(emailUsuario)) {
      setError("Por favor, insira um e-mail válido.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    const usuarioEncontrado = usuarios.find(
      (user: { email: string; senha: string }) =>
        user.email === emailUsuario && user.senha === senha
    );
    if (usuarioEncontrado) {
      localStorage.setItem("usuarioLogado", usuarioEncontrado.usuario);
      navigate("/");
      setError("");
    } else {
      setError("Usuário ou senha incorretos.");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div>
      <BackgroundLogin>
        <LoginLayout>
          <div className="login-container">
            <div className="headerlogin">
              <div className="texto">{acao}</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              {acao === "Cadastro" && (
                <div className="input">
                  <img src={user} alt="" />
                  <input
                    type="text"
                    placeholder="Usuário"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>
              )}
              <div className="input">
                <img src={email} alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  value={emailUsuario}
                  onChange={(e) => setEmailUsuario(e.target.value)}
                />
              </div>
              <div className="input">
                <img src={lock} alt="" />
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>
            <div className="submit-container">
              {acao === "Login" ? (
                <div className="submit" onClick={handleLogin}>
                  Login
                </div>
              ) : (
                <div className="submit" onClick={handleCadastro}>
                  Cadastro
                </div>
              )}
              <div
                className="submit"
                onClick={() => setAcao(acao === "Login" ? "Cadastro" : "Login")}
              >
                {acao === "Login" ? "Criar Conta" : "Voltar ao Login"}
              </div>
            </div>
          </div>
        </LoginLayout>
      </BackgroundLogin>
    </div>
  );
};
