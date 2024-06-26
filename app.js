let accounts = [
  {
    owner: 'Asghar Farhadi',
    interestRate: 1.2, // %
    pin: '1111',
  },
  {
    owner: 'Jessica Davis',
    interestRate: 1.5,
    pin: '2222',
  },
  {
    owner: 'Steven Thomas Williams',
    interestRate: 0.7,
    pin: '3333',
  },
  {
    owner: 'Sarah Smith',
    interestRate: 1,
    pin: '4444',
  },
  {
    owner: 'Alireza Nabikhani',
    interestRate: 1.8,
    pin: '1234',
  },
];

let accounts2 = [
  {
    owner: 'Asghar Farhadi',
    interestRate: 1.2, // %
    pin: '1111',
  },
  {
    owner: 'Jessica Davis',
    interestRate: 1.5,
    pin: '2222',
  },
  {
    owner: 'Steven Thomas Williams',
    interestRate: 0.7,
    pin: '3333',
  },
  {
    owner: 'Sarah Smith',
    interestRate: 1,
    pin: '4444',
  },
  {
    owner: 'Alireza Nabikhani',
    interestRate: 1.8,
    pin: '1234',
  },
];

const saveAcc = function(){
  return localStorage.setItem('user' , JSON.stringify(accounts));
}


const loadStored = function(){
  const stored = JSON.parse(localStorage.getItem('user'));
  console.log(stored); 
}

const clearLocal = function(){
  accounts = [...accounts2];
  console.log(accounts);
}


const labelPassword = document.querySelector('.password');
const labelUserName = document.querySelector('.username');
const labelUsernameRe = document.querySelector('#fullName');
const labelPassRe = document.querySelector('#pin');

const labelBtnLogin = document.querySelector('.btn');
const labelBtnRegister = document.querySelector('#btn-register');

const labelCard = document.querySelector('.card');
const labelWrong = document.querySelector('.wrong');
const labelSINGIN = document.querySelector('.SINGIN_');

const labelRegisterForm = document.querySelector('.link___2');
const labelLinkCreateAccount = document.querySelector('.create-profile');

const createUsername = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner.toLowerCase().split(' ')[0];
  });
};

createUsername(accounts);

console.log(accounts);

labelBtnRegister.addEventListener('click', e => {
  e.preventDefault();
  if (
    labelUsernameRe.value !== '' &&
    labelUsernameRe.value !== null &&
    labelUsernameRe.value !== undefined &&
    labelPassRe.value !== '' &&
    labelPassRe.value !== null &&
    labelPassRe.value !== undefined
  ) {
    labelSINGIN.classList.add('disabled');
    labelCard.classList.remove('disabled');

    const fullName = document.querySelector('#fullName').value;
    const pin = document.querySelector('#pin').value;

    const newAccount = {
      owner: fullName,
      interestRate: 1,
      pin: pin,
    };
    
    accounts.push(newAccount);
    createUsername([newAccount]);
    saveAcc();
  } else {
    alert('🚫 username or password is empty please tryagin 🚫');
  }
  labelUsernameRe.value = labelPassRe.value = '';
  
});

let currentAccount;
labelBtnLogin.addEventListener('click', e => {
  e.preventDefault();
  loadStored();
  currentAccount = accounts.find(acc => acc.username === labelUserName.value);
  console.log(currentAccount);  
  if (
    currentAccount &&
    labelUserName.value === currentAccount.username &&
    labelPassword.value === currentAccount.pin
  ) {
    window.location.href = 'shop.html';
  } else {
    labelCard.classList.add('disabled');
    labelWrong.classList.remove('disabled');
  }

  labelPassword.value = labelUserName.value = '';
  labelPassword.blur();
});

labelRegisterForm.addEventListener('click', () => {
  labelWrong.classList.add('disabled');
  labelSINGIN.classList.remove('disabled');
});

// labelBtnRegister.addEventListener('click', e => {
//   e.preventDefault();
//   if (
//     labelUsernameRe.value !== '' &&
//     labelUsernameRe.value !== null &&
//     labelUsernameRe.value !== undefined &&
//     labelPassRe.value !== '' &&
//     labelPassRe.value !== null &&
//     labelPassRe.value !== undefined
//   ) {
//     labelSINGIN.classList.add('disabled');
//     labelCard.classList.remove('disabled');

//     const fullName = document.querySelector('#fullName').value;
//     const pin = document.querySelector('#pin').value;

//     const newAccount = {
//       owner: fullName,
//       interestRate: 1,
//       pin: pin,
//     };
    
//     accounts.push(newAccount);
//     createUsername([newAccount]);
//   } else {
//     alert('🚫 username or password is empty please tryagin 🚫');
//   }
//   labelUsernameRe.value = labelPassRe.value = '';
  
// });

labelLinkCreateAccount.addEventListener('click', e => {
  e.preventDefault();
  labelCard.classList.add('disabled');
  labelSINGIN.classList.remove('disabled');
});

clearLocal();
