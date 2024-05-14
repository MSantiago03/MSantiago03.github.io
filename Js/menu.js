let thorneCount = 347;
document.getElementById('thorne-pop').innerHTML = thorneCount;

let moultCount = 598;
document.getElementById('moult-pop').innerHTML = moultCount;

function thorneStatusChange() {
  var elem = document.getElementById("thorne-status");
  var moult = document.getElementById("moult-status");
  if (elem.value=="Check In") { //user is checked out of Thorne
    if (moult.value=="Check Out") { //user is already checked into Moulton
      alert("Unable to check into Thorne. Please check out of Moulton to continue.")
    } else {
      thorneCount = thorneCount + 1;
      elem.value = "Check Out";
      document.getElementById('thorne-pop').innerHTML = thorneCount;
    }
  } else { //user is checked in to Thorne
    thorneCount = thorneCount - 1;
    elem.value = "Check In";
    document.getElementById('thorne-pop').innerHTML = thorneCount;
  }
}

function moultStatusChange() {
  var elem = document.getElementById("moult-status");
  var thorne = document.getElementById("thorne-status");
  if (elem.value=="Check In") {
    if (thorne.value=="Check Out") { 
      alert("Unable to check in to Moulton. Please check out of Thorne to continue.")
    }
    moultCount = moultCount + 1;
    elem.value = "Check Out";
    document.getElementById('moult-pop').innerHTML = moultCount;
  } else {
    moultCount = moultCount - 1;
    elem.value = "Check In";
    document.getElementById('moult-pop').innerHTML = moultCount;
  }
}