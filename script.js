
document.getElementById("circle").onclick = function() {
    let day_value = document.getElementById("for_day_value").value;
    let month_value = document.getElementById("for_month").value;
    let year_value = document.getElementById("for_year").value;
    day_value = Number(day_value);
    month_value = Number(month_value);
    year_value = Number(year_value);
    let year_cal = 2024 - year_value;
    let month_cal = year_cal * 12 ;
    let day_cal = month_cal * 30 ;
    document.getElementById("years").textContent = year_cal;
    document.getElementById("months").textContent = month_cal;
    document.getElementById("days").textContent = day_cal;
}
