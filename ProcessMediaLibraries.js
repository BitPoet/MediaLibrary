
$(document).ready(function() {
	$('a.ml-delete').on('pw-modal-closed', function(evt, ui, abort) {
		window.location.reload();
	});
});
