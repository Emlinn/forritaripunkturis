$('#submitDegrees').click(function() {
	console.log("takki virkar!");
	$('#degree').append('<div class="form-group">'+
		'<label class="col-md-3 control-label">Háskólagráða:</label>'+
		'<select class="selectDegree" name="selectDegree">'+
              '<option value="Bshug">B.Sc. Hugbúnaðarverkfræði</option>'+
              '<option value="Bstöl">B.Sc. Tölvunarfræði</option>'+
              '<option value="Mshug">M.Sc. Hugbúnaðarverkfræði</option>'+
              '<option value="Mstöl">M.Sc. Tölvunarfræði</option>'+
            '</select></div>');
});
