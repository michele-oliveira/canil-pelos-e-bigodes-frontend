import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "../components/react-stacked-toast";
import Container from "../components/Container";
import Content from "../components/Content";
import Header from "../components/Header";
import ProfilePictureSelector from "../components/ProfilePictureSelector";
import Footer from "../components/Footer";
import { registerUser } from "../api/users/users.api";
import InvalidImageFileError from "../errors/files/InvalidImageFileError";
import InvalidFileAmountSelectedError from "../errors/files/InvalidFileAmountSelectedError";
import FormValidationError from "../errors/validation/FormValidationError";
import BadRequestError from "../errors/http/BadRequestError";
import ConflictError from "../errors/http/ConflictError";

function Register() {
  const [profilePic, setProfilePic] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onSelectImageError = (error) => {
    if (error instanceof InvalidImageFileError) {
      toast({
        title: "Imagem inválida",
        description: "Por favor, envie uma imagem JPG, JPEG ou PNG",
        type: "warning",
        duration: 3000,
      });
    } else if (error instanceof InvalidFileAmountSelectedError) {
      toast({
        title: "Envio inválido",
        description: "Por favor, envie apenas uma imagem",
        type: "warning",
        duration: 3000,
      });
    } else {
      toast({
        title: "Erro inesperado ao atualizar imagem",
        description:
          "Por favor, tente novamente. Se achar que se trata de uma falha, acione o suporte",
        type: "error",
        duration: 3000,
      });
      console.error(error);
    }
  };

  const validateForm = () => {
    if (password !== confirmPassword) {
      throw new FormValidationError(
        "Password and password confirmation do not match"
      );
    }

    return true;
  };

  const formatRequestBody = () => {
    const formData = new FormData();
    if (profilePic) formData.append("profile_picture", profilePic);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);

    return formData;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      validateForm();
      const requestBody = formatRequestBody();
      await registerUser(requestBody);
      toast({
        title: "Usuário cadastrado com sucesso",
        type: "success",
        duration: 2000,
      });
      navigate("/login");
    } catch (error) {
      if (error instanceof FormValidationError) {
        toast({
          title: "Formulário inválido",
          description:
            "Ops, parece que o formulário contém um ou mais campos inválidos. Por favor, revise o formulário e tente novamente",
          type: "warning",
          duration: 3500,
        });
      } else if (error instanceof ConflictError) {
        toast({
          title: "Este email já está em uso",
          description:
            "Por favor, tente outro email ou faça login, caso seja o dono desta conta",
          type: "error",
          duration: 3500,
        });
      } else if (error instanceof BadRequestError) {
        toast({
          title: "Dados da requisição inválidos",
          description:
            "Ops, parece que o formulário contém um ou mais campos inválidos. Por favor, revise o formulário e tente novamente",
          type: "error",
          duration: 3500,
        });
      } else {
        toast({
          title: "Erro inesperado",
          description:
            "Tivemos um erro inesperado durante o cadastro. Por favor, tente novamente ou acione o suporte caso o erro persista",
          type: "error",
          duration: 3500,
        });
      }
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <div className="relative bg-gray-800 m-20 p-32 rounded-lg flex flex-col md:flex-row items-center overflow-hidden mx-auto max-w-4xl">
          <div className="relative z-10 flex flex-col justify-center flex-grow md:mr-6 mb-6 md:mb-0">
            <h1
              className="flex justify-center mb-4 pb-5 text-2xl md:text-3xl font-bold text-gray-50 text-center md:text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Cadastre-se e faça parte da nossa família
            </h1>
            <form onSubmit={handleSignup} className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col w-full mb-3 items-center">
                <ProfilePictureSelector
                  image={profilePic}
                  setImage={setProfilePic}
                  onError={onSelectImageError}
                />
                <h4 className="mt-3 text-lg text-white">Sua foto de perfil</h4>
              </div>

              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-2 rounded-md border border-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 rounded-md border border-gray-300"
              />
              <input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
              <input
                type="password"
                placeholder="Confirmar senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="p-2 rounded-md border border-gray-300"
              />
              <button
                type="submit"
                className="bg-green-600 text-white py-2 text-lg rounded hover:bg-green-700 transition-colors duration-300"
              >
                Cadastrar
              </button>
            </form>
            <p className="text-lg text-gray-50 text-center">
              Já tem uma conta?{" "}
              <button type="submit" className="text-green-400 underline">
                Faça Login
              </button>
            </p>
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}

export default Register;
