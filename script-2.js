const speedLimit = 70;

function speedDetector(speed) {
    if (speed < 70) {
        console.log("Ok");

    } else {
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
    console.log(`Points: ${demeritPoints}`);
    
    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}
}
speedDetector(40);  
speedDetector(90);  
speedDetector(140); 







