function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);

}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;

}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);

}

function calculatesFarePrice(start, destination) {
    console.log(start,destination);
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }

    else  {
        return 'cannot travel that far'
    }

}

    /*
    if (distanceTravelledInFeet > 2500) {
        return 'cannot travel that far';
    }
    else if (distanceTravelledInFeet > 2000) {
        return '25 dollars'
    }
    else if (distanceTravelledInFeet > 400) {
        return distanceTravelledInFeet * 0.02;
    }
    else (distanceTravelledInFeet <= 400) {
        return 'gives customers a free sample';
    }
    charges 25 dollars for a distance over 2000 feet
          3) returns distance when destination is below distance
    calculatesFarePrice(start, destination)
43 44
      4) gives customers a free sample
34 32
      5) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
50 58
      6) charges 25 dollars for a distance over 2000 feet
34 24
      7) does not allow rides over 2500 feet */
    // does not allow rides over 2500 feet