import"./assets/main-DzBLoxNU.js";import{f as E,i as c}from"./assets/vendor-BbSUbo7J.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");let n=null,m=null;E(s,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){n=t[0],n&&n>new Date?(e.disabled=!1,e.classList.add("active"),C()):(e.disabled=!0,e.classList.remove("active"),v("Please choose a date in the future"))}});function p(t){const a=Math.floor(t/864e5),g=Math.floor(t%864e5/36e5),w=Math.floor(t%864e5%36e5/6e4),x=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:g,minutes:w,seconds:x}}function o(t){return String(t).padStart(2,"0")}function v(t){c.error({title:"Error",message:t,position:"topRight"})}function C(){c.destroy()}e.addEventListener("click",()=>{n&&(s.disabled=!0,e.disabled=!0,e.classList.remove("active"),m=setInterval(()=>{const t=new Date,r=n.getTime()-t.getTime();if(r<=0){clearInterval(m),c.success({title:"Countdown Finished!",message:"The countdown has reached zero!",position:"topRight"}),s.disabled=!1,d.textContent="00",i.textContent="00",u.textContent="00",l.textContent="00";return}const{days:h,hours:f,minutes:y,seconds:a}=p(r);d.textContent=o(h),i.textContent=o(f),u.textContent=o(y),l.textContent=o(a)},1e3))})});
//# sourceMappingURL=countdown-timer.js.map
