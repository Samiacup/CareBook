document.getElementById("appointmentForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let totalAppointments =
    localStorage.getItem("appointments");

    if(totalAppointments == null){
        totalAppointments = 0;
    }

    totalAppointments++;

    localStorage.setItem(
        "appointments",
        totalAppointments
    );

    window.location.href = "booked.html";
});
