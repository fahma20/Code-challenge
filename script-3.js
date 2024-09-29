let monthlyBasicSalary = parseInt(prompt("Enter your basic salary:"));
let benefits = parseInt(prompt("Enter your benefits:"));

function calculatePaye(monthlyBasicSalary) {
    let tax = 0
    if (monthlyBasicSalary <= 24000) {
        tax = monthlyBasicSalary * 0.10;
    } else if (monthlyBasicSalary <= 32333) {
        tax = (24000 * 0.10) + ((monthlyBasicSalary - 24000) * 0.25);
    } else if (monthlyBasicSalary <= 500000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + ((monthlyBasicSalary - 32333) * 0.30);
    } else if (monthlyBasicSalary <= 800000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((monthlyBasicSalary - 500000) * 0.325);
    } else {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((monthlyBasicSalary - 800000) * 0.35);
    }

    return tax;

}

function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 1080)
}


function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

function calculateNetSalary(monthlyBasicSalary, benefits) {
    const grossSalary = monthlyBasicSalary + benefits;

    const paye = calculatePaye(monthlyBasicSalary);
    const nssf = calculateNSSF(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    housingLevy = (monthlyBasicSalary * 0.015);

    const netSalary = grossSalary - (paye + nssf + nhif + housingLevy);

    return {
        grossSalary: grossSalary,
        paye: paye,
        nssf: nssf,
        nhif: nhif,
        housingLevy: housingLevy,
        netSalary: netSalary
    };
}

const salaryDetails = calculateNetSalary(monthlyBasicSalary, benefits);


alert(`Gross Salary: ${salaryDetails.grossSalary.toFixed(2)}\n` +
      `PAYE: ${salaryDetails.paye.toFixed(2)}\n` +
      `NSSF: ${salaryDetails.nssf.toFixed(2)}\n` +
      `NHIF: ${salaryDetails.nhif.toFixed(2)}\n` +
      `Housing Levy: ${salaryDetails.housingLevy.toFixed(2)}\n` +
      `Net Salary: ${salaryDetails.netSalary.toFixed(2)}`);