// Nesse arquivo, faremos um hook personalizado
// Os hooks atenderão às operações de um CRUD
// Para os hooks de GET, usa-se useQuery
// Para os demais hooks do CRUD, usa-se useMutation

import { useMutation, useQuery } from "@tanstack/react-query";
import { API, queryClient } from "../services"

// Todo hook começa com "use" para que o React identifique automaticamente
export const useBuscarTarefas = () => {
  return useQuery({
    queryKey: ['tarefas'],
    queryFn: async () => {
      const response = await API.get('/tarefas');
      return response.data;
    }
  })
}

export const useCriarTarefa = () => {
  return useMutation({
    mutationFn: async (tarefa) => {
      const response = await API.post('/tarefas', tarefa);
      return response.data;
    },
    onSuccess: (data) => { // Em caso de sucesso (status 200-299), invalida os dados carregados e aciona novamente o buscar tarefas
      console.log(2);
      queryClient.invalidateQueries({
        queryKey: ['tarefas']
      })
    }
  })
}
