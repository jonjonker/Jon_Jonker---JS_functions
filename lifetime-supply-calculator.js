const calculateSupply= function(age, dailyAmount) {
    const maxAge = 100;
    const totalNeeded = (dailyAmount * 365) * (maxAge - age);
    let message ="You will need " + totalNeeded + " cans of beer to last you untill the ripe old age of " + maxAge;
    console.log(message);
}

calculateSupply(31, 40);
calculateSupply(31, 1);
calculateSupply(31, 5);
