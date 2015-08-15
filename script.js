function ImagePreview(uploader_selector, target_selector) {

    if (uploader_selector.files && uploader_selector.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(target_selector).attr('src', e.target.result);
        }

        reader.readAsDataURL(uploader_selector.files[0]);
    }
}

$ = new jQuery.noConflict();
$(document).ready(function(){
	$("#uploader").change(function(){
		ImagePreview(this, '#show_here')
	});
})