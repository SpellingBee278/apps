window.addEventListener("load", event => {

    var toggle = document.querySelector('.toggle'),
        calculator = document.querySelector('.calculator');

    toggle.addEventListener("click", changeMode);

    function changeMode() {

        if (toggle.classList.contains('off')) {
            toggle.classList.remove('off');
            calculator.classList.add('flip-in');
            setTimeout(() => {
                calculator.classList.remove('flip-in');
                calculator.classList.add('flip-out');
                calculator.setAttribute('data-theme', 'light')
            }, 200);
            setTimeout(() => {
                calculator.classList.remove('flip-out');
            }, 300);


        } else {
            toggle.classList.add('off');
            calculator.classList.add('flip-in');
            setTimeout(() => {
                calculator.classList.remove('flip-in');
                calculator.classList.add('flip-out');
                calculator.setAttribute('data-theme', 'dark')

            }, 200);

            setTimeout(() => {
                calculator.classList.remove('flip-out');
            }, 300);
        }
    }

    ///////////////////
    // Calculator Functions
    ///////////////////

    // Get Numbers

    var input = document.querySelector('.input'),
        secondInput = document.querySelector('.second-input'),
        number = document.querySelectorAll('.number'),
        del = document.querySelector('.del'),
        back = document.querySelector('.back'),
        action = document.querySelectorAll('.action'),
        addAction = document.querySelector('.get-action'),
        total = document.querySelector('.total'),
        result = "",
        runningTotal = 0,
        numbersPressed = [],
        actionsSelected = [];


    // Events
    number.forEach(function (el) {
        el.addEventListener('click', getNumbers);
    });

    action.forEach(function (el) {
        el.addEventListener('click', getAction);
    });

    del.addEventListener('click', deleteAll);
    back.addEventListener('click', deleteLast);
    total.addEventListener('click', getTotal);

    // Functions

    // To Add Numbers in the Screen
    function getNumbers(e) {
        var currentNumber = e.currentTarget;

        if (input.innerHTML === "0"){
            input.innerHTML = currentNumber.innerHTML;
        }
        else {
            input.innerHTML += currentNumber.innerHTML;
        }

        var num = parseInt(currentNumber.innerHTML);

        result += num;

        //alert(result);
    }


    function getAction(e) {
        var currentAction = e.currentTarget;
        addAction.innerHTML = currentAction.innerHTML;

        addAction.classList.add('active-action');

        setTimeout(() => {
            addAction.classList.remove('active-action');
        }, 200);

        secondInput.innerHTML += input.innerHTML + addAction.innerHTML;
        input.innerHTML = "";
        var num = parseInt(result);
        numbersPressed.push(num);
        actionsSelected.push(currentAction.innerHTML);
        result = "";
        console.log(numbersPressed);
        console.log(actionsSelected);


    }


    // Get Total Result
    function getTotal() {
        var num = parseInt(result);

        numbersPressed.push(num);
        console.log(numbersPressed);
        console.log(actionsSelected);

        var totalResult = 0;

    }


    // Delete All Numbers
    function deleteAll() {
        input.innerHTML = "0";
        secondInput.innerHTML = "";
        addAction.innerHTML = "";
        addAction.classList.remove('active-action');
        result = "";
    }

    // Delete Last Number
    function deleteLast() {

        if (input.innerHTML !== "0") {

            input.innerHTML = input.innerHTML.slice(0, -1);
        }

            if (input.innerHTML === "") {

                input.innerHTML = "0";
            }


    }

});

