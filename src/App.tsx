import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

// ! style:

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  height: 100vh;
  background-color: #424242;
  padding: 100px 0;
  font-size: 18px;
`;

const Container = styled.div`
  margin: auto;
  width: 40%;
  min-width: 300px;
  min-height: 300px;
  height: 50%;
  border: 2px solid blueviolet;
  border-radius: 8px;
  box-shadow: 5px 5px 10px #00000075;
`;

const Header = styled.h1`
  color: white;
  padding: 5px 15px;
  text-shadow: 1px 1px 2px #000000;
`;

//* Component:

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Estudar",
      description: "Estudar NodeJS",
      completed: true,
    },
  ]);

  function handleAddTask(name: string) {
    const newTask = [
      ...tasks,
      {
        id: uuidv4(),
        name: name,
        description: "lorem",
        completed: false,
      },
    ];

    setTasks(newTask);
    console.log(newTask);
  }

  return (
    <Body>
      <Container>
        <Header>Lista de Tarefas</Header>
        <AddTask handleAddTask={handleAddTask} />
        <Tasks tasks={tasks} />
      </Container>
    </Body>
  );
}

export default App;
