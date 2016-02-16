// Here's my data model
var ViewModel = function(first, last) {
	var self = this;
    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);
	self.contenderId = $("table tr").lenght;
	
	console.log($("table tr").lenght);
 
    self.fullName = ko.pureComputed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return self.firstName() + " " + self.lastName();
    }, self);
};

ko.applyBindings(new ViewModel("firstname", "lastname")); // This makes Knockout get to work