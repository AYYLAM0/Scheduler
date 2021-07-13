var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");

var time = moment().hours();
var meetings;
var hourSpan;


function initPage() {

  var hour1 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(hour1);

  var hour2 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(hour2);
  
  var hour3 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(hour3);
  
  var hour4 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(hour4);
  
  var hour5 = JSON.parse(localStorage.getItem("01:00 pm"))
  onePm.val(hour5);
  
  var hour6 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(hour6);
  
  var hour7 = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(hour7);
 
  var hour8 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(hour8);
  
  var hour9 = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(hour9);
  
  var hour10 = JSON.parse(localStorage.getItem("06:00 pm"))
  sixPm.val(hour10);
} 

{  
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      time = parseInt(time);

      if (time > timeTest) {
          $(this).addClass("past");
      } else if (time < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()

  $(".saveBtn").on("click", function(){
    meetings = $(this).siblings(".form-control").val().trim();
    console.log(meetings);
    hourSpan = $(this).siblings(".scheduleBox").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(meetings));
  })

  $("#clearAll").on("click", function(){
    localStorage.clear();
    initPage()
  }) 
})
