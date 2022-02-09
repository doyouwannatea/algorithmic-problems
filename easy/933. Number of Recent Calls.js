const test = require('../utils/test');

class RecentCounter {
  requestList = [];

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.requestList.push(t);
    return this.requestList.filter((req) => req >= t - 3000 && req <= t).length;
  }
}

const rc = new RecentCounter();
test(1, rc.ping(1));
test(2, rc.ping(100));
test(3, rc.ping(3001));
test(3, rc.ping(3002));
