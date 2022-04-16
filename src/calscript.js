const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();



  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();





  const nextDays = 7 - lastDayIndex -1 ;



  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";



  for (let x = firstDayIndex; x > 0; x--) 

  {
    if ((firstDayIndex - x + 1) == 1) 
    
    {

      days += `<div class="weekend">${prevLastDay - x + 1}</div>`;

    }else

    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;

  }

  let holdIndex = firstDayIndex;

 

  for (let i = 1; i <= lastDay; i++) 
  {

    holdIndex += 1;

    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) 
    {

      days += `<div class="today">${i}</div>`;

    }else if (firstDayIndex==0 && i==1)
    {
        days += `<div class="weekend">${i}</div>`;
        
    } else if (firstDayIndex == 6 && i == 1) {

      days += `<div class="weekend">${i}</div>`;

//Identify weekends
    } else if (holdIndex === 7 || holdIndex === 8 || holdIndex === 15 || holdIndex === 14 
      || holdIndex === 21 || holdIndex === 28 || holdIndex === 22 || holdIndex === 29 || holdIndex===35 || holdIndex===36) 
        {
      days += `<div class="weekend">${i}</div>`;
 
      

        }else
           days += `<div class="">${i}</div>`;

    }
  

  for (let j = 1; j <= nextDays; j++) {

    if ((lastDayIndex +j )==6)
    {

      days += `<div class="weekend">${j}</div>`;

    }else

    days += `<div class="next-date">${j}</div>`;
    
  
  }
   monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
