/* jshint esversion: 6 */

// Generate test entrys
let entrys = [];
let job_name = ['Email-Job', 'Journal-Job', 'TS00D8_DocToSap_P', '003E_UpdVendor', 'TS00CC_PARKRUECK_P', 'TS00D6_ByDXMLInvoice', '00D8_FT_Index_Delta']; // Function jobName
let state = [0, 1, 7]; // Function jobState()
let state_descriptionSuccess = ['STD_KREDITOREN_SAP: 0', 'Job erfolgreich.', 'Belege verarbeitet: 0']; // Function stateDescription()
let state_descriptionError = ['Error during Document Retrieval'];



function jobName() {
  return job_name[rndNum(0, job_name.length-1)];
}

var day;
var start;
var end;
var stateInfo;

function jobTime(time) {
  if (time === 'start') {
    day = rndNum(1,31);
    start = rndNum(1,23);
    end = rndNum(1,59);
    return 'Mai, ' + day + ' 2017 | ' + start + ':' + end;
  } else {
    return 'Mai, ' + day + ' 2017 | ' + rndNum(start,23) + ':' + rndNum(end,59);
  }
}

function jobState() {
  stateInfo = state[rndNum(0, state.length-1)];
  return stateInfo;
}

function stateDescription() {
  return stateInfo > 0 ? state_descriptionError[rndNum(0,state_descriptionError.length-1)] : state_descriptionSuccess[rndNum(0,state_descriptionSuccess.length-1)];
  // return state_description[rndNum(0, state_description.length-1)];
}

function recID() {
  return rndNum(20000000000000000000, 30000000000000000000);
}

// Generate a random number between min and max value
function rndNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


function genRndEntry() {
  entrys.push({JOB_NAME:jobName(),	JOB_START:jobTime('start'),	JOB_END:jobTime('end'),	STATE:jobState(),	STATE_DESCRIPTION:stateDescription(),	RECID:recID(),	JOB_ABORT:''});
}

module.exports.test = function () {
  return 'Hello World!';
};

module.exports.returnEntrys = function () {
  return entrys;
};

genRndEntry();
// console.log(returnEntrys());
setInterval(function(){
  genRndEntry();
  console.log('Generarted new entry:');
  console.log(entrys[entrys.length-1]);
}, 5000);
