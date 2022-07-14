import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import UserCard from './UserCard';


function BattleField({ user }) {
    const [answerStatus, setAnswerStatus] = useState(false)
    const [inven, setInven] = useState([])
    

    const {name, profile_img, total_hp, total_str, powers} = user;

    const [uhp, setUhp] = useState(total_hp)
    // Attack logic - create correct answer state in QuestionCard and pass as callback back to Battlefield component so the Attack button will become activated by ternary and toggle
    

    // William code

    function fetchItems() {
        return fetch('/items')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInven(data);
            })
    }
    // useEffect(() => {
    //     fetchItems()
    // },[]);

    
    const dropItem = Math.floor(Math.random() * inven.length + 1)
   
    const monster = "steve";
    const monsterimg = "https://www.smashbros.com/wiiu-3ds/images/character/pikachu/main.png"
    const mstr = 1
    const baseMHp = 3
    //monster state
    const [ mhp, setMhp ] = useState(baseMHp)

   
    const takeDamage = () => {  
        const newHp = uhp - mstr
        return (setUhp(newHp))
    }
    
    const setTimeAtk = () => {
            setTimeout(takeDamage, 10000)
    } 

    const handleAttack = () => {
        const newHp = mhp - total_str
        return (setMhp(newHp))
    }

    const zeroHp = () => {  
        if (uhp <= 0){
            console.log ("loser, play again")
        } else if (mhp <= 0){
            console.log("winner: patch random item:", dropItem)
        } else {
            setTimeAtk()
        }
    }

    zeroHp()

    //Make timer countdown

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col ">
                    <h2>You</h2>
                    <UserCard name={name} profile_img={profile_img} total_hp={uhp} total_str={total_str} powers={powers}/>
                    </div>
                    <div className="col align-self-center">
                        {/* write ternary logic to activate button when question is answered correctly */}
                        {!answerStatus ? <button type="button" className='btn btn-lg btn-block btn-danger' disabled data-bs-toggle="button">Attack ⚔️</button> :
                        <button type="button" className='btn btn-lg btn-block btn-danger active' data-bs-toggle="button" onClick={handleAttack} >Attack ⚔️</button>}
                    </div>
                    <div className="col">
                    <h2>Opponent</h2>
                    <UserCard name={monster} profile_img={monsterimg} total_hp={mhp} total_str={mstr} powers={powers}/>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <QuestionCard answerStatus={answerStatus} setAnswerStatus={setAnswerStatus} damage={takeDamage}/>
            </div>
        </div>
    )
}

export default BattleField;