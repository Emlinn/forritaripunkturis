//Frontend jQuery fyrir /forum
//Höfundur: Sigurbjörn Jónsson
$(document).ready(function() {
	$('#newArticle').click(function() {
		$('.articleMaker').show();
      	$(this).hide();
      	$('#cancel').click(function() {
      		$('.articleMaker').hide();
      		$('#newArticle').show();
      	});
	});
	$('#newArticleBut').click(function() {
		if($('.articleMaker').css('display') != 'none') {
			$('.fillOut').each(function(){
			if(!$(this).val()) {
				$(this).addClass('warning');
				$('#problemMessage').text("Þú verður að fylla út í rauða reiti eða eyða línum.");
				event.preventDefault();
			}
		});
		}
	});
	
});
/*
      <form id="forumPost" action="forum" method="post">
        <div class="form-group">
          <input type="text" name="articleName">
          <textarea name="articleContent" class="form-control" rows="5"></textarea>
        </div>
      </form>
      */