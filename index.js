class User {
  getName(user) {
    return user && user.name;
  }
}

const user = new User();

console.log(user.getName({
  name: 'Francisco',
  age: 21
}));

const payload = 'CHAT_BOOT_RESPOSTA';
const result = payload.split('_').includes('RESPOSTA');

console.log(result);

const userAttributs = {
  'custom:123': 'nome'
};

console.log(userAttributs['custom:123']);


function getUsers() {
  setTimeout(() => {
    console.log('2 seg');
  }, 2000);
}

function getProduct() {
  setTimeout(() => {
    console.log('4 seg');
  }, 4000);
}

// Promise.all([
// ]);
getProduct()
getUsers()
