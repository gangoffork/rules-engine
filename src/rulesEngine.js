'use strict';
//Rule engine module
var RuleEngine = function engine() {
  var queue = [];

  var addRule = function add(rule) {
    queue.push(rule);
  };

  var removeRule = function remove(rule){
    return queue.splice(queue.indexOf(rule), 1);
  };

  var getRule = function get(rule) {
    return queue[queue.indexOf(rule)];
  };

  var getQueueLength = function getLenght() {
    return queue.length;
  };

  var getQueue = function() {
    return queue;
  };

//{objecto: undefined, condition: undefined, action: undefined};
//função construtora.
  function rule(objecto, condition, actions, type){
    /*jshint validthis: true */
    this.objecto = objecto;
    this.condition = condition;
    this.actions = actions;
    this.type = type;
  }

  var runEngine = function runEngine() {
    for (var i = queue.length - 1; i >= 0; i--) {
      if (queue[i].condition || queue[i].condition === undefined || que) {
        queue[i].actions();
      }
    }
  };

  return{
    addRule: addRule,
    removeRule: removeRule,
    getRule: getRule,
    queue: getQueue,
    queueLength: getQueueLength,
    Rule: rule,
    run: runEngine
  };
}();
