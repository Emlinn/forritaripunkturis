//Frontend jQuery fyrir /profile
//Höfundur: Sigurbjörn Jónsson
$(document).ready(function() {
	//Ýtt á bæta við gráðu.
	$('#submitDegrees').click(function() {
		$('#degree').append('<div class="form-group" class="work">'+
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
	            '<input type="button" class="eyda" value="X"></div>');
		$(function() {
    		$( ".datepicker" ).datepicker({
      			changeMonth: true,
      			changeYear: true,
      			yearRange: "-100:+0"
      		});
    	});
    	$('.eyda').click(function() {
			$(this).parent().remove();
		}); 
	});
	$('.eyda').click(function() {
		$(this).parent().remove()
	});
	// Ýtt á bæta við atvinnu
	$('#submitJob').click(function() {
		$('#workedJobs').append('<div class="form-group" class="work">'+
	      '<input class="col-md-3" name="job">'+
	      '<input class="col-md-3" name="jobName">'+
	      '<input class="col-md-1" name="jobPerc">'+
	      '<input type="text" class="col-md-2 datepicker" name="jobStartDate">'+
	      '<input type="text" class="col-md-2 datepicker" name="jobEndDate">'+
	      '<input type="button" class="eyda" value="X"></div>'+
    	  '</div> ');
		$(function() {
    		$( ".datepicker" ).datepicker({
      			changeMonth: true,
      			changeYear: true,
      			yearRange: "-100:+0"
      		});
    	});
    	$('.eyda').click(function() {
			$(this).parent().remove();
		}); 
	});
	//Ýtt á bæta við kunnáttu
	$('#submitKnow').click(function() {
		$('#techknow').append('<div class="form-group" class="knowing">'+
          '<input class="col-md-4" name="knowledge" >'+ 
            '<select name="rateKnowledge">'+
              '<OPTION value" "> </OPTION>'+
              '<OPTION value ="Grunnreynsla">Grunnreynsla</OPTION>'+
              '<OPTION value="Meðalreynsla">Meðalreynsla</OPTION>'+
              '<OPTION value="Sérfræðingur">Sérfræðingur</OPTION>'+
            '</select>'+
            ' <input type="button" class="eyda" value="X">'+
          '</div> ');
		$('.eyda').click(function() {
			$(this).parent().remove();
		}); 
	});
	$(function() {
    	$( ".datepicker" ).datepicker({
    		changeMonth: true,
    		changeYear: true,
    		yearRange: "-100:+0"
    	});
    });

});

