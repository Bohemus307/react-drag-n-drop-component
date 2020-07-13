import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => 
    props.isDragDisabled // <== sets color of locked card
    ? 'lightgrey' 
    : props.isDragging
     ? 'lightGreen' 
     : 'white'};
`;
export default class Task extends React.Component {
  render() {
    // to lock card in place use this variable it 
    const isDragDisabled = this.props.task.id === 'null'
    return (
      <Draggable 
        draggableId={this.props.task.id} 
        index={this.props.index} 
        isDragDisabled={isDragDisabled}
      >
        {(provided , snapshot) => (
          <Container
          // these props need to b applied to component that moves
            {...provided.draggableProps}
          // component that u use to control entire component
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
};
