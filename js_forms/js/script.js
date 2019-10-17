console.log('forms and js');

// Reading Form data

document.getElementById('submit').addEventListener('click', function(){
  var name = document.getElementById('name').value;
  console.log(name);

  var address = document.getElementById('address').value;
  console.log(address);

  document.getElementByTagName('div')[1].innerHTML += '</br>' + name + '</br>'+ address;
});

// Performance Assessment
var names = [];
var projectA = [];
var projectB = [];
var projectC = [];
var averagePerformance = [];

var n = parseInt(prompt('Enter the number of employees'));

document.getElementById('saveData').addEventListener('click', function(){
console.log(names.length);
  if (names.length <n){

    var ename = document.getElementById('ename').value;
    console.log(ename);

    var projA = parseInt(document.getElementById('projectA').value);
    console.log(projA);
    var projB = parseInt(document.getElementById('projectB').value);
    console.log(projB);
    var projC = parseInt(document.getElementById('projectC').value);
    console.log(projC);

    var average = (projA + projB + projC)/3;
    console.log(average);

    document.getElementsByTagName('div')[1].innerHTML
    += '</br>' + ename + '</br>' + projA + '</br>' + projB + '</br>' + projC  + '</br>' + average;

    document.getElementById('average').value = average;

    names.push(ename);
    projectA.push(projA);
    projectB.push(projB);
    projectC.push(projC);
    averagePerformance.push(average);
    console.log(names, projectA, projectB, projectC, averagePerformance);
  } else {
    alert('Sorry, cannot store more employees\' details');
  }
});

document.getElementById('anotherData').addEventListener('click', function() {
  document.getElementById('ename').value= ' ';
  document.getElementById('projectA').value= ' ';
  document.getElementById('projectB').value= ' ';
  document.getElementById('projectC').value= ' ';
  document.getElementById('average').value= ' ';

});

// Compare the averages of all employees and give labels (message)

document.getElementById('assess').addEventListener('click', function(){


  for (var i = 0; i = n; i++) {
    if (averagePerformance >= 90) {
      document.getElementById('formsData').innerHTML += names[i] + 'is elegible for increment.';
    } else if (averagePerformance >= 70) {
      document.getElementById('formsData').innerHTML += names[i] + 'eligable to continue in project team.';
    } else {
      document.getElementById('formsData').innerHTML =+ names[i] + 'change designation.';
    }
  }
}







// Show outstanding performance (above 90%)
