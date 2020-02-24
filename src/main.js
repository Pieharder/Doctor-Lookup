import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorFinder } from './DoctorLookup-service';




function showDoctors(doctorList) {
  for (let i=0; i<doctorList.data.length; i++) {
    
    let doctorWebpage = (`${doctorList.data[i].practices[0].website}`);
    if (doctorWebpage === "undefined") {
      doctorWebpage = "It would appear this doctor does not have a website.";
    }
    let doctorAcceptPatients = (`${doctorList.data[i].practices[0].accepts_new_patients}`);
    if (doctorAcceptPatients === "true") {
      doctorAcceptPatients = "Yes";
    } else {
      doctorAcceptPatients == "No";
    }
    $("ul#doctorOutput").append("<li>" + "Dr " + doctorList.data[i].profile.first_name + " " + doctorList.data[i].profile.last_name + " MD " + "<br>" + "<strong>Specialty: </strong>" + doctorList.data[i].specialties[0]["name"] + "<br>" + "<strong>Clinic Name: </strong>" + doctorList.data[i].practices[0].name + "<br>" + "<strong>Accepting Patients: </strong>" + doctorAcceptPatients + "<br>" + "<strong>Phone: </strong>" + doctorList.data[i].practices[0].phones[0].number + "<br>" + "<strong>Address: </strong>" + doctorList.data[i].practices[0].visit_address.street + "<br>" + doctorList.data[i].practices[0].visit_address.city + ", " + doctorList.data[i].practices[0].visit_address.state + " " + doctorList.data[i].practices[0].visit_address.zip + "<br>" + "<strong>WebPage: </strong>" + doctorWebpage + "</li>");
  }
}


$(document).ready(function() {
  $("form#complaintForm").submit(function(event) {
    event.preventDefault();
    $("ul#doctorOutput").empty();

    const complaintInput = $("input#complaint").val();
    
    (async () => {
      let chiefComplaint = new DoctorFinder();
      let complaintResponse = await chiefComplaint.findDoctorByCC(complaintInput);
      if (complaintResponse === false) {
        $("#output").text("It seems something has gone wrong, please wait a moment and try again.");
      } else if (complaintResponse.data.length === 0) {
        $("#output").text("Unfortunately there is nothing available in your area.");
      } else 
        showDoctors(complaintResponse);
    })();
  });
});