/*! name: vanilla-calendar-pro v3.0.0 | url: https://github.com/uvarov-frontend/vanilla-calendar-pro */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VanillaCalendarUtilities={})}(this,(function(e){"use strict";const t=e=>new Date(`${e}T00:00:00.000Z`),n=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;e.getDate=e=>t(e),e.getDateString=e=>n(e),e.parseDates=e=>(e=>e.reduce(((e,a)=>{if(a instanceof Date||"number"==typeof a){const t=a instanceof Date?a:new Date(a);e.push(t.toISOString().substring(0,10))}else a.match(/^(\d{4}-\d{2}-\d{2})$/g)?e.push(a):a.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g,((a,i,o)=>{const r=t(i),d=t(o),s=new Date(r.getTime());for(;s<=d;s.setDate(s.getDate()+1))e.push(n(s));return a}));return e}),[]))(e),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));