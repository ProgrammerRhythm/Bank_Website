// login button event
const Btn = document.getElementById('login');
Btn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transfarArea = document.getElementById('transfar_Area');
    transfarArea.style.display=('block');    
})

// deposit 
const depoIn = document.getElementById('depo');
depoIn.addEventListener('click',function(){
    const Amount = document.getElementById('amount').value;
    const number = parseFloat(Amount);
    updateAmount('depoAmount',number);
    document.getElementById('amount').value = "";
})

function updateAmount(id,number){
    const maindepo = document.getElementById(id).innerText;
    const deposite = parseFloat(maindepo);
    const total = number+deposite;
    document.getElementById(id).innerText= total;
    
    const totalBal = document.getElementById('bal').innerText;
    const mutu = parseFloat(totalBal);
    const titli = number+mutu;
    document.getElementById('bal').innerText = titli;
}

// withdraw 
const OutIt = document.getElementById('out');
OutIt.addEventListener('click',function(){
    const amount = document.getElementById('witha').value;
    const Amount = parseFloat(amount);
    Withdraw('currentOut',Amount) 
    document.getElementById('witha').value = "";
})
function Withdraw(id, num) {
    const OutAmount = document.getElementById(id).innerText;
    const number = parseFloat(OutAmount);
    const total = number + num;
    document.getElementById('currentOut').innerText= total;

    const totalBal = document.getElementById('bal').innerText;
    const mutu = parseFloat(totalBal);
    const titli = mutu-num;
    document.getElementById('bal').innerText = titli;
}