const cashResult = document.getElementById("bills-displayer");
const balance = document.getElementById("saldo");
const value = document.getElementById("displayer");
const clean = document.getElementById("clear");
const send = document.getElementById("confirm");

const numbers = document.querySelectorAll(".line > div");

value.value = null;



function takeNumber() {
  numbers.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.innerHTML !== 'Limpar' && item.innerHTML !== "Confirmar") {
        value.value = value.value + item.innerHTML;
      }
    });
   
  });
}

function withdrawMoney(requiredValue){
  let validCash = [100, 50, 20, 10],
      cashResult = [];

  if(requiredValue && requiredValue > 0) {
    while(requiredValue > 0) {
      for (let i = 0; i < validCash.length; i++) {
        let note = validCash[i];
        if(requiredValue - note >= 0) {
          requiredValue -= note;
          cashResult.push(note);
          break;
        } else if(i === validCash.length - 1 && requiredValue > 0) {
            throw 'NoteUnavailableException';
        }
      }
    }
  } else if(requiredValue <= 0) {
    throw 'InvalidArgumentException';
  }

  return console.log(cashResult);
}

const clear = clean.addEventListener('click', () => {
  value.value = "";
})


takeNumber();

send.addEventListener('click', withdrawMoney);
