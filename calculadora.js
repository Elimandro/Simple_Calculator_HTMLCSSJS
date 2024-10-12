
        let currentOperation = null;
        let firstOperand = '';
        let secondOperand = '';

        const displayElement = document.getElementById('display');

        function appendNumber(number) {
            if (currentOperation === null) {
                firstOperand += number;
                displayElement.value = firstOperand;
            } else {
                secondOperand += number;
                displayElement.value = secondOperand;
            }
        }

        function setOperation(operation) {
            if (firstOperand !== '') {
                currentOperation = operation;
            }
        }

        function clearDisplay() {
            firstOperand = '';
            secondOperand = '';
            currentOperation = null;
            displayElement.value = '';
        }

        function calculate() {
            let result = 0;
            const firstNum = parseFloat(firstOperand);
            const secondNum = parseFloat(secondOperand);

            switch (currentOperation) {
                case '+':
                    result = firstNum + secondNum;
                    break;
                case '-':
                    result = firstNum - secondNum;
                    break;
                case '*':
                    result = firstNum * secondNum;
                    break;
                case '/':
                    result = firstNum / secondNum;
                    break;
                default:
                    return;
            }

            displayElement.value = result;
            firstOperand = result.toString();
            secondOperand = '';
            currentOperation = null;
        }

        function toggleTheme() {
            const isLight = document.body.style.backgroundColor === 'white';
            document.body.style.backgroundColor = isLight ? 'black' : 'white';
            document.body.style.color = isLight ? 'white' : 'black';
            document.querySelectorAll('.calculator').forEach(el => el.style.color = isLight ? 'white' : 'black');
            document.querySelectorAll('.display').forEach(el => el.style.borderBottomColor = isLight ? 'white' : 'black');
            document.querySelectorAll('footer').forEach(el => el.style.borderBottomColor = isLight ? 'white' : 'black');
            document.querySelectorAll('button').forEach(
                el => {
                    el.style.backgroundColor = isLight ? 'black' : 'white';
                    el.style.color = isLight ? 'white' : 'black';
                }
            );
        }
    