$(document).ready(function() {
	$('#mediafilelibrary').on('change', function(evt) {
		var tgt = $('#mediafiletarget');
		tgt.empty();
		$.ajax({
			url:			config.urls.admin + 'page/link/',
			method:			'GET',
			data:			{
				id:				config.ProcessPageEditLink.pageID,
				mediapageid: 	$(this).val(),
				mediafiles:		true
			},
			dataType:		'json',
			success:		function(data) {
				tgt.append($('<option/>', {
					value:				'',
					html:				''
				}));
				$.each(data, function(idx, item) {
					var $opt = $('<option/>', {
						value:			item[0],
						html:			item[1]
					});
					$opt.data('isimage', item[2]);
					tgt.append($opt);
				});
			}
		});
	});
	
	$('#mediafiletarget').on('change', function(evt) {
		$('#link_page_url_input').val($(this).val());
		$('#link_page_url_input').keydown();
		$opt = $(this).find("option:selected");
		if( $opt.data('isimage') == 1 ) {
			$('#MediaLibraryPreview').attr('src', $opt.val());
		} else {
			$('#MediaLibraryPreview').attr('src', '');
		}
	});
	
	$('#mediaimageslibrary').on('change', function(evt) {
		$sel = $(this);
		$page_id = $('#page_id');
		$page_id.trigger('pageSelected', {id: $sel.val()});
	});
});
