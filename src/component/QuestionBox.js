import React, { useState } from 'react'


//function component
//this are the props (q,a,c)
const QuestionBox = ({ q, a , selected}) => {
    const [ans, setAns] = useState(a);
    return (
        <div className="questionBox">
            <div className="question">{q}</div>
            {ans.map(( option, index ) => (
                <button key={index} className='answerBtn' onClick={()=>{
                    setAns([option]);
                    selected(option);
                }}>{option}</button>
            ))}
        </div>
    )
}
export default QuestionBox;