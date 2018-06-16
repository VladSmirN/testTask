var loginInVK = function (){
	      
		  
		  
		  VK.Auth.login(function(response) {
		
			if (response.session) {
		      
			  //console.log(response);
			  
			  $(".you").text("Ваше имя :"+response.session.user.first_name+" "+
			                              response.session.user.last_name );
			  
	     
			  VK.Api.call('friends.get', {fields: ['uid', 'first_name', 'last_name','crop_photo'], order: 'name',v:"5.73"}, function(r){
			
				//console.log(r);
			
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
		   
			}else alert("Не удалось получить доступ");
		 
		  },2);
		  
    }