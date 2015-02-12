'use strict';

$(document).ready(init);

function init() {
  $('#get-data').click(clickGetData);
}

function clickGetData() {
  var year = $('#year-select').val();
  var cause = $('#cause-select').val();
  var name = 

  var url = 'https://cdph.data.ca.gov/resource/kbup-p858.json?year=' + year;
  $.getJSON(url, function(response) {

    var deaths = _.map(response, function(o) {
      return o[cause] * 1;
    });
    deaths = _.compact(deaths);
    deaths = _.reduce(deaths, function(prev, curr) {
      return prev + curr;
    });

    console.log('Death by ' + causeDesc(cause) + ' in ' + year + ': ' + deaths);
  });
}

function causeDesc(cause) {
  switch (cause) {
    case 'htd': return 'Diseases of the Heart';
    case 'can': return 'Malignant Neoplasms(Cancer)';
    case 'stk': return 'Cerebrovascular Disease(Stroke)';
    case 'cld': return 'Chronic Lower Respiratory Desease(CLRD)';
    case 'inj': return 'Unintentional Injuries';
    case 'pnf': return 'Pneumonia and Influenza';
    case 'dia': return 'Diabetes Mellitus';
    case 'alz': return "Alzheimer's Disease";
    case 'liv': return 'Chronic Liver Disease and Cirrhosis';
    case 'sui': return 'Suicide';
    case 'hyp': return 'Essential Hypertension & Hypertensive Renal Disease';
    case 'hom': return 'Homocide';
    case 'oth': return 'All Other Causes';
    case 'unk': return 'Unknown';
  }
}
