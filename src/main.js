import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { DoctorFinder } from './DoctorLookup-service';




function showDoctors(doctorList) {
  // if (doctorList)
  for (let i=0; i<doctorList.data.length; i++) {
    $("ul#doctorNameOutput").append("<li>" + "Dr " + doctorList.data[i].profile.first_name + " " + doctorList.data[i].profile.last_name + " MD " + "<br>" + doctorList.data[i].specialties[0]["name"] + "</li>");
    console.log(doctorList.data[i]);
  }
}


$(document).ready(function() {
  $("form#complaintForm").submit(function(event) {
    event.preventDefault();

    const complaintInput = $("input#complaint").val();
    
    (async () => {
      let chiefComplaint = new DoctorFinder();
      let complaintResponse = await chiefComplaint.findDoctorByCC(complaintInput);
      console.log(complaintInput);
      if (complaintResponse.length === 0) {
        $("#output").text("Unfortunately there is nothing available in your area.");
      } else if (complaintResponse === false) {
        $("#output").text("It seems something has gone wrong, please wait a moment and try again.");
      } else 
        showDoctors(complaintResponse);
    })();
  });
});