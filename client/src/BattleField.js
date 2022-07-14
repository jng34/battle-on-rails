import React from 'react';
import QuestionCard from './QuestionCard';
import UserCard from './UserCard';


function BattleField({ user }) {
    const {name, profile_img, total_hp, total_str, powers} = user;

    // Attack logic - create correct answer state in QuestionCard and pass as callback back to Battlefield component so the Attack button will become activated by ternary and toggle
    
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col ">
                    <h2>You</h2>
                    <UserCard name={name} profile_img={profile_img} total_hp={total_hp} total_str={total_str} powers={powers}/>
                    </div>
                    <div className="col align-self-center">
                        {/* write ternary logic to activate button when question is answered correctly */}
                        <button type="button" className='btn btn-lg btn-block btn-danger' disabled data-bs-toggle="button">Attack ⚔️</button>
                        <button type="button" className='btn btn-lg btn-block btn-danger active' data-bs-toggle="button">Attack ⚔️</button>
                    </div>
                    <div className="col">
                    <h2>Opponent</h2>
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