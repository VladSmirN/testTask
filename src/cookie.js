var createCookie = function(){
	
	  $.cookie('authorization', '1', {
	  
      expires: 5,
      path: '/',
      secure: true
	  
      });	
	}
	
	var checkCookie = function(){
	
	  if($.cookie('authorization') == '1')
	    return true;
	  else
	    return false;
	}