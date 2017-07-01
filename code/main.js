window.onload = function(){
	
	//var
	var img = document.getElementById('test');

	var main = document.getElementById('main');
	var mainctx = main.getContext('2d');
	main.width = 900;
	main.height = 512;

	var status = document.getElementById('status');
	var statusctx = status.getContext('2d');
	status.width = 300;
	status.height = 100;

	var Grace = new grace(400,1,true);

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
		mainctx.fillStyle = 'rgba(0,0,0)';
		mainctx.fillRect(0,0,900,512);
		Grace.draw();
		requestAnimationFrame(mainDisplay);
	}

	function statusDisplay(){
		mainctx.fillStyle = 'rgba(0,0,0)';
		mainctx.fillRect(0,0,900,512);
		requestAnimationFrame(statusDisplay);
	}

	mainDisplay();

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