$('#Denison').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'2582' ,name: "Avail (Click to book)", date: "2022/11/08", description:"all", type: "touropen" },
 { id:'2583' ,name: "Avail (Click to book)", date: "2022/11/09", description:"all", type: "touropen" },
 { id:'2584' ,name: "Avail (Click to book)", date: "2022/11/10", description:"all", type: "touropen" },
 { id:'2585' ,name: "Avail (Click to book)", date: "2022/11/11", description:"all", type: "touropen" },
 { id:'2586' ,name: "Avail (Click to book)", date: "2022/11/12", description:"all", type: "touropen" },
 { id:'2587' ,name: "Avail (Click to book)", date: "2022/11/14", description:"all", type: "touropen" },
 { id:'2588' ,name: "Avail (Click to book)", date: "2022/11/15", description:"all", type: "touropen" },
 { id:'2589' ,name: "Avail (Click to book)", date: "2022/11/16", description:"all", type: "touropen" },
 { id:'2590' ,name: "Avail (Click to book)", date: "2022/11/17", description:"all", type: "touropen" },
 { id:'2591' ,name: "Avail (Click to book)", date: "2022/11/18", description:"all", type: "touropen" },
 { id:'2592' ,name: "Avail (Click to book)", date: "2022/11/21", description:"all", type: "touropen" },
 { id:'2593' ,name: "Avail (Click to book)", date: "2022/11/22", description:"all", type: "touropen" },
 { id:'2594' ,name: "Avail (Click to book)", date: "2022/11/28", description:"all", type: "touropen" },
 { id:'2595' ,name: "Avail (Click to book)", date: "2022/11/29", description:"all", type: "touropen" },
 { id:'2596' ,name: "Avail (Click to book)", date: "2022/11/30", description:"all", type: "touropen" },
 { id:'2597' ,name: "Avail (Click to book)", date: "2022/12/01", description:"all", type: "touropen" },
 { id:'2598' ,name: "Avail (Click to book)", date: "2022/12/02", description:"all", type: "touropen" },
 { id:'2599' ,name: "Avail (Click to book)", date: "2022/12/03", description:"all", type: "touropen" },
 { id:'2600' ,name: "Avail (Click to book)", date: "2022/12/05", description:"all", type: "touropen" },
 { id:'2601' ,name: "Avail (Click to book)", date: "2022/12/06", description:"all", type: "touropen" },
 { id:'2602' ,name: "Avail (Click to book)", date: "2022/12/07", description:"all", type: "touropen" },
 { id:'2603' ,name: "Avail (Click to book)", date: "2022/12/08", description:"all", type: "touropen" },
 { id:'2604' ,name: "Avail (Click to book)", date: "2022/12/09", description:"all", type: "touropen" },
 { id:'2605' ,name: "Avail (Click to book)", date: "2022/12/10", description:"all", type: "touropen" },
 { id:'2606' ,name: "Avail (Click to book)", date: "2022/12/12", description:"all", type: "touropen" },
 { id:'2607' ,name: "Avail (Click to book)", date: "2022/12/13", description:"all", type: "touropen" },
 { id:'2608' ,name: "Avail (Click to book)", date: "2022/12/15", description:"all", type: "touropen" },
 { id:'2609' ,name: "Avail (Click to book)", date: "2022/12/16", description:"all", type: "touropen" },

], });$('#Denison').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://connect.denison.edu/portal/visit'); } else { window.location.href='/tourrequest.jsp?cname=Denison&date='+activeEvent.date+'&times='+activeEvent.description;     }});
