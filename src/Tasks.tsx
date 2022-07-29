import styled from "styled-components";
import Task from "./Task";

// ! style:

const TasksContainer = styled.div`
  width: 97%;
  height: 70%;
  margin: auto;
`;

// * Component:

interface TaskInterface {
  name: string;
  completed: boolean;
}

function Tasks({ tasks }: { tasks: any }) {
  return (
    <TasksContainer>
      {tasks.map((task: TaskInterface, index: number) => (
        <Task key={index} name={task.name} completed={task.completed} />
      ))}
    </TasksContainer>
  );
}

export default Tasks;
