$('#Case_Western_Reserve').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1511' ,name: "Avail (Click to book)", date: "2022/11/07", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1512' ,name: "Avail (Click to book)", date: "2022/11/08", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1513' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1514' ,name: "Avail (Click to book)", date: "2022/11/10", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1515' ,name: "Avail (Click to book)", date: "2022/11/11", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1516' ,name: "Avail (Click to book)", date: "2022/11/12", description:"9:00 AM,11:00 AM", type: "touropen" },
 { id:'1517' ,name: "Avail (Click to book)", date: "2022/11/13", description:"11:00 AM,1:00 PM", type: "touropen" },
 { id:'1518' ,name: "Avail (Click to book)", date: "2022/11/14", description:"8:30 AM", type: "touropen" },
 { id:'1519' ,name: "Avail (Click to book)", date: "2022/11/15", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1520' ,name: "Avail (Click to book)", date: "2022/11/16", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1521' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1522' ,name: "Avail (Click to book)", date: "2022/11/18", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1523' ,name: "Avail (Click to book)", date: "2022/11/19", description:"9:00 AM,11:00 AM", type: "touropen" },
 { id:'1524' ,name: "Avail (Click to book)", date: "2022/11/20", description:"11:00 AM,1:00 PM", type: "touropen" },
 { id:'1525' ,name: "Avail (Click to book)", date: "2022/11/21", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1526' ,name: "Avail (Click to book)", date: "2022/11/22", description:"10:00 AM", type: "touropen" },
 { id:'1527' ,name: "Unavail Click for bot", date: "2022/11/22", description:"2:00 PM", type: "tourclosed" },
 { id:'1528' ,name: "Unavail Click for bot", date: "2022/11/23", description:"10:00 AM", type: "tourclosed" },
 { id:'1529' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1530' ,name: "Avail (Click to book)", date: "2022/11/29", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1531' ,name: "Avail (Click to book)", date: "2022/11/30", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1532' ,name: "Avail (Click to book)", date: "2022/12/01", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1533' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1534' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1535' ,name: "Avail (Click to book)", date: "2022/12/06", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1536' ,name: "Avail (Click to book)", date: "2022/12/07", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1537' ,name: "Avail (Click to book)", date: "2022/12/08", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1538' ,name: "Avail (Click to book)", date: "2022/12/09", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1539' ,name: "Avail (Click to book)", date: "2022/12/12", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1540' ,name: "Avail (Click to book)", date: "2022/12/13", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1541' ,name: "Avail (Click to book)", date: "2022/12/14", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1542' ,name: "Avail (Click to book)", date: "2022/12/15", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1543' ,name: "Avail (Click to book)", date: "2022/12/16", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1544' ,name: "Avail (Click to book)", date: "2022/12/19", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1545' ,name: "Avail (Click to book)", date: "2022/12/20", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1546' ,name: "Avail (Click to book)", date: "2022/12/21", description:"10:00 AM,2:00 PM", type: "touropen" },

], });$('#Case_Western_Reserve').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://go.case.edu/portal/in-person-tour'); } else { window.location.href='/tourrequest.jsp?cname=Case_Western_Reserve&date='+activeEvent.date+'&times='+activeEvent.description;     }});
