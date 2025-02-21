import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="grid h-screen lg:grid-cols-2">
      {/* Lado Esquerdo - Formulário */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="flex flex-col items-center gap-2 group">
              <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-xl bg-primary/10 group-hover:bg-primary/20">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="mt-2 text-2xl font-bold">Bem-vindo de volta</h1>
              <p className="text-base-content/60">Faça login na sua conta</p>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="font-medium label-text">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="voce@exemplo.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="font-medium label-text">Senha</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-base-content/40" />
                  ) : (
                    <Eye className="w-5 h-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Carregando...
                </>
              ) : (
                "Entrar"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Não tem uma conta?{" "}
              <Link to="/signup" className="link link-primary">
                Criar conta
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Lado Direito - Imagem/Padrão */}
      <AuthImagePattern
        title={"Bem-vindo de volta!"}
        subtitle={
          "Faça login para continuar suas conversas e atualizar suas mensagens."
        }
      />
    </div>
  );
};
export default LoginPage;
