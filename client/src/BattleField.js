import React from 'react';
import QuestionCard from './QuestionCard';
import UserCard from './UserCard';


function BattleField({ user }) {
    const {name, profile_img, total_hp, total_str, powers} = user;
    
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col ">
                    You
                    <UserCard name={name} profile_img={profile_img} total_hp={total_hp} total_str={total_str} powers={powers}/>
                    </div>
                    <div className="col">
                        <button className='btn btn-lg btn-danger'>Attack ⚔️</button>
                    </div>
                    <div className="col">
                    Opponent card
                    <UserCard name={name} profile_img={profile_img} total_hp={total_hp} total_str={total_str} powers={powers}/>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <QuestionCard />
            </div>
        </div>
    )
}

export default BattleField;