const schedule = require("node-schedule");

module.exports = function mailScheduler(job) {
  // Set rules for scheduler
  let rule = new schedule.RecurrenceRule();
      rule.dayOfWeek = [new schedule.Range(0, 6)];
      rule.hour = 16;
      rule.minute = 40;
  
  schedule.scheduleJob(rule, job);
}