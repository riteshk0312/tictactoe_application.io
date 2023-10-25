import React from 'react'
import Square from './Square'
import { useState } from 'react'

const Board = () => {

    const [squares,setSquares] = useState(Array(9).fill(null))
    const [XisNext,setXisNext] = useState(true);

    const winner = CalculateWinner(squares);
    let status;

    if(winner){
        status = "Winner is :" + winner
    }else{
        status = "Next Player is :" + (XisNext ? "X":"0")
    }

    const handleClick = (i) =>{

        if(CalculateWinner(squares) || squares[i]){
            return;
        }


        const nextSquares = squares.slice();

        if(squares[i]){
            return;
        }

        if(XisNext){
            nextSquares[i] = 'X'; 
        }else{
            nextSquares[i] = '0';
            
        }

        setSquares(nextSquares);
        setXisNext(!XisNext);

        
        
    }
    return (
        <>
            <h1>TicTacToe</h1><br/>
            <div className='boardRow'>
                <Square value = {squares[0]} onSquareClick={()=>handleClick(0)} />
                <Square value = {squares[1]} onSquareClick={()=>handleClick(1)} />
                <Square value = {squares[2]} onSquareClick={()=>handleClick(2)} />
            </div>

            <div className='boardRow'>
                <Square value = {squares[3]} onSquareClick={()=>handleClick(3)} />
                <Square value = {squares[4]} onSquareClick={()=>handleClick(4)} />
                <Square value = {squares[5]} onSquareClick={()=>handleClick(5)} />
            </div>

            <div className='boardRow'>
                <Square value = {squares[6]} onSquareClick={()=>handleClick(6)} />
                <Square value = {squares[7]} onSquareClick={()=>handleClick(7)} />
                <Square value = {squares[8]} onSquareClick={()=>handleClick(8)} />
            </div><br/>
            <h1>{status}</h1>
        </>
    )
}

function CalculateWinner(squares){

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i<lines.length;i++){
        const [a,b,c] = lines[i]

        if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Board