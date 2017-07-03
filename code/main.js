window.onload = function(){
	
	//var
	var img = document.getElementById('test');
	var bg = document.getElementById('bg');

	var main = document.getElementById('main');
	var mainctx = main.getContext('2d');
	main.width = 768;
	main.height = 480;

	var status = document.getElementById('status');

	var Grace = new grace(400,1,true);

	var game = document.getElementById('game');

	//class
	function grace(x,size,eat){
		this.x = x;
		this.size = size;
		this.eat = eat;
		this.leftMove = function(){
			if(this.x>=100){
				this.x-=7;
			}
		}
		this.rightMove = function(){
			if(this.x<=800){
				this.x+=7;
			}
		}
		this.draw = function(){;
			mainctx.drawImage(img,this.x,280,384,240);
		}
	}


	//function
	function mainDisplay(){
		mainctx.drawImage(bg,0,0,768,480.5);
		Grace.draw();
		requestAnimationFrame(mainDisplay);
	}

	function statusimg(lv){
		if(lv === 1){
			var img = new Image();
			img.src = "./resource/pic/weight_lev1.png";	
		}
		if(lv === 2){
			var img = new Image();
			img.src = "./resource/pic/weight_lev2.png";	
		}
		if(lv === 3){
			var img = new Image();
			img.src = "./resource/pic/weight_lev3.png";	
		}
		if(lv === 4){
			var img = new Image();
			img.src = "./resource/pic/weight_lev4.png";	
		}
		if(lv === 5){
			var img = new Image();
			img.src = "./resource/pic/weight_lev5.png";	
		}
		img.id = "status";
		img.style.width = '204px';	
		img.style.height = '100px';
		game.insertBefore(img,game.firstChild);
	}

	statusimg(1);

	mainDisplay();



	//test

	//input
	document.addEventListener('keydown',function(event){
		//left
		if(event.keyCode === 37){
			Grace.leftMove();	
		}
		//right
		if(event.keyCode === 39){
			Grace.rightMove();
		}
	});
}