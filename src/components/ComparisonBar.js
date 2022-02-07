import React from 'react';
import {connect} from 'react-redux'
function ComparisonBar({totalVote, numVote}) {

    return (
        <div
        className="grayBar"
        style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${totalVote}, 1fr)`,
            backgroundColor: 'gray',
            height: '3rem'
        }}
        >
            <div
            className='greenBar'
            style={!numVote?
                {
                    display: 'flex',
                    justifyContent:'left',
                    alignItems:'center',
                    paddingLeft: '0.25rem'
                }
                :
                {
                    gridColumn: `1/${1+numVote}`,
                    backgroundColor:'green',
                    display: 'flex',
                    justifyContent:'right',
                    alignItems:'center',
                    paddingRight: '0.25rem'
            }}
            >
                {`${Math.round(numVote/totalVote*100)}%`}
            </div>
        </div>
    );
}

const mapStateToProps =({authedUser, questions})=>{
    return {
        authedUser,
        questions
    }

}
export default connect(mapStateToProps)(ComparisonBar)