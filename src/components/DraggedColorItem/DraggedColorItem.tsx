import React, { FC } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import { ColorItem } from "../ColorItem";
import { ColorItemsMethods, Colors } from "types";
import { reorder } from "./helpers";

interface DraggedColorItemProps extends ColorItemsMethods {
  colors: Colors[];
  onMoveColor: (items: Colors[]) => void;
}

export const DraggedColorItem: FC<DraggedColorItemProps> = ({ colors, onMoveColor, ...rest }) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(colors, result.source.index, result.destination.index);

    onMoveColor(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {colors.map((color, index) => (
              <Draggable key={color.id} draggableId={color.id} index={index}>
                {(provided) => <ColorItem key={color.id} {...color} {...rest} provided={provided} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
