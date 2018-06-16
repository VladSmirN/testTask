var loginInVK = function (){
	      
		  
    VK.Auth.getLoginStatus(function(resp) { 
	  if (resp.session) { 
	  
		pushAbout(resp);
		
	  } else { 
		
 	    VK.Auth.login(pushAbout(function(response){
			
		  pushAbout(response);
		  
		}),2);
	} 
});  
		  
		  
			  
}


var pushAbout = function(response){
	
	if (response.session) {
		      
			 
			  
	     
			  VK.Api.call('friends.get', {fields: ['uid', 'first_name', 'last_name','crop_photo'], order: 'name',v:"5.73"}, function(r){
			
				
			
				  if(r.response) {
					  
					  $(".yourFrends").text("ваши друзья :") ;
					
					  r = r.response.items;
				  
					  for( var i = 0 ; i < Math.min(r.length,5) ; ++i ){
				 
						
					
						if(r[i].crop_photo) 
						pushCard(r[i].crop_photo.photo.photo_807,r[i].first_name,r[i].last_name);
						else
						pushCard("https://vk.com/images/camera_100.png?ava=1",r[i].first_name,r[i].last_name);
					
					  }
				  
				  }else alert("Не удалось получить список ваших друзей(((");
			 
			  })
		       
			  VK.Api.call('users.get',{fields: ['first_name', 'last_name'], order: 'name',v:"5.73"},function(r){
				  
				
				 $(".you").text("Ваше имя :"+r.response[0].first_name+" "+
			                                 r.response[0].last_name );
				
			  }) 
			   
			   
			   
			}else alert("Не удалось получить доступ");
	
}