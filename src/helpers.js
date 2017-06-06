module.exports = {
  mmssTime: function(secs) {
    var date = new Date(null);
    date.setSeconds(secs);
    return date.toISOString().substr(14, 5);
  }
}
