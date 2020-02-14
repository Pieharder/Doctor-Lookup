import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorFinder } from './DoctorLookup-service';




function showDoctors(array) {
  for (let i=0; i<array.length; i++) {
    $("#doctorOutput").append("<li>" + array[i].name + "</li>");
  }
}


$(document).ready(function() {
  $("form#complaintForm").submit(function(event) {
    event.preventDefault();

    const complaintInput = $("input#complaint").val();
    
    (async () => {
      let chiefComplaint = new DoctorFinder();
      const complaintResponse = await chiefComplaint.findDoctorByCC(complaintInput);
      
      if (complaintResponse.length === 0) {
        $("#output").text("Unfortunately there is nothing available in your area.");
      } else if (complaintResponse === false) {
        $("#output").text("It seems something has gone wrong, please wait a moment and try again.");
      } else 
        showDoctors(complaintResponse);
    })();
  });
});