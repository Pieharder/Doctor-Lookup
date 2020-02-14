import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorFinder } from './doctor-service';

$(document).ready(function() {
  $("form#complaint").submit(function(event) {
    event.preventDefault();

    const complaintInput = $("input#complaint").val();
    
    (async () => {
      let chiefComplaint = new DoctorFinder();
      const complaintResponse = await chiefComplaint.findDoctorByCC(complaint);
      
      if (complaintResponse.length === 0) {
        $("#output").text("Unfortunately there is nothing available in your area.");
      } else if (complaintResponse === false) {
        $("#output").text("It seems something has gone wrong, please wait a moment and try again.");
      }

      


  });
});