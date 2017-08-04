import React from 'react';

import Cell from './Cell';

const Board = props => {
  return (
    <div>
      <table>
        <tbody>
          {props.board.grid.map((row, yCoord) => (
            <tr key={yCoord}>
              { row.map((cell, xCoord) => (
                <Cell key={xCoord}
                  status={props.board.grid[yCoord][xCoord].status}
                  handleClick={() => props.toggleCell(xCoord, yCoord)} />
              )) }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
