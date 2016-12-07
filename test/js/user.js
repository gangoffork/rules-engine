var User = function(id, name) {
  this.name = name;
  this.userID = id;
  var test = "test";
};
User.prototype.getName = function(){
  return "User ID: " + this.userID + " name: " + this.name;
};
