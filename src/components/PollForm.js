import React from 'react';

function PollForm({optionOneText, optionTwoText, handleSelection, handleSubmit}) {
    return (
        <div>
            <form>
                <div>
                    <input type="radio" name="answer" id="optionOne" defaultChecked onClick={handleSelection}/>
                    <label htmlFor="optionOne">{optionOneText}</label>
                </div>
                <div>
                    <input type="radio" name="answer" id="optionTwo" onClick={handleSelection}/>
                    <label htmlFor="optionTwo">{optionTwoText}</label>
                </div>
                <input className="primaryButton" type="submit" value="Submit" onClick={(e)=>{handleSubmit(e)}}/>
            </form>
        </div>
    );
}

export default PollForm;