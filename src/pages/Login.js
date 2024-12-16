import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "../components/react-stacked-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { login } from "../api/users/users.api";
import UnauthorizedError from "../errors/http/UnauthorizedError";
import { useAuth } from "../hooks/useAuth";
import { saveJwt } from "../utils/jwt";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = { email, password };
      const response = await login(credentials);
      saveJwt(response.accessToken);
      setUser(response.accessToken);
      navigate("/");
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        toast({
          title: "E-mail ou senha incorretos",
          description: "Redigite suas credenciais e tente novamente",
          type: "error",
          duration: 3000,
        });
      } else {
        toast({
          title: "Houve um erro inesperado",
          description: "Por favor, tente novamente",
          type: "error",
          duration: 3000,
        });
      }
    }
  };

  const handleRedirectToSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <div className="relative bg-gray-800 m-20 p-32 rounded-lg flex flex-col md:flex-row items-center overflow-hidden mx-auto max-w-4xl">
        <div className="relative z-10 flex flex-col justify-center flex-grow md:mr-6 mb-6 md:mb-0">
          <h1
            className="text-2xl flex justify-center md:text-3xl font-bold text-gray-50 mb-4 text-center md:text-left pb-5 "
            style={{ fontFamily: "Montserrat, serif" }}
          >
            Faça Login e informe um amigo
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded-md border border-gray-300"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 rounded-md border border-gray-300"
            />
            <button
              type="submit"
              className="bg-green-600 text-white py-2 text-lg rounded hover:bg-green-700 transition-colors duration-300"
            >
              Entrar
            </button>
          </form>
          <p className="text-lg text-gray-50 text-center">
            Não tem uma conta?{" "}
            <button
              onClick={handleRedirectToSignup}
              className="text-green-400 underline"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
