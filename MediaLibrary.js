$(document).ready(function() {
	$('#mediafilelibrary, input[name=mediafilelibrary]:radio').on('change', function(evt) {
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
	
	$('#mediaimagesfilter').on('keyup', function(evt) {
		var count = 0;
		var showing = 0;
		var pattern = '' + $(evt.currentTarget).val();
		$('#select_images > li').each(function(idx, el) {
			if($(el).hasClass('select_images_field_label'))
				return;
			count++;
			var img = $(el).find('img').first();
			if(img) {
				var url = $(img).data('original');
				var name = url.replace(new RegExp('^.*/'), '');
				if(name.includes(pattern.toLowerCase())) {
					showing++;
					$(el).show();
				} else {
					$(el).hide();
				}
			}
		});
		var msg = ProcessWire.config.MediaLibrary.statusMsg.replace('##showing##', showing).replace('##count##', count);
		$('#mediaimagesfilterstatus').html(msg);
	});
	
	$('#mediaimageslibrary, input[name=mediaimageslibrary]:radio').on('change', function(evt) {
		$sel = $(this);
		$page_id = $('#page_id');
		$page_id.trigger('pageSelected', {id: $sel.val()});
	});
});
