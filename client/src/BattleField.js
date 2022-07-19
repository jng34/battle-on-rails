import { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import UserCard from './UserCard';



function BattleField({ user, setUser }) {
    const { id, name, profile_img, total_hp, total_str, powers } = user;
    const [counter, setCounter] = useState(0);
    const [answerStatus, setAnswerStatus] = useState(false)
    const [allPowers, setAllPowers] = useState([])
    const [items, setItems] = useState([])
    const [rewardItem, setRewardItem] = useState([])
    const [uhp, setUhp] = useState(total_hp)
    
    
    useEffect(() => {
        setInterval(() => {
        setCounter((count) => count + 1);
        }, 1000);

        //cleanup function upon win or lose
    }, []);

    useEffect(() => {
        fetch('/powers')
            .then(res => res.json())
            .then(data => setAllPowers(data))
    }, []);
    
    //must create fetch a random item 
    useEffect(() => {
        fetch("/items")
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);

    const itemIndex = Math.floor(Math.random() * items.length + 1)
    setRewardItem(items[itemIndex])

    //then create (POST) a new power
    function handleNewPower() {
        fetch("/powers", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({})
        })
    }

    
    //then update (PATCH) stats to user
    const handlePatch = () => {
        fetch(`/users/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                base_hp: total_hp + 10,
                base_str: total_str + 5
            }),
        })
        .then((r) => r.json())
        .then(update => setUser(update))
    }



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
        const newHp = mhp - total_str
        return (setMhp(newHp))
    }

    const zeroHp = () => {  
        if (uhp <= 0){
            console.log("You lose.")
        } else if (mhp <= 0){
            handleNewPower()
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
                    <UserCard name={name} profile_img={profile_img} total_hp={uhp} total_str={total_str} powers={powers}/>
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
                    <UserCard name={monsterName} profile_img={monsterimg} total_hp={mhp} total_str={mstr} powers={powers}/>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default BattleField;