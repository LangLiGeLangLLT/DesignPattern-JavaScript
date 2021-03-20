// miniConsole.js 代码
miniConsole = {
  log: function() {
    console.log(Array.prototype.join.call(arguments));
  }
};
