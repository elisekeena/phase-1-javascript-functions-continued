// code your solution here
function saturdayFun(activity1 = "roller-skate"){
    return `This Saturday, I want to ${activity1}!`
};
saturdayFun();

 function mondayWork(activity2 ="go to the office"){
    return `This Monday, I will ${activity2}.`
 };

mondayWork();

function wrapAdjective(flair="*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}
