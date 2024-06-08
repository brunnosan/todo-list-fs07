import styled from "styled-components";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useBuscarTarefas, useCriarTarefa } from "../../../hooks/tarefaHooks";

const HomeContainer = styled.section``;

const Home = () => {

  const [ visibleDialog, setVisibleDialog ] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  // Usando os hooks personalizados recebendo objeto desestruturado (ou seja, trazendo apenas os objetos que serão usados)
  const { data: tarefas, isFetched } = useBuscarTarefas(); // Caso seja usado mais de um hook, pode-se apelidar o nome da variável data de retorno do useQuery
  const { mutateAsync: criar } = useCriarTarefa();

  const criarTarefa = (dados) => {
    criar(dados, {
      onSuccess: () => {
        console.log(1);
        setVisibleDialog(false);
        reset();
      },
      onError: () => {
        console.log('Erro');
      }
    });
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
        {
          isFetched && tarefas.map((tarefa) => (
            <div key={tarefa.id}>
              <h5>{tarefa.titulo}</h5>
              <p>{tarefa.descricao}</p>
            </div>
          ))
        }
        <Dialog header="Nova tarefa" closeOnEscape visible={visibleDialog} onHide={() => setVisibleDialog(false)}>
          <form className="flex flex-column gap-3"
            onSubmit={handleSubmit(criarTarefa)}
          >
            <InputText placeholder="Nome da tarefa"
              {...register("titulo", {require: true})}
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