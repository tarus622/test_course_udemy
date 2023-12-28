export function generateResultText(result) {
    let resultText = '';

    if (isNaN(+result)) {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
        resultText = 'Result: ' + result;
    }

    return resultText;
}

export function outputResult(resultText) {
    const output = document.getElementById('result');
    output.textContent = resultText;
}