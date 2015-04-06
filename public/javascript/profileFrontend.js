//Frontend jQuery fyrir /profile
//Höfundur: Sigurbjörn Jónsson
$(document).ready(function() {
	//Ýtt á bæta við gráðu.
	$('#submitDegrees').click(function() {
		$('#degree').append('<div class="form-group" class="work">'+
			'<input class="col-md-2 fillOut" name="school">'+
			'<select class="col-md-2 fillOut" name="degree">'+
	                '<option value=" " Selected > </option>'+
	                '<option value="Grunnskólapróf">Grunnskólapróf</option>'+
	                '<option value="Framhaldsskólapróf">Framhaldsskólapróf</option>'+
	                '<option value="Háskólanámsgr">Háskólanám grunnnám</option>'+
	                '<option value="Háskólanámfr">Háskólanám framhaldsnám</option>'+
	                '<option value="Háskólanáman">Háskólanám annað</option>'+
	                '<option value="Starfsmenntun">Starfsmenntun</option>'+
	                '<option value="Annað">Annað</option>'+
	              '</select>'+
	              '<input class="col-md-2 fillOut" name="education">'+
	              '<input type="text" class="col-md-2 datepicker fillOut" name="startDate">'+
	              '<input type="text" class="col-md-2 datepicker fillOut" name="finishDate" >'+
	              '<select class="fillOut" name = "statuss">'+
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
	      '<input class="col-md-3 fillOut" name="job">'+
	      '<input class="col-md-3 fillOut" name="jobName">'+
	      '<input class="col-md-1 fillOut" name="jobPerc">'+
	      '<input type="text" class="col-md-2 datepicker fillOut" name="jobStartDate">'+
	      '<input type="text" class="col-md-2 datepicker fillOut" name="jobEndDate">'+
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
          '<input class="col-md-4 fillOut" name="knowledge" >'+ 
            '<select class="fillOut" name="rateKnowledge">'+
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

	$('#submitProfile').click(function(event) {
		$('.fillOut').each(function(){
			if(!$(this).val()) {
				$(this).addClass('warning');
				$('#problemMessage').text("Þú verður að fylla út í rauða reiti eða eyða línum.");
				event.preventDefault();
			}
		});
	});
});

