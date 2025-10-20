import { useForm } from 'react-hook-form';
import * as S from './FormContact.styles';
import toast, { Toaster } from 'react-hot-toast';

type FormInputs = {
  nome: string;
  empresa: string;
  telefone?: string;
  email: string;
  assunto?: string;
  mensagem: string;
};

export const FormContact = () => {
   const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

 // Toast de teste (simulação)
  const onSubmitTest = async (data: FormInputs) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "Mensagem enviada com sucesso! 🎉 Em breve entraremos em contato",
        { duration: 9000 }
      );
      reset();
    } catch (error) {
      toast.error("Erro ao enviar (simulação).", { duration: 4000 });
    }
  };

  const onSubmit = async (data: FormInputs) => {
    try {
      const response = await fetch("https://formspree.io/f/mldpvpbd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          "Mensagem enviada com sucesso! 🎉 Agradecemos o contato e responderemos em breve.",
          { duration: 4000 }
        );
        reset();
      } else {
        toast.error("Erro ao enviar. Tente novamente.", { duration: 4000 });
      }
    } catch (error) {
      toast.error("Erro de conexão. Tente novamente mais tarde.", { duration: 4000 });
      console.error(error);
    }
  };

  return (
    <S.FormContainer>
      <Toaster
        containerStyle={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          zIndex: 9999,
        }}
        toastOptions={{
          style: {
            background: "#001837",
            color: "#fff",
            fontSize: "16px",
            padding: "16px 24px",
            borderRadius: "12px",
            maxWidth: "400px",
            textAlign: "center",
          },
        }}
      />
      
      <form>
        <S.FieldGroup>
          <div style={{ flex: 1 }}>
             <label>Nome *</label>
            <S.Input
              placeholder="Nome"
              {...register("nome", { required: "O nome é obrigatório." })}
            />
            {errors.nome && <S.ErrorMessage>{errors.nome.message}</S.ErrorMessage>}
          </div>

          <div style={{ flex: 1 }}>
            <label>Empresa *</label>
            <S.Input
              placeholder="Empresa"
              {...register("empresa", { required: "A empresa é obrigatória." })}
            />
            {errors.empresa && (
              <S.ErrorMessage>{errors.empresa.message}</S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>

        {/* Telefone e Email */}
        <S.FieldGroup>
          <div style={{ flex: 1 }}>
            <label>Telefone</label>
            <S.Input placeholder="Telefone" {...register("telefone")} />
          </div>

          <div style={{ flex: 1 }}>
            <label>E-mail *</label>
            <S.Input
              placeholder="E-mail"
              type="email"
              {...register("email", {
                required: "O e-mail é obrigatório.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido.",
                },
              })}
            />
            {errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>

        {/* Assunto */}
        <div>
          <label>Assunto</label>
          <S.Input placeholder="Assunto" {...register("assunto")} />
        </div>

        {/* Mensagem */}
        <div>
          <label>Mensagem *</label>
          <S.TextArea
            placeholder="Mensagem"
            rows={4}
            {...register("mensagem", {
              required: "A mensagem é obrigatória.",
              minLength: {
                value: 5,
                message: "A mensagem deve ter pelo menos 5 caracteres.",
              },
            })}
          />
          {errors.mensagem && (
            <S.ErrorMessage>{errors.mensagem.message}</S.ErrorMessage>
          )}
        </div>

        {/* Botão de envio */}
        <S.Button
          type="button" // 🔹 evita envio via Enter
          onClick={handleSubmit(onSubmitTest)} // 🔹 só envia no clique
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </S.Button>
      </form>
    </S.FormContainer>
  );
};
