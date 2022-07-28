import React, {useState} from 'react';
import styles from './Game.module.scss'
import Board from "../Board/Board";
import {winEngine} from "../../engine";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xNext, setXNext] = useState(true)



    const winner = winEngine(board)
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return
        boardCopy[index] = xNext ? 'X' : '0'
        setBoard(boardCopy)
        setXNext(!xNext)
        console.log(board)
    }

    const referee  = () =>{
        if (winner){
            return xNext ? '0-winner' : 'X-winner'
        }
        // else if(!winner && !tieCheck(board)){
        //     return 'Tie.'
        // }


        return xNext ? `X-turn` : `0-turn`
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <button onClick={()=>setBoard(Array(9).fill(null))} >Start new game</button>
                <Board squares={board} click={handleClick}/>
                <h2>{referee()}</h2>
            </div>
        </div>
    );
};

export default Game;
