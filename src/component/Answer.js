import React from 'react'

const Answer=({score,playAgain})=>{
    return(
        <div className='score-board'>
           <div className="score">You scored {score}/5 out of 5 question!</div>
           <button className='playBtn' onClick={playAgain}>Play Again</button>
        </div>
    )
}
export default Answer;