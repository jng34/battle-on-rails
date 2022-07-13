import React from 'react';
import QuestionCard from './QuestionCard';
import UserCard from './UserCard';


function BattleField({userData}) {
    const {name, profile_img, total_hp, total_str, powers} = userData;
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                    <UserCard name={name} profile_img={profile_img} total_hp={total_hp} total_str={total_str} powers={powers}/>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                    Opponent card
                   
                    </div>
                </div>
            </div>
            <div>
                {/* <QuestionCard /> */}
            </div>
        </div>
    )
}

export default BattleField;