window.onload = function(){

	var mydata = touch;	
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

	var Food = [{type:cake,name:"cake"},{type:cupcake,name:"cupcake"},{type:donut,name:"donut"},{type:ff,name:"ff"},{type:hotdog,name:"hotdog"},{type:icecream,name:"icecream"}];
	var Foods = [];

	var main = document.getElementById('main');
	var mainctx = main.getContext('2d');
	main.width = 768;
	main.height = 480;

	var status = document.getElementById('status');

	var Grace = new grace(400,1,'normal');

	var game = document.getElementById('game');

	var foodId = 0;
	var delList = [];

	//class
	function grace(x,size,eatState){
		this.x = x;
		this.y = 275;
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

			this.eatCK();
			this.update();

			mainctx.drawImage(this.face,this.x,this.y,110,200);
			mainctx.drawImage(this.mouse,this.x,this.y,110,200);
			mainctx.drawImage(this.body,this.x,this.y,110,200);
			//mainctx.drawImage(this.test,this.x,275,110,200);
			
			//red point
			mainctx.beginPath();
			mainctx.fillStyle="red";
			
		

			mainctx.stroke();
			
			
			
		}
		this.update = function(){
			//body
			if(this.size === 1){
				this.body = body1;
				this.circle = mydata.grace.face.concat(mydata.grace.body1);
			}
			else if(this.size === 2){
				this.body = body2;
				this.circle = mydata.grace.face.concat(mydata.grace.body2);
			}
			else if(this.size === 3){
				this.body = body3;
				this.circle = mydata.grace.face.concat(mydata.grace.body3);
			}
			else if(this.size === 4){
				this.body = body4;
				this.circle = mydata.grace.face.concat(mydata.grace.body4);
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

		}
		this.eatCK = function(){
			let s = 1;
			for(var i=0;i<Foods.length;i++){
				//console.log(Math.pow(Math.pow(Grace.x+55-Foods[i].x-40,2)+Math.pow(Grace.y+100-Foods[i].y-40,2),0.5)-141.5)
				if(Math.pow(Math.pow(this.x+55-Foods[i].x-40,2)+Math.pow(this.y+100-Foods[i].y-40,2),0.5) <=141.5+56.6 && this.eatState !== 'eatting' && Foods[i].cnt == 0){
					this.eatCK2(Foods[i]);
					s = 0;
				}			
			}
			if(s===1 && this.eatState !== 'eatting'){
				this.eatState = "normal";
			}
		}

		this.eatCK2 = function(myfood){
			let s = 1;
			for(var j=0;j<this.circle.length;j++){
				//console.log(Math.pow(Math.pow(myfood.x+40-this.x-this.circle[j].x,2)+Math.pow(myfood.y+40-this.circle[j].y,2),0.5)-56.6-this.circle[j].r)
				if(Math.pow(Math.pow(myfood.x+40-this.x-this.circle[j].x,2)+Math.pow(myfood.y+40-this.circle[j].y,2),0.5)<56.6+this.circle[j].r){
					if(this.eat(myfood)===0){
						return 0;
					}
					s = 0;
				}
			}
			if(s===0 && this.eatState !== 'eatting'){
				this.eatState = 'near';
			}
			else if(this.eatState !== 'eatting'){
				this.eatting = 'normal';
			}
		}

		this.eat = function(myfood){
			let name = myfood.name;
			for(var k=0;k<this.circle.length;k++){
				//console.log('yeah')
				for(var l=0;l<mydata.foods[name].length;l++){
					//console.log(Math.pow(Math.pow(myfood.x+mydata.foods[name][l].x-this.x-this.circle[k].x,2)+Math.pow(myfood.y+mydata.foods[name][l].y-this.y-this.circle[k].x,2),0.5)-this.circle[k].r-mydata.foods[name][l].r)
					if(Math.pow(Math.pow(myfood.x+mydata.foods[name][l].x-this.x-this.circle[k].x,2)+Math.pow(myfood.y+mydata.foods[name][l].y-this.circle[k].y,2),0.5)<=this.circle[k].r+mydata.foods[name][l].r){
						if(this.size < 4){
							delList.push(myfood.id);
							this.eatState = 'eatting';
							this.size += 1;
							chStatusImg(this.size);
							return 0;
						}
						else{
							chStatusImg(this.size);
							gameOver();
						}
					}
				}
			}
		}

	}

	function food(type,name,x,speed,id){
		this.name = name;
		this.type = type;
		this.x = x;
		this.y = -60;
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

			//red point
			mainctx.beginPath();
			mainctx.fillStyle="red";

			mainctx.stroke();
		}
	}


	//function
	function mainDisplay(){
		mainctx.drawImage(bg,0,0,768,480);
		genFoods();
		Grace.draw();
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

	function chStatusImg(lv){
		game.removeChild(game.childNodes[0]);
		statusImg(lv);
	}

	function genFoods(){
		if(randomNum(0,10000)%50 === 0){
			this.x = randomNum(0,738);
			this.type = Food[randomNum(0,5)];
			this.speed = randomNum(2,3);
			var a = new food(this.type.type,this.type.name,this.x,this.speed,foodId);
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
					//console.log(Foods[j].id);
					Foods.splice(j,1);
				}
			}
		}
		delList = [];
	}

	function gameOver(){
		restart();
	}

	function restart(){
		var Foods = [];
		var Grace = new grace(400,1,'normal');
		var foodId = 0;
		var delList = [];
		statusImg(1);
		mainDisplay();
	}

	function randomNum(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}

	restart();

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