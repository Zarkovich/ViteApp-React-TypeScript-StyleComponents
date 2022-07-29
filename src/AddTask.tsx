import styled from "styled-components";
import { useRef, useState } from "react";

// * Style
const Input = styled.input`
  width: 88%;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: center;
  font-size: 16px;
  padding: 5px 0;
  outline: none;
  color: white;
  margin-right: 10px;

  &:focus {
    border: 1px solid blueviolet;
  }
`;

const Button = styled.button`
  background-color: blueviolet;
  border: none;
  padding: 10px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 0 10px;
  justify-content: space-between;
`;

// * Component

function AddTask({ handleAddTask }: { handleAddTask: any }) {
  const [newtask, setNewTask] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleNewTask(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function AddNewTask() {
    if (newtask.length === 0) return;
    handleAddTask(newtask);
    setNewTask("");
    inputRef.current?.focus();
  }

  return (
    <SearchContainer>
      <Input
        ref={inputRef}
        placeholder='Insira uma Tarefa'
        type='text'
        onChange={handleNewTask}
        value={newtask}
      />
      <Button onClick={AddNewTask}>Adicionar</Button>
    </SearchContainer>
  );
}

export default AddTask;
