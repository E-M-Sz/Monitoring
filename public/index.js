/* jshint esversion: 6 */

// Socket.io
let socket = io();

/* List.js */
let options = {
  valueNames: ['JobName','JobStart','JobEnd','State','StateDescription','RecID','JobAbort'],
  page: 4,
  pagination: true
};

var jobList = new List('entrys', options);
/* -------------------------------------------------------------------------- */

// Request new data from server every 'interval' (milliseconds)
setInterval(function() {
  console.log('ClientLoop');
  socket.emit('getEntrys');
}, 5000);

socket.on('getEntrys', (serverEntrys) => {
  console.log(serverEntrys[serverEntrys.length-1]);
  console.log(serverEntrys[serverEntrys.length-1].JOB_NAME);
  jobList.add({
    JobName: serverEntrys[serverEntrys.length-1].JOB_NAME,
    JobStart: serverEntrys[serverEntrys.length-1].JOB_START,
    JobEnd: serverEntrys[serverEntrys.length-1].JOB_END,
    State: serverEntrys[serverEntrys.length-1].STATE,
    StateDescription: serverEntrys[serverEntrys.length-1].STATE_DESCRIPTION,
    RecID: serverEntrys[serverEntrys.length-1].RECID,
    JobAbort: serverEntrys[serverEntrys.length-1].JOB_ABORT
  });

  // chartLong.data.datasets[0].data = serverDataPoints;
  // chartLong.update(1000);
});
