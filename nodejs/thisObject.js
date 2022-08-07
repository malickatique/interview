const user = {
  hello: 'Welcome to VaultsPay',
  sayWelcome() {
    console.log(this.hello);
  },
};

setTimeout(user.sayWelcome, 1000);
setTimeout(user.sayWelcome.bind(this), 1000);
setTimeout(user.sayWelcome.bind(user), 1000);
