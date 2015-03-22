$(document).ready(function() {
	$('#submitDegrees').click(function() {
		console.log("takki virkar!");
		$('#degree').append('<div class="form-group" class="jebb">'+
			'<input class="col-md-2" name="school">'+
			'<select class="col-md-2" name="degree">'+
	                '<option value=" "> </option>'+
	                '<option value="Grunnskólapróf">Grunnskólapróf</option>'+
	                '<option value="Framhaldsskólapróf">Framhaldsskólapróf</option>'+
	                '<option value="Háskólanámsgr">Háskólanám grunnnám</option>'+
	                '<option value="Háskólanámfr">Háskólanám framhaldsnám</option>'+
	                '<option value="Háskólanáman">Háskólanám annað</option>'+
	                '<option value="Starfsmenntun">Starfsmenntun</option>'+
	                '<option value="Annað">Annað</option>'+
	              '</select>'+
	              '<input class="col-md-2" name="education">'+
	              '<input type="text" class="col-md-2 datepicker" name="startDate">'+
	              '<input type="text" class="col-md-2 datepicker" name="finishDate" >'+
	              '<select name = "statuss">'+
	              '<OPTION> </OPTION>'+
	              '<OPTION>Lokið</OPTION>'+
	              '<OPTION>Ólokið</OPTION>'+
	            '</select>'+
	            '<input type="button" id="virk" class="eyda" value="eyda"></div>');
		$(function() {
    		$( ".datepicker" ).datepicker({
      			changeMonth: true,
      			changeYear: true,
      			yearRange: "-100:+0"
      		});
    	}); 
	});
	$('.eyda').click(function() {
		console.log("jebb");
		$('.eydaMenntun').remove();
	});
	$('#submitJob').click(function() {
		$('#workedJobs').append('<div class="form-group" class="work">'+
	      '<input class="col-md-3" name="job">'+
	      '<input class="col-md-3" name="jobName">'+
	      '<input class="col-md-1" name="jobPerc">'+
	      '<input type="text" class="col-md-2 datepicker" name="jobStartDate">'+
	      '<input type="text" class="col-md-2 datepicker" name="jobEndDate">'+
	      '<input type="button" class="eydaJob" value="Eyða"></div>'+
    	  '</div> ');
		$(function() {
    		$( ".datepicker" ).datepicker({
      			changeMonth: true,
      			changeYear: true,
      			yearRange: "-100:+0"
      		});
    	}); 
	});

	$('.eydaJob').click(function() {
		console.log("eydaJob");
		$('.work').remove();
	});

	$('#submitKnow').click(function() {
		$('#techknow').append('<div class="form-group" class="knowing">'+
          '<input class="col-md-4" name="knowledge" >'+ 
            '<select name="rateKnowledge">'+
              '<OPTION value" "> </OPTION>'+
              '<OPTION value ="Grunnreynsla">Grunnreynsla</OPTION>'+
              '<OPTION value="Meðalreynsla">Meðalreynsla</OPTION>'+
              '<OPTION value="Sérfræðingur">Sérfræðingur</OPTION>'+
            '</select>'+
          '</div> ')
	});

	$(function() {
    	$( ".datepicker" ).datepicker({
    		changeMonth: true,
    		changeYear: true,
    		yearRange: "-100:+0"
    	});
    });

});

