import styled from "styled-components";
import { useState } from "react";

//! style:

interface Props {
  completed?: boolean;
}

const TaskContainer = styled.div<Props>`
  background-color: #747474;
  border-left: ${(props) =>
    props.completed ? "8px solid blueviolet" : "none"};
  border-radius: 6px;
  box-shadow: 5px 5px 10px #0000006e;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      transform: none;
    }
  }
`;

// * Component:

function Task({ name, completed }: { name: string; completed?: boolean }) {
  const [state, setState] = useState(completed);

  function ToggleState() {
    setState(!state);
  }

  return (
    <TaskContainer onClick={ToggleState} completed={state}>
      {name}
    </TaskContainer>
  );
}

export default Task;
