// In index.js, write a constructor function called BoardMember that sets the following properties: name, homeState, and training.

// Add following methods to the class:

// veto — returns No, I must disagree

// approve — returns You can do that!

// doCharity — returns I like to help people.

// releasePressStatement — returns You will see great things from Scuber.

// sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.

function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}
   
BoardMember.prototype.veto = function() {
    return "No, I must disagree";
};

BoardMember.prototype.approve = function() {
    return "You can do that!";
};

BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};