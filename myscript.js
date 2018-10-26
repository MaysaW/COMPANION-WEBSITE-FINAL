
var waypoint = new Waypoint({
  element: document.getElementById('rq1'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq1');
    element.classList.add("activated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('rq2'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq2');
    element.classList.add("activated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('rq3'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq3');
    element.classList.add("activated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('rq4'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq4');
    element.classList.add("activated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('rq5'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('rq5');
    element.classList.add("activated");
  },
  offset: 600
});

/* To trigger the underlining of research methodologies */

var waypoint = new Waypoint({
  element: document.getElementById('sub1'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub1');
    element.classList.add("headingactivated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('sub2'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub2');
    element.classList.add("headingactivated");
  },
  offset: 650
});

var waypoint = new Waypoint({
  element: document.getElementById('sub3'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub3');
    element.classList.add("headingactivated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('sub4'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub4');
    element.classList.add("headingactivated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('sub5'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub5');
    element.classList.add("headingactivated");
  },
  offset: 600
});

var waypoint = new Waypoint({
  element: document.getElementById('sub6'),
  handler: function() {
    //notify('Basic waypoint triggered')
    console.log('scrolled to point')
    var element = document.getElementById('sub6');
    element.classList.add("headingactivated");
  },
  offset: 600
});

// Javascript for the companion website //

// Get the container element
var header = document.getElementById("tab");

// Get all buttons with class="btn" inside the container
var btns = header.getElementsByClassName("hidebuttons");

// Loop through the buttons and add the active class to the current/clicked button
/* Code for the tabs original */
function openTitle(evt, openTitle) {
  console.log('change colour now')
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openTitle).style.display = "block";
    evt.currentTarget.className += " active";
}


/* Code for background colour button*/
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("now");

    // If there's no active class
    if (current.length > 0) { 
      current[0].className = current[0].className.replace("now", "");
    }

    // Add the active class to the current/clicked button
    this.className += "now";
  });
}

     
