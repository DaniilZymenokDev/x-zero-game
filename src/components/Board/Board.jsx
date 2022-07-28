import React from 'react';
import styles from './Board.module.scss'
import Square from "../Square/Square";

const Board = ({squares, click}) => {
    return (
        <div className={styles.board}>
            {
                squares.map((square, key)=>(
                    <Square key={key} value={square} onClick={()=>click(key)} />
                ))
            }
        </div>
    );
};

export default Board;
