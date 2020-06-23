const strengthMeter = document.getElementById("strength-meter");
const passwordInput = document.getElementById("password-input");
const reasonsContainer = document.getElementById("reasons");

passwordInput.addEventListener("input",() => {
    const weaknesses = calculatePasswordStrength(passwordInput.value);
    console.log(weaknesses);
})


function calculatePasswordStrength(password) {
    const weaknesses = [];

    weaknesses.push(lengthWeakness(password));

    return weaknesses
}

function lengthWeakness(password) {
    const length= password.length;
    if(length <= 5) {
        return {
            message: "your password is too short",
            deduction: 40
        }
    }
    if(length <= 10) {
        return {
            message:"your password could be longer",
            deduction:15
        }
    }
}