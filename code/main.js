window.onload = function(){
	
	//var

	//Resource
	var bg = document.getElementById('bg');
	var body1 = document.getElementById('body1');
	var body2 = document.getElementById('body2');
	var body3 = document.getElementById('body3');
	var body4 = document.getElementById('body4');
	var face = document.getElementById('face');
	var eyeClose = document.getElementById('eyeClose');
	var eat1 = document.getElementById('eat1');
	var eat2 = document.getElementById('eat2');
	var normal = document.getElementById('normal');
	var openMouse = document.getElementById('openMouse');
	var cake = document.getElementById('cake');
	var cupcake = document.getElementById('cupcake');
	var donut = document.getElementById('donut');
	var ff = document.getElementById('ff');
	var hotdog = document.getElementById('hotdog');
	var icecream = document.getElementById('icecream');

	var Food = [cake,cupcake,donut,ff,hotdog,icecream];
	var Foods = [];

	var main = document.getElementById('main');
	var mainctx = main.getContext('2d');
	main.width = 768;
	main.height = 480;

	var status = document.getElementById('status');

	var Grace = new grace(400,1,'eatting');

	var game = document.getElementById('game');

	var foodId = 0;
	var delList = [];

	//class
	function grace(x,size,eatState){
		this.x = x;
		this.size = size;
		this.eatState = eatState;
		this.eatcnt = 0;
		this.face = face;
		this.mouse = null;
		this.test = test;

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

			this.update();

			mainctx.drawImage(this.face,this.x,275,110,200);
			mainctx.drawImage(this.mouse,this.x,275,110,200);
			mainctx.drawImage(this.body,this.x,275,110,200);
			mainctx.drawImage(this.test,this.x,275,110,200);
			
			//red point
			mainctx.beginPath();
			mainctx.fillStyle="red";
			
			//face
			mainctx.fillRect(this.x+56,303,1,1);
			mainctx.fillRect(this.x+57,319,1,1);
			mainctx.fillRect(this.x+57,333,1,1);
			mainctx.fillRect(this.x+75,343,1,1);
			mainctx.fillRect(this.x+39,343,1,1);
			mainctx.fillRect(this.x+77,353,1,1);
			mainctx.fillRect(this.x+36,353,1,1);
			mainctx.fillRect(this.x+80,362,1,1);
			mainctx.fillRect(this.x+33,361,1,1);

			//body_1
				///arm
			mainctx.fillRect(this.x+32,380,1,1);
			mainctx.fillRect(this.x+79,380,1,1);
			mainctx.fillRect(this.x+29,386,1,1);
			mainctx.fillRect(this.x+82,386,1,1);
			mainctx.fillRect(this.x+27,394,1,1);
			mainctx.fillRect(this.x+85,394,1,1);
			mainctx.fillRect(this.x+24,400,1,1);
			mainctx.fillRect(this.x+88,400,1,1);
			mainctx.fillRect(this.x+20,407,1,1);
			mainctx.fillRect(this.x+91,407,1,1);
				///skirt
			mainctx.fillRect(this.x+54,424,1,1);
			mainctx.fillRect(this.x+67,441,1,1);
			mainctx.fillRect(this.x+40,441,1,1);
			mainctx.fillRect(this.x+30,448,1,1);
			mainctx.fillRect(this.x+77,448,1,1);

			//face
			mainctx.arc(this.x+56,303,28,0,2*Math.PI);
			mainctx.arc(this.x+57,319,30,0,2*Math.PI);
			mainctx.arc(this.x+57,333,32,0,2*Math.PI);
			mainctx.arc(this.x+75,343,16,0,2*Math.PI);
			mainctx.arc(this.x+39,343,16,0,2*Math.PI);
			mainctx.arc(this.x+77,353,16,0,2*Math.PI);
			mainctx.arc(this.x+36,353,16,0,2*Math.PI);	
			mainctx.arc(this.x+80,362,15,0,2*Math.PI);
			mainctx.arc(this.x+33,361,15,0,2*Math.PI);

			//body_1
				///arm
			mainctx.arc(this.x+32,380,5,0,2*Math.PI);
			mainctx.arc(this.x+79,380,5,0,2*Math.PI);
			mainctx.arc(this.x+29,386,5,0,2*Math.PI);
			mainctx.arc(this.x+82,386,5,0,2*Math.PI);
			mainctx.arc(this.x+27,394,6,0,2*Math.PI);
			mainctx.arc(this.x+85,394,6,0,2*Math.PI);
			mainctx.arc(this.x+24,400,6,0,2*Math.PI);
			mainctx.arc(this.x+88,400,6,0,2*Math.PI);
			mainctx.arc(this.x+20,407,5,0,2*Math.PI);
			mainctx.arc(this.x+91,407,5,0,2*Math.PI);
				///skirt
			mainctx.arc(this.x+54,424,25,0,2*Math.PI);
			mainctx.arc(this.x+67,441,15,0,2*Math.PI);
			mainctx.arc(this.x+40,441,15,0,2*Math.PI);
			mainctx.arc(this.x+30,448,6,0,2*Math.PI);
			mainctx.arc(this.x+77,448,6,0,2*Math.PI);

			mainctx.stroke();
			
			
			
		}
		this.update = function(){
			//body
			if(this.size === 1){
				this.body = body1;
				this.CK = [];
			}
			else if(this.size === 2){
				this.body = body2;
				this.CK = [];
			}
			else if(this.size === 3){
				this.body = body3;
				this.CK = [];
			}
			else if(this.size === 4){
				this.body = body4;
				this.CK = [];
			}


			//face
			if(this.eatState === 'eatting' && Math.floor(this.eatcnt/25)%2 === 0){
				this.mouse = eat1;
				this.eatcnt+=1;
			}
			else if(this.eatState === 'eatting' && Math.floor(this.eatcnt/25)%2 === 1){
				this.mouse = eat2;
				this.eatcnt+=1;
			}
			else if(this.eatState === 'near'){
				this.mouse = openMouse;
			}
			else if(this.eatState === 'normal'){
				this.mouse = normal;
			}

			if(this.eatcnt >= 250){
				this.eatcnt = 0;
				this.eatState = 'normal';
			}
			/*
			else if(){
				this.eatState = 'near';
			}
			*/

		}
	}

	function food(type,x,speed,id){
		this.type = type;
		this.x = x;
		//this.y = -60;
		this.y = 400;
		this.speed = speed;
		this.id = id;
		this.cnt = 0

		this.fall = function(){
			if(this.y < 400){
				this.y += this.speed;
			}
			else{
				this.cnt += 1;
			}
		}
		this.draw = function(){
			mainctx.globalAlpha = 1-(this.cnt/100);
			mainctx.drawImage(this.type,this.x,this.y,80,80);
			mainctx.globalAlpha = 1.0;
		}
	}


	//function
	function mainDisplay(){
		mainctx.drawImage(bg,0,0,768,480);
		//genFoods();
		for(var i=0;i<Food.length;i++){
			var test = new food(Food[i],i*100,0,0);
			test.draw();
		}
		//Grace.draw();
		requestAnimationFrame(mainDisplay);
	}

	function statusImg(lv){
		if(lv === 1){
			var img = new Image();
			img.src = "./resource/background/weight_lev1.png";	
		}
		if(lv === 2){
			var img = new Image();
			img.src = "./resource/background/weight_lev2.png";	
		}
		if(lv === 3){
			var img = new Image();
			img.src = "./resource/background/weight_lev3.png";	
		}
		if(lv === 4){
			var img = new Image();
			img.src = "./resource/background/weight_lev4.png";	
		}
		if(lv === 5){
			var img = new Image();
			img.src = "./resource/background/weight_lev5.png";	
		}
		img.id = "status";
		img.style.width = '204px';	
		img.style.height = '105px';
		game.insertBefore(img,game.firstChild);
	}

	function genFoods(){
		if(randomNum(0,10000)%50 === 0){
			this.x = randomNum(0,738);
			this.type = Food[randomNum(0,5)];
			this.speed = randomNum(2,3);
			var a = new food(this.type,this.x,this.speed,foodId);
			Foods.push(a);
			foodId += 1;
		}
		for(var i=0;i<Foods.length;i++){
			Foods[i].fall();
			Foods[i].draw();
			if(Foods[i].cnt >= 100){
				delList.push(Foods[i].id);
			}
		}
		delFoods();
	}

	function delFoods(){
		for(var i=0;i<delList.length;i++){
			for(var j=0;j<Foods.length;j++){
				if(Foods[j].id===delList[i]){
					console.log(Foods[j].id);
					Foods.splice(j,1);
				}
			}
		}
		delList = [];
	}

	function randomNum(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}

	statusImg(1);

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