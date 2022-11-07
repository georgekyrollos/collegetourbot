$('#Georgetown').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1054' ,name: "Avail (Click to book)", date: "2022/11/07", description:"10:30 AM,02:00 PM", type: "touropen" },
 { id:'1055' ,name: "Avail (Click to book)", date: "2022/11/08", description:"02:00 PM", type: "touropen" },
 { id:'1056' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:30 AM", type: "touropen" },
 { id:'1057' ,name: "Avail (Click to book)", date: "2022/11/10", description:"10:30 AM,02:00 PM", type: "touropen" },
 { id:'1058' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:30 AM,02:00 PM,any", type: "tourclosed" },
 { id:'1059' ,name: "Unavail Click for bot", date: "2022/11/12", description:"10:00 AM,11:15 AM,any", type: "tourclosed" },
 { id:'1060' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:30 AM,02:00 PM", type: "touropen" },
 { id:'1061' ,name: "Avail (Click to book)", date: "2022/11/15", description:"02:00 PM", type: "touropen" },
 { id:'1062' ,name: "Avail (Click to book)", date: "2022/11/16", description:"10:30 AM", type: "touropen" },
 { id:'1063' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:30 AM", type: "touropen" },
 { id:'1064' ,name: "Avail (Click to book)", date: "2022/11/18", description:"10:30 AM,02:00 PM", type: "touropen" },
 { id:'1065' ,name: "Avail (Click to book)", date: "2022/11/19", description:"10:00 AM", type: "touropen" },
 { id:'1066' ,name: "Unavail Click for bot", date: "2022/11/19", description:"11:15 AM", type: "tourclosed" },
 { id:'1067' ,name: "Avail (Click to book)", date: "2022/11/21", description:"10:30 AM", type: "touropen" },
 { id:'1068' ,name: "Unavail Click for bot", date: "2022/11/21", description:"02:00 PM", type: "tourclosed" },
 { id:'1069' ,name: "Avail (Click to book)", date: "2022/11/22", description:"10:30 AM", type: "touropen" },
 { id:'1070' ,name: "Unavail Click for bot", date: "2022/11/22", description:"02:00 PM", type: "tourclosed" },
 { id:'1071' ,name: "Unavail Click for bot", date: "2022/11/23", description:"10:30 AM,02:00 PM,any", type: "tourclosed" },
 { id:'1072' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:30 AM,02:00 PM", type: "touropen" },
 { id:'1073' ,name: "Avail (Click to book)", date: "2022/11/29", description:"02:00 PM", type: "touropen" },
 { id:'1074' ,name: "Avail (Click to book)", date: "2022/11/30", description:"10:30 AM", type: "touropen" },
 { id:'1075' ,name: "Avail (Click to book)", date: "2022/12/01", description:"10:30 AM", type: "touropen" },
 { id:'1076' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:30 AM", type: "touropen" },
 { id:'1077' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:30 AM", type: "touropen" },
 { id:'1078' ,name: "Avail (Click to book)", date: "2022/12/06", description:"02:00 PM", type: "touropen" },
 { id:'1079' ,name: "Avail (Click to book)", date: "2022/12/07", description:"10:30 AM", type: "touropen" },
 { id:'1080' ,name: "Avail (Click to book)", date: "2022/12/08", description:"10:30 AM", type: "touropen" },
 { id:'1081' ,name: "Avail (Click to book)", date: "2022/12/09", description:"10:30 AM", type: "touropen" },
 { id:'1082' ,name: "Avail (Click to book)", date: "2022/12/12", description:"10:30 AM", type: "touropen" },
 { id:'1083' ,name: "Avail (Click to book)", date: "2022/12/13", description:"02:00 PM", type: "touropen" },
 { id:'1084' ,name: "Avail (Click to book)", date: "2022/12/14", description:"10:30 AM", type: "touropen" },
 { id:'1085' ,name: "Avail (Click to book)", date: "2022/12/15", description:"10:30 AM", type: "touropen" },
 { id:'1086' ,name: "Avail (Click to book)", date: "2022/12/16", description:"10:30 AM", type: "touropen" },
 { id:'1087' ,name: "Avail (Click to book)", date: "2022/12/19", description:"10:30 AM", type: "touropen" },
 { id:'1088' ,name: "Avail (Click to book)", date: "2022/12/20", description:"02:00 PM", type: "touropen" },
 { id:'1089' ,name: "Avail (Click to book)", date: "2022/12/21", description:"10:30 AM", type: "touropen" },
 { id:'1090' ,name: "Avail (Click to book)", date: "2022/12/22", description:"10:30 AM", type: "touropen" },

], });$('#Georgetown').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://uapply.georgetown.edu/portal/virtualsession'); } else { window.location.href='/tourrequest.jsp?cname=Georgetown&date='+activeEvent.date+'&times='+activeEvent.description;     }});
