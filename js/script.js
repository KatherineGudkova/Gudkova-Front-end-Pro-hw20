function pow(num, degree) {

    if (degree === 0) {
        return 1;
    }
    
    return num * pow(num, degree - 1);
}

const num = Number(prompt('Enter number:'));

if (isNaN(num)) {
    alert('Error. It is not a number.');
} else {
    const degree = Number(prompt(`To what power do you want to raise the number ${num}?\nEnter the number:`));

    if (isNaN(degree)) {
        alert('Error. It is not a number.');
    } else {
        const result = pow(num, degree);
        alert(`${num} ^ ${degree} = ${result}`);
    }
}