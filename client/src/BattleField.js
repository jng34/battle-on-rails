import React from 'react';
import QuestionCard from './QuestionCard';
import UserCard from './UserCard';


function BattleField() {
    return (
        <div>
            Battlefield
            {/* <div className="container">
                <div className="row">
                    <div className="col">
                    User card
                    <UserCard />
                    </div>
                    <div className="col"></div>
                    <div className="col">
                    Opponent card
                    <UserCard />
                    </div>
                </div>
            </div>
            <div>
                <QuestionCard /
            </div> */}
            <QuestionCard/>
        </div>
    )
}

export default BattleField;