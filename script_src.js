
function myFunction() {
	var width1 = document.getElementsByClassName('sidebar');
	var cl=document.getElementById('close');
	var cl2=document.getElementById('close1');
	var boxwidth=document.getElementsByClassName('box1');
	var main = document.getElementsByClassName('main-content');
	var boxwidth2=document.getElementsByClassName('box2');
	
	
	var x = document.getElementsByClassName('side-text');
	for (var i=0;i<width1.length;i++)
	{
		
		if (width1[i].clientWidth == "195") 
		{
	    	width1[i].style.width = "65px";
	    	
	    	cl.style.height="0px";
	    	cl2.style.height="0px";
	    	main[i].style.marginLeft = "67px";
	    	main[i].style.width = "1470px";
	    	
	    	boxwidth[i].style.width = "1420px";
	    	boxwidth2[i].style.width = "1420px";

	    	for (var i=0;i<x.length;i++)
			{
			    x[i].style.display = "none";

			  	
			}

	  	} else 
	  	{
	    	width1[i].style.width = "195px";
	    	
	    	cl.style.height="50px";
	    	cl2.style.height="50px";
	    	main[i].style.marginLeft = "195px";
	    	main[i].style.width = "1350px";
	    	
	    	boxwidth[i].style.width = "1280px";
	    	boxwidth2[i].style.width = "1280px";
	    	for (var i=0;i<x.length;i++)
			{
				
			    x[i].style.display = "block";
			  	
			}
	  	}
	}
	
}
function myFunction1() {
	var width1 = document.getElementsByClassName('sidebar');
	var cl=document.getElementById('close');
	var cl2=document.getElementById('close1');
	var dashbox=document.getElementsByClassName('dash');
	
	var main = document.getElementById('dash-main');
	
	var chart1=document.getElementsByClassName('chart');


	var chart2=document.getElementsByClassName('chart-top-left');
	var chart3=document.getElementsByClassName('chart-top-middle');
	var chart4=document.getElementsByClassName('chart-top-right');
	var chart5=document.getElementsByClassName('chart-bar');
	var chart6=document.getElementsByClassName('chart-bottom');
	
	var x = document.getElementsByClassName('side-text');
	for (var i=0;i<width1.length;i++)
	{
		
		if (width1[i].clientWidth == "195") 
		{
	    	width1[i].style.width = "65px";
	    	
	    	cl.style.height="0px";
	    	cl2.style.height="0px";
	    	main.style.marginLeft = "67px";
	    	main.style.width = "1470px";
	    	dashbox[i].style.width = "1470px";
	    	chart1[i].style.width="1120px";
	    	chart2[i].style.width="370px";
	    	chart3[i].style.width="370px";
	    	chart4[i].style.width="370px";
	    	
	    	chart5[i].style.width="1115px";
	    	chart6[i].style.width="1115px";

	    	for (var i=0;i<x.length;i++)
			{
			    x[i].style.display = "none";

			  	
			}

	  	} else 
	  	{
	    	width1[i].style.width = "195px";
	    	
	    	cl.style.height="50px";
	    	cl2.style.height="50px";
	    	main.style.marginLeft = "195px";
	    	main.style.width = "1350px";
	    	dashbox[i].style.width = "1350px";
	    	chart1[i].style.width="1000px";
	    	chart2[i].style.width="331px";
	    	chart3[i].style.width="331px";
	    	chart4[i].style.width="331px";
	    	chart5[i].style.width="1000px";
	    	chart6[i].style.width="1000px";
	    	
	    	for (var i=0;i<x.length;i++)
			{
				
			    x[i].style.display = "block";
			  	
			}
	  	}
	}
	
}
var dropDown = document.querySelector(".dropbtn");
var dropDownDiv = document.querySelector(".dropdown");
dropDown.addEventListener("click", function()
{
  dropDownDiv.classList.toggle('show-menu');
});

function myFunction2(){
	
	window.location.href="homepage.html";
}
function myFunction3(){
	
	window.location.href="dashboard.html";
	
	
	
}

var addid = 0;
var prname ="placeholder";
console.log(prname);
const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
	  if (stoptime == true) {
	        stoptime = false;
	        timerCycle();
	        prname = document.getElementById("projectname").value;
			console.log(prname);
	        
	    }
	}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    stopwatch1(hr,min,sec,prname);
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
   timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}


trackerList = [];
grouped=[];

function stopwatch1(hr,min,sec,prname)
{
	
	var addList = document.getElementById('card-create');
    var docstyle = addList.style.display;
    if (docstyle == 'none') addList.style.display = '';
    addList.innerHTML="";
	addid=addid+1;
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	if(dd<10) 
	{
	dd='0'+dd;
	} 

	if(mm<10) 
	{
	mm='0'+mm;
	} 
	today = yyyy+'-'+mm+'-'+dd;
	
	var curr = new Date();  
	var first = curr.getDate() - curr.getDay()+1;   
	firstday = new Date(curr.setDate(first)).toString();   
	lastday = new Date(curr.setDate(curr.getDate()+6)).toString();
	
  	var d = new Date();
  	var ho = d.getHours();
  	var mi = d.getMinutes();
  	var todaytime =ho+":"+mi;
  	ho=ho+parseInt(hr);

  	mi=mi+parseInt(min);
  	
  	var timeend=ho+":"+mi;

  	var weekno=weekNumberCalc(today);

	object = {}
	object ["id"] = addid;
    object ["name"] = prname;
    object ["hour"] = hr;
    object ["minute"] = min;
    object ["second"] = sec;
    object ["todaydate"] = today;
    object ["weekNumber"] = weekno;
    object ["weekfirstday"] = firstday;
    object ["weeklastday"] = lastday;
    object ["time"] =todaytime;
    object ["timefinish"] =timeend;
    trackerList.push(object);
	
	sortbyWeek();
	}

var startstopBtn = document.getElementById("flex2-button");
startstopBtn.addEventListener("click", Start);

function Start(){
    console.log("Started");
    startstopBtn.removeEventListener("click", Start);
    startstopBtn.addEventListener("click", Stop);
    startstopBtn.style.backgroundColor = "red";
    startstopBtn.style.borderColor="red";
    startstopBtn.value = "STOP";
    startTimer();
    backHide();
}

function Stop(){
    console.log("Stopped");
    startstopBtn.removeEventListener("click", Stop);
    startstopBtn.addEventListener("click", Start);
    startstopBtn.style.backgroundColor = "#03a9f4";
    startstopBtn.style.borderColor="#03a9f4";
    startstopBtn.value = "START";
    stopTimer();
    resetTimer();


}


function backHide() {
  var x = document.getElementById("no-values");
    x.style.display = "none";
  
}

function totalTime(list){
	
	var weekhr=0;
	var weekmin=0;
	var weeksec=0;
	list.forEach((trackerEntrytime)=>{
		weeksec=weeksec+parseInt(trackerEntrytime.second);
		weekmin=weekmin+parseInt(trackerEntrytime.minute);
		weekhr=weekhr+parseInt(trackerEntrytime.hour);
		
	})
	weekhr=weekhr*3600;
	weekmin=weekmin*60
	weeksec=weekhr+weekmin+weeksec;
	var s1 = weeksec % 60;
    var hr1 = weeksec / 60;
    var m1 = hr1 % 60;
    hr1 = hr1 / 60;
    s1=parseInt(s1);
    hr1=parseInt(hr1);
    m1=parseInt(m1);
    if (s1 < 10 || s1 == 0) {
      s1 = '0' + s1;
    }
    if (m1 < 10 || m1 == 0) {
      m1 = '0' + m1;
    }
    if (hr1 < 10 || hr1 == 0) {
      hr1 = '0' + hr1;
    }
    var weektotal= hr1 + ":" + m1 + ":" + s1;
    
    return weektotal;
}

function onchangeName(val,addid)
{
	
	trackerList[addid].name=val;
		
}
function sortbyWeek(){
	trackerList=_.sortBy(trackerList, 'todaydate');
	//trackerList=_.sortBy(trackerList, 'weekNumber');
	grouped = groupBy(trackerList, tracker => tracker.weekNumber);
	console.log(grouped);
	display();
	getDataforChart();
	
	
}
function display(){
	var addList = document.getElementById('card-create');
	    var docstyle = addList.style.display;
	    if (docstyle == 'none') addList.style.display = '';
	    addList.innerHTML="";
		grouped.forEach((value,key,groupEntry)=>{
		
		var weekdiv = document.createElement('div');
	    weekdiv.id = 'week_' + key;
	   	var totalWeekTime=totalTime(value);
	   	weekdiv.innerHTML="<div class='box3'><p class='weeknop'>Week "+key+"<p><p class='totalTimep'>Week total <b> "+totalWeekTime+"</b></p></div>"
	   	
	   	value.forEach((trackerEntry,index)=>{
	  
		var text = document.createElement('div');
	    text.id = 'additem_' + addid;
	    text.style.marginBottom="1px";
	    text.style.marginLeft="0px";
	    
	    var pname=trackerEntry.name;
	   
	    var i=index;
	    console.log(i);

	    console.log(trackerEntry.id+" ...");
	    text.innerHTML = "<div class='box2'><input type='text' value='"+trackerEntry.name+"' id='"+index+"'  onchange='onchangeName(this.value,this.id)' style='padding:5px;' /> <div class='flex-container' id='flex2' ><div id='plus'><img src='plus-blue.svg'></div><div id='project'><label for='Project' ><u>Project</u></label></div><div id='tag2'><img src='tag-gray.svg'></div><div><span class='currency'>$</span></div><div><input type='text' value='"+trackerEntry.time+"' id='timebox'/></div><div><input type='text' value='"+trackerEntry.timefinish+"' id='timebox'/></div><div><span class='datepicker-toggle'><span class='datepicker-toggle-button'></span><input type='date' id='"+trackerEntry.id+"' value='"+trackerEntry.todaydate+"' onchange='onchangeDate(this.value,this.id)' class='datepicker-input'></span></div><div id='stopwatch'><b>"+trackerEntry.hour+" : "+trackerEntry.minute+" : "+trackerEntry.second+"</b></div><div id='tag2'><img src='play.svg'></div><div id='dots' class='dropdown2'><img src='menu-dots-vertical.svg' onclick='cardDropdown2("+trackerEntry.id+")' class='dropbtn2'/><div id='myDropdown2_" + trackerEntry.id + "' class='dropdown-content2'><a id='dup_"+trackerEntry.id+"' onclick='duplicating("+trackerEntry.id+")'>Duplicate</a><a class='Delete-btn' id='del_"+trackerEntry.id+"' onclick='deletecard("+trackerEntry.id+")'>Delete</a></div></div></div>";
	    weekdiv.appendChild(text);
		})
	   	addList.appendChild(weekdiv);
	   })
}
function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}


function onchangeDate(val,idd){
	
	console.log("changing date "+idd);
	let obj3 = trackerList.find(obj => obj.id == idd);
	console.log(obj3);
	obj3.todaydate=val;
	var wno=weekNumberCalc(val);
	obj3.weekNumber=wno;
	sortbyWeek();
	
}

function weekNumberCalc(dateinput) {
	
   var target  = new Date(dateinput);
    var dayNr   = (target.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = target.valueOf();
    target.setMonth(0, 1);
    if (target.getDay() != 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
}

function duplicating(addid2){
	

	console.log("duplicating "+addid2);
	let obj1 = trackerList.find(obj => obj.id == addid2);
	console.log(obj1);
	
	var temp = JSON.parse(JSON.stringify(obj1));
	addid++;
	temp.id=addid;

	trackerList.push(temp);
	sortbyWeek();
	
}

function deletecard(addid1){
	console.log("deleting "+addid1);
	trackerList=trackerList.filter((item) => item.id !== addid1);
	sortbyWeek();
	
}



function cardDropdown2(trackerEntryid){
	console.log("track "+trackerEntryid);
	
	document.getElementById("myDropdown2_" + trackerEntryid).classList.toggle("show");
	window.onclick = function(event) {
	
  if (!event.target.matches('.dropbtn2')) {

    var dropdowns = document.getElementsByClassName("dropdown-content2");
    
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
}

chartdata=[];
chartfinal=[];
var totalWeekTime1;
var totalWeekTime1data;
chartfinallabel=[];
function getDataforChart()
{
	var today1 = new Date();
	var dd1 = today1.getDate();
	var mm1 = today1.getMonth()+1; 
	var yyyy1 = today1.getFullYear();
	if(dd1<10) 
	{
	dd1='0'+dd1;
	} 

	if(mm1<10) 
	{
	mm1='0'+mm1;
	} 
	today1 = yyyy1+'-'+mm1+'-'+dd1;
	weekntoday=weekNumberCalc(today1);
	
	chartdata=[];
	temp=[];
	chartfinal=[];
	chartfinallabel=[];
	grouped.forEach((value,key,groupEntry)=>{
		if(key==weekntoday){
			debugger;
			totalWeekTime1=totalTime(value);
			totalWeekTime1data=totalTime1(value);
			console.log(totalWeekTime1);
			debugger;
			value.forEach((val)=>{
			chartdata.push(val);
		})
	}
	})
	console.log(chartdata);
	sun=[];
	mon=[];
	tue=[];
	wed=[];
	thur=[];
	fri=[];
	sat=[];
	chartdata.forEach((cd)=>{
		var dt = new Date(cd.todaydate);
        var dno= dt.getDay(); 
        if(dno==0){  
        	sun.push(cd);
        }
        else if(dno==1)
        {
        	mon.push(cd);
        }
        else if(dno==2)
        {
        	tue.push(cd);
        }
        else if(dno==3)
        {
        	wed.push(cd);
        }
        else if(dno==1)
        {
        	thur.push(cd);
        }
        else if(dno==4)
        {
        	fri.push(cd);
        }
        else if(dno==5)
        {
        	sat.push(cd);
        }
	})
	var montt=totalTime1(mon);
	var tuett=totalTime1(tue);
	var wedtt=totalTime1(wed);
	var thurtt=totalTime1(thur);
	var fritt=totalTime1(fri);
	var sattt=totalTime1(sat);
	var suntt=totalTime1(sun);
	chartfinal=[montt,tuett,wedtt,thurtt,fritt,sattt,suntt];
	console.log(chartfinal);
	var monl=totalTime(mon);
	var tuel=totalTime(tue);
	var wedl=totalTime(wed);
	var thurl=totalTime(thur);
	var fril=totalTime(fri);
	var satl=totalTime(sat);
	var sunl=totalTime(sun);
	chartfinallabel=[monl,tuel,wedl,thurl,fril,satl,sunl];
	console.log(chartfinallabel);


	totalWeekTime1=JSON.stringify(totalWeekTime1);
	totalWeekTime1data=JSON.stringify(totalWeekTime1data);
	
	localStorage.setItem("chartweektime", totalWeekTime1);
	localStorage.setItem("chartweektimedata", totalWeekTime1data);

	chartdatastore = JSON.stringify(chartfinal);
	localStorage.setItem("charttime",chartdatastore );
	chartdatastorelabel = JSON.stringify(chartfinallabel);
	localStorage.setItem("charttimelabel",chartdatastorelabel );
	
}

function totalTime1(list){
	
	var weekhr=0;
	var weekmin=0;
	var weeksec=0;
	list.forEach((trackerEntrytime)=>{
		weeksec=weeksec+parseInt(trackerEntrytime.second);
		weekmin=weekmin+parseInt(trackerEntrytime.minute);
		weekhr=weekhr+parseInt(trackerEntrytime.hour);
		
	})

	weeksec=weeksec/3600;
	weekmin=weekmin/60;
	weekhr=weekhr+weekmin+weeksec;
    return weekhr;
}

