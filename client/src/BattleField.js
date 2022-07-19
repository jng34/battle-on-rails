import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import UserCard from './UserCard';



function BattleField({ user, setUser }) {
    // const {name, profile_img, total_hp, total_str, powers} = user;
    const [counter, setCounter] = useState(0);
    const [answerStatus, setAnswerStatus] = useState(false)
    const [inventory, setInventory] = useState([])
    const [uhp, setUhp] = useState(user.total_hp)

    useEffect(() => {
        fetch('/items')
            .then(res => res.json())
            .then(data => setInventory(data))
    },[]);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((count) => count + 1);
        }, 1000);
    
    }, []);

    const handlePatch = () => {fetch(`/users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({

            base_hp: 10,
            base_str: 5
        }),
    }).then((r) => r.json())
    .then(update => setUser(update))
    }



    const dropItem = Math.floor(Math.random() * inventory.length + 1)
    const monsterName = "Monster";
    const monsterimg = "https://www.smashbros.com/wiiu-3ds/images/character/pikachu/main.png"
    const mstr = 2
    const baseMHp = 2
    //monster state
    const [ mhp, setMhp ] = useState(baseMHp)

   
    const takeDamage = () => {  
        const newHp = uhp - mstr
        return (setUhp(newHp))
    }
    
    const setTimeAtk = () => {
        setTimeout(takeDamage, 15000)
    } 

    const handleAttack = () => {
        const newHp = mhp - user.total_str
        return (setMhp(newHp))
    }

    const zeroHp = () => {  
        if (uhp <= 0){
            alert("You lose.")
        } else if (mhp <= 0){
            handlePatch()
        } else {
            setTimeAtk()
        }
    }

    zeroHp()


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col ">
                    <h2>You</h2>
                    <UserCard name={user.name} profile_img={user.profile_img} total_hp={uhp} total_str={user.total_str} powers={user.powers}/>
                    </div>
                    <div className="col align-self-start mt-5">
                        {!answerStatus ? 
                        <button type="button" className='btn btn-lg btn-block btn-danger' disabled data-bs-toggle="button">Attack ⚔️</button> 
                        : <button type="button" className='btn btn-lg btn-block btn-danger active' data-bs-toggle="button" onClick={handleAttack} >Attack ⚔️</button>}
                        <br /><br />
                        <div className="text-large fw-semibold">Timer: {counter} sec</div>
                        <QuestionCard answerStatus={answerStatus} setAnswerStatus={setAnswerStatus} damage={takeDamage}/>
                    </div>
                    <div className="col">
                    <h2>Opponent</h2>
                    <UserCard name={monsterName} profile_img={monsterimg} total_hp={mhp} total_str={mstr} powers={user.powers}/>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default BattleField;