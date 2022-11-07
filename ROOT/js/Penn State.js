$('#Penn State').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'2916' ,name: "Avail (Click to book)", date: "2022/12/02", description:"9:30 AM", type: "touropen" },
 { id:'2917' ,name: "Unavail Click for bot", date: "2022/12/02", description:"1:30 PM", type: "tourclosed" },
 { id:'2918' ,name: "Avail (Click to book)", date: "2022/11/15", description:"2:00 PM", type: "touropen" },
 { id:'2919' ,name: "Unavail Click for bot", date: "2022/11/15", description:"11:00 AM", type: "tourclosed" },
 { id:'2920' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:00 AM,10:00 AM", type: "touropen" },
 { id:'2921' ,name: "Unavail Click for bot", date: "2022/12/05", description:"12:00 PM", type: "tourclosed" },
 { id:'2922' ,name: "Avail (Click to book)", date: "2022/11/29", description:"9:30 AM", type: "touropen" },
 { id:'2923' ,name: "Avail (Click to book)", date: "2022/12/08", description:"9:30 AM", type: "touropen" },
 { id:'2924' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:00 AM,12:00 PM", type: "tourclosed" },
 { id:'2925' ,name: "Avail (Click to book)", date: "2022/11/04", description:"11:00 AM,1:00 PM,2:30 PM", type: "touropen" },
 { id:'2926' ,name: "Unavail Click for bot", date: "2022/11/04", description:"11:00 AM", type: "tourclosed" },
 { id:'2927' ,name: "Avail (Click to book)", date: "2022/11/01", description:"11:00 AM", type: "touropen" },
 { id:'2928' ,name: "Unavail Click for bot", date: "2022/11/05", description:"12:00 PM,2:00 PM", type: "tourclosed" },
 { id:'2929' ,name: "Unavail Click for bot", date: "2022/11/28", description:"10:30 AM,2:00 PM", type: "tourclosed" },
 { id:'2930' ,name: "Avail (Click to book)", date: "2022/10/27", description:"10:00 AM", type: "touropen" },
 { id:'2931' ,name: "Unavail Click for bot", date: "2022/10/27", description:"1:30 PM", type: "tourclosed" },
 { id:'2932' ,name: "Unavail Click for bot", date: "2022/11/08", description:"9:30 AM,2:00 PM", type: "tourclosed" },
 { id:'2933' ,name: "Avail (Click to book)", date: "2022/11/03", description:"9:30 AM", type: "touropen" },
 { id:'2934' ,name: "Unavail Click for bot", date: "2022/11/11", description:"9:30 AM,11:00 AM,12:30 PM,1:30 PM", type: "tourclosed" },
 { id:'2935' ,name: "Unavail Click for bot", date: "2022/11/17", description:"9:30 AM", type: "tourclosed" },
 { id:'2936' ,name: "Unavail Click for bot", date: "2022/10/31", description:"10:30 AM,2:00 PM", type: "tourclosed" },
 { id:'2937' ,name: "Avail (Click to book)", date: "2022/12/01", description:"1:30 PM", type: "touropen" },
 { id:'2938' ,name: "Avail (Click to book)", date: "2022/10/28", description:"1:30 PM", type: "touropen" },
 { id:'2939' ,name: "Unavail Click for bot", date: "2022/10/28", description:"9:30 AM,10:00 AM,11:00 AM,12:30 PM,1:30 PM", type: "tourclosed" },
 { id:'2940' ,name: "Unavail Click for bot", date: "2022/12/16", description:"1:00 PM", type: "tourclosed" },

], });$('#Penn State').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.psu.edu/portal/up-pr-frst'); } else { window.open('tourrequest.jsp?cname=Penn State&date='+activeEvent.date+'&times='+activeEvent.description);     }});
