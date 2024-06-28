resetscore();
function resetscore(){
    let scorecheck = localStorage.getItem('score')
    score = JSON.parse(scorecheck) || {
    win:0,
    lose:0,
    tie:0}
    

}
function gencompchoice(){
    let compchoice;
    let randnum=Math.random()*3;
    if (randnum >0 && randnum<=1)
    {
        compchoice='bat';
    }
    else if (randnum >1 && randnum<=2)
    {
        compchoice='ball';
    }
    else
    {
        compchoice='stump';
    }
    return compchoice;
}
function result(compchoice,user){
    let resultmsg;
    if (compchoice === user)
    {
        resultmsg='tie';
        score.tie++;
    }
    else if (user==='bat')
    {
        if (compchoice==='ball')
        {
            resultmsg='you win';
            score.win++;
        }
        else if (compchoice==='stump')
        {
            resultmsg='you lose';
            score.lose++;
        }
    }
    else if (user==='ball')
    {
        if (compchoice==='stump')
        {
            resultmsg='you win';
            score.win++;
        }
        else if (compchoice==='bat')
        {
            resultmsg='you lose';
            score.lose++;
        }
    }
    else if (user==='stump')
    {
        if (compchoice==='bat')
        {
            resultmsg='you win';
            score.win++;
        }
        else if (compchoice==='ball')
        {
            resultmsg='you lose';
            score.lose++;
        }
    }
    return resultmsg
}

function showresult1()
{
    /*alert(`you have choosen ${user} and computer choosen ${compchoice} \n result = ${resultmsg}
    
    ${JSON.stringify(score)}
    `);*/
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('#user').innerText=`Please choose one of the choice`;
    document.querySelector('#comp').innerText=``;
    document.querySelector('#score').innerText=`Result = 
        ${JSON.stringify(score)}`;
    
 
   
}
function showresult(resultmsg,user,compchoice)
{
    /*alert(`you have choosen ${user} and computer choosen ${compchoice} \n result = ${resultmsg}
    
    ${JSON.stringify(score)}
    `);*/
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('#user').innerText=`You have choosen ${user}`;
    setTimeout(() => {
        document.querySelector('#comp').innerText=`Computer have choosen ${compchoice}
        `;
        document.querySelector('#score').innerText=`Result = ${resultmsg}
        ${JSON.stringify(score)}`;
    }, 500);
 
   
}

