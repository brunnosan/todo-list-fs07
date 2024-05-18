import styled from "styled-components";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { useForm } from "react-hook-form";

const HomeContainer = styled.section``;

const Home = () => {

  const [ visibleDialog, setVisibleDialog ] = useState(false);
  const { register, handleSubmit } = useForm();

  const criarTarefa = (dados) => {
    console.log(dados);
  }

  return (
    <>
      <HomeContainer className="px-8 py-6">
        <h1 className="flex justify-content-between align-items-center">
          Tarefas
          <Button
            icon="pi pi-plus"
            label="Nova tarefa"
            onClick={() => setVisibleDialog(true)}
          />
        </h1>
        <Dialog header="Nova tarefa" closeOnEscape visible={visibleDialog} onHide={() => setVisibleDialog(false)}>
          <form className="flex flex-column gap-3"
            onSubmit={handleSubmit(criarTarefa)}
          >
            <InputText placeholder="Nome da tarefa"
              {...register("nome", {require: true})}
            />
            <InputTextarea placeholder="Descrição da tarefa"
              {...register("descricao", {require: true})}
            />
            <Button type="submit" label="Salvar" />
          </form>
        </Dialog>
      </HomeContainer>
    </>
  );
}
 
export default Home;