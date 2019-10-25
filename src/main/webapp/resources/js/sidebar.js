


$(document).ready(function(){	
	$('#BtnMax').on('click', function(){
	let sideBarClass = $('#SideBarTxt').attr('class');
	console.log(sideBarClass)
	if(sideBarClass == 'opcs-txt-hide'){
		$('#BtnMax').attr('src', '/kanban/javax.faces.resource/resize_minus.png.xhtml?ln=img');
		$('#SideBarTxt').removeClass('opcs-txt-hide').addClass('opcs-txt-show');		
	}else{
		$('#BtnMax').attr('src', '/kanban/javax.faces.resource/resize.png.xhtml?ln=img');
		$('#SideBarTxt').removeClass('opcs-txt-show').addClass('opcs-txt-hide');	
	}
	
	});
	
})