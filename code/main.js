window.onload = function(){
	
	//var

	//Resource
	var bg = document.getElementById('bg');
	var body1 = document.getElementById('body1');
	var body2 = document.getElementById('body2');
	var body3 = document.getElementById('body3');
	var body4 = document.getElementById('body4');
	var eat1 = document.getElementById('eat1');
	var eat2 = document.getElementById('eat2');
	var normal = document.getElementById('normal');
	var openMouse = document.getElementById('openMouse');

	var main = document.getElementById('main');
	var mainctx = main.getContext('2d');
	main.width = 768;
	main.height = 480;

	var status = document.getElementById('status');

	var Grace = new grace(400,1,'eatting');

	var game = document.getElementById('game');

	//class
	function grace(x,size,eatState){
		this.x = x;
		this.size = size;
		this.eatState = eatState;
		this.eatcnt = 0;
		this.face = null;

		this.leftMove = function(){
			if(this.x>=0){
				this.x-=7;
			}
		}
		this.rightMove = function(){
			if(this.x<=666.7){
				this.x+=7;
			}
		}
		this.draw = function(){

			//body
			if(this.size === 1){
				this.body = body1;
			}
			else if(this.size === 2){
				this.body = body2;
			}
			else if(this.size === 3){
				this.body = body3;
			}
			else if(this.size === 4){
				this.body = body4;
			}


			//face
			if(this.eatState === 'eatting' && Math.floor(this.eatcnt/25)%2 === 0){
				this.face = eat1;
				this.eatcnt+=1;
			}
			else if(this.eatState === 'eatting' && Math.floor(this.eatcnt/25)%2 === 1){
				this.face = eat2;
				this.eatcnt+=1;
			}
			else if(this.eatState === 'near'){
				this.face = openMouse;
			}
			else if(this.eatState === 'normal'){
				this.face = normal;
			}
			if(this.eatcnt >= 250){
				this.eatcnt = 0;
				this.eatState = 'normal';
			}

			mainctx.drawImage(this.face,this.x,280,103.3,186.6);
			mainctx.drawImage(this.body,this.x,280,103.3,186.6);
			//mainctx.rect(this.x,280,103.3,186.6);
			//mainctx.stroke();
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