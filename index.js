// Code your solution in this file!
function distanceFromHqInBlocks(blocksNum){
    return Math.abs(blocksNum-42);
}

function distanceFromHqInFeet(feetNum){
    return distanceFromHqInBlocks(feetNum)*264;
}

function distanceTravelledInFeet(num1,num2){
    let totalBlocks = Math.abs(num1-num2)
    return totalBlocks * 264;

}

function calculatesFarePrice(num1,num2){
    let distance = distanceTravelledInFeet(num1,num2);
    if (distance < 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000){
        return (distance-400) * .02
    }
    else if (distance > 2000 && distance < 2500){
        return 25
    }
    else {
        return "cannot travel that far"
    }
}