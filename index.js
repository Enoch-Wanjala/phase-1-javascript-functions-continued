// code your solution here
function saturdayFun(whatToDo="roller-skate"){
    return `This Saturday, I want to ${whatToDo}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}mondayWork(`work from home`)


function wrapAdjective(sign){
    return function(){
        if(sign==="||"){
            return `You are ${sign}a dedicated programmer${sign}!`
        }else if(sign==='*'){
            return `You are ${sign}a hard worker${sign}!`
        }
    }
}