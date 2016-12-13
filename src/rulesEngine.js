//Rule engine module
var RuleEngine = (function() {
  'use strict';
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
  //Constructor function.
  var rule = function rule(objecto, condition, actions, type){
    /*jshint validthis: true */
    this.objecto = objecto;
    this.condition = condition;
    this.actions = actions;
    this.type = type;
  };
  rule.prototype.getObjecto = function() {
    return this.objecto;
  };
  rule.prototype.getCondition = function() {
    return this.condition;
  };
  rule.prototype.getAction = function() {
    return this.actions;
  };
  rule.prototype.getType = function() {
    return this.type;
  };


  var runEngine = function runEngine() {
    queue.forEach(function(rule){
      if (rule.condition) {
        if (rule.condition(rule.objecto)) {
          rule.actions(rule.objecto);
        }
      }
    });
  };

  return {
    addRule: addRule,
    removeRule: removeRule,
    getRule: getRule,
    queue: getQueue,
    queueLength: getQueueLength,
    Rule: rule,
    run: runEngine
  };

})();

// var main = (function() {
//   console.log("Runnig...");
//
//   var ruleAction1 = function() {
//     console.log("Action ok");
//   };
//   var ruleCondition = function(objecto) {
//     console.log("Condition..");
//     return objecto === 1;
//   };
//
//   var rule1 = new RuleEngine.Rule(1, ruleCondition, ruleAction1, "Busness");
//
//   // console.log("rule1: " + rule1.getType());
//   // console.log("rule1: " + rule1.getCondition());
//   // console.log("rule1: " + typeof rule1.getCondition());
//
//
//   RuleEngine.addRule(rule1);
//   RuleEngine.run();
//
// })();
