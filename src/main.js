import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { DoctorFinder } from './DoctorLookup-service';




function showDoctors(array) {
  for (let i=0; i<array.length; i++) {
    $("ul#doctorOutput").append("<li>" + array[i].profile + "</li>");
    console.log(array)
  }
}


$(document).ready(function() {
  $("form#complaintForm").submit(function(event) {
    event.preventDefault();

    const complaintInput = $("input#complaint").val();
    
    (async () => {
      let chiefComplaint = new DoctorFinder();
      let complaintResponse = await chiefComplaint.findDoctorByCC(complaintInput);
      getElements(chiefComplaint);
      console.log(complaintInput);
      console.log(complaintResponse);
    })();


    const getElements = function(complaintResponse) {
      if (complaintResponse.length === 0) {
        $("#output").text("Unfortunately there is nothing available in your area.");
      } else if (complaintResponse === false) {
        $("#output").text("It seems something has gone wrong, please wait a moment and try again.");
      } else 
        showDoctors(complaintResponse);
    };
  });
});