// Code your solution in this file!
function distanceFromHqInBlocks(val){
    return Math.abs(42-val)
}
function distanceFromHqInFeet(val){
    return distanceFromHqInBlocks(val) * 264
}
function distanceTravelledInFeet(val1,val2){
    let sub= Math.abs(val1-val2)
    return sub * 264
}
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start,destination);
    if(feet<400){
        return 0
    }
    else if(feet>400 && 2000>feet){
        return (feet-400) *0.02

    }
    else if(feet<2500 && 2000<feet){
        return 25

    }
    else if(feet>2500){
        return 'cannot travel that far'

    }
}