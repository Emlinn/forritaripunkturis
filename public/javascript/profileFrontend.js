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
	              '<input type="month" class="col-md-2" name="startDate" >'+
	              '<input type="month" class="col-md-2" name="finishDate" >'+
	              '<select name = "statuss">'+
	              '<OPTION> </OPTION>'+
	              '<OPTION>Lokið</OPTION>'+
	              '<OPTION>Ólokið</OPTION>'+
	            '</select>'+
	            '<input type="button" id="virk" class="eyda" value="eyda"></div>');
	});
	$('.eyda').click(function() {
		console.log("jebb");
		$('.jebb').remove();
	});
});
