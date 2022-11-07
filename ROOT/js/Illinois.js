$('#Illinois').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1650' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:00 AM", type: "tourclosed" },
 { id:'1651' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:00 AM", type: "touropen" },
 { id:'1652' ,name: "Avail (Click to book)", date: "2022/11/10", description:"10:00 AM", type: "touropen" },
 { id:'1653' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:00 AM,1:00 PM,any", type: "tourclosed" },
 { id:'1654' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:00 AM", type: "touropen" },
 { id:'1655' ,name: "Avail (Click to book)", date: "2022/11/15", description:"10:00 AM", type: "touropen" },
 { id:'1656' ,name: "Avail (Click to book)", date: "2022/11/16", description:"10:00 AM", type: "touropen" },
 { id:'1657' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:00 AM", type: "touropen" },
 { id:'1658' ,name: "Avail (Click to book)", date: "2022/11/18", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1659' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:00 AM", type: "touropen" },
 { id:'1660' ,name: "Avail (Click to book)", date: "2022/11/29", description:"10:00 AM", type: "touropen" },
 { id:'1661' ,name: "Avail (Click to book)", date: "2022/11/30", description:"10:00 AM", type: "touropen" },
 { id:'1662' ,name: "Avail (Click to book)", date: "2022/12/01", description:"10:00 AM", type: "touropen" },
 { id:'1663' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1664' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:00 AM", type: "touropen" },
 { id:'1665' ,name: "Avail (Click to book)", date: "2022/12/06", description:"10:00 AM", type: "touropen" },
 { id:'1666' ,name: "Avail (Click to book)", date: "2022/12/07", description:"10:00 AM", type: "touropen" },

], });$('#Illinois').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://enroll.illinois.edu/portal/prospect_daily'); } else { window.location.href='/tourrequest.jsp?cname=Illinois&date='+activeEvent.date+'&times='+activeEvent.description;     }});
