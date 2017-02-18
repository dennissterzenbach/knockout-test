// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    var persons = [
    ];

    this.myPersons = ko.observableArray(persons);
    this.myPersonsText = ko.computed(function() {
        return this.myPersons().join(',');
    }, this);

    this.add = add;

    function add() {
        var newitem = new Person('Mr.', 'Test' + (this.myPersons().length + 1));
        this.myPersons.push(newitem);
    }
}

function Person(firstName, lastName) {
    this.firstName = ko.observable(firstName);
    this.lastName = ko.observable(lastName);
}

Person.prototype.toString = function personToString() {
    return this.firstName() + ' ' + this.lastName();
};

// Activates knockout.js
ko.applyBindings(new AppViewModel());
