import styled from "styled-components";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

// Se precisar de alguma definição extra de CSS, basta colocar o código CSS dentro das crases abaixo
const LoginContainer = styled.main``;

const Login = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const login = (dados) => {
    console.log(dados);
  }

  return (
    <>
      <LoginContainer className="h-screen surface-100 flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(login)} className="surface-0 p-3 border-round-sm lg:w-20rem sm:w-6">
          <label htmlFor="email" className="block text-sm font-bold uppercase mb-1">Email</label>
          <InputText
            id='email'
            type='email'
            placeholder="email@gmail.com"
            className="w-full mb-3"
            {...register('email', {required: true})}
          />
          <label htmlFor="password" className="block text-sm font-bold uppercase mb-1">Senha</label>
          <InputText
            id="password"
            placeholder="********"
            className="w-full"
            // toggleMask
            // feedback={false}
            // panelClassName="w-full"
            // inputClassName="w-full"
            // panelStyle={{ width: '100%'}}
            {...register('password', {required: true})}
            aria-invalid={errors.password === 'required' ? true : false}
            aria-describedby="password-help"
          />
          {
            errors.password && (
              <small id='password-help' className="text-red-500 -mt-3 w-full">Campo obrigatório</small>
            )
          }
          <Button label="Entrar" type="submit" className="w-full mt-3" />
        </form>
      </LoginContainer>
    </>
  );
}
 
export default Login;