function update(){
  let months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  let days = ["Sunday","Monday","tuesday","Wednesday","Thursday","Friday","Saturday"]
  let now = new Date();
  let hr = now.getHours().toString().padStart(2,0);
  let min = now.getMinutes().toString().padStart(2,0);
  let sec = now.getSeconds().toString().padStart(2,0);
  let date = now.getDate().toString().padStart(2,0);
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let day = days[now.getDay()];
  let clockstr = `${hr}:${min}:${sec}`;
  let datestr = `${date}/${month}/${year}`;
  document.getElementById("clock").textContent = clockstr;
  document.getElementById("date").textContent = datestr;
  document.getElementById("day").textContent = day;
}
setInterval(update,1000)