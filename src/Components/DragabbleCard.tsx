import React from "react";
import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components";

interface IProps {
  toDo: string
  index: number
}
const DragabbleCard = ({ toDo, index }: IProps) => {
  return (
    <Draggable draggableId={toDo} index={index}>
      {(magic, snapshot) => <Card
        isDragging={snapshot.isDragging}
        ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}
      >
        <span>🍎</span>{toDo}
      </Card>
      }
    </Draggable>
  )
}

export default React.memo(DragabbleCard);

const Card = styled.div<{ isDragging: boolean }> `
  background-color: ${props => props.isDragging ? "#74b9ff" : props.theme.cardColor};
  padding:5px 10px;
  border-radius:5px;
  box-shadow: ${props => props.isDragging ? "0 2px 25px rgba(0,0,0,.5)" : ''};
  & + & {
    margin-top:10px;
  }
`;