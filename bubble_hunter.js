window.addEventListener("load", main_prog, false); 

	
function main_prog(){ 

	var ctx = game_zone.getContext("2d")
	var w = game_zone.width;
	var h = game_zone.height;
	var l = 11
	var timerId = 0
	var es = 0											
	var k = 0											
	var s = 400											
	var f = 0											
	var Xx = []											
	var Yy = []											
	var j = 2 											
	var L = 2 											

	Zz = [0,0]											
	Rr = [0,0]											

	for (i = 0; i < 2; i++){ 							
		Xx[i] = Math.floor((Math.random()*w))
		Yy[i] = Math.floor((Math.random()*h))	
	}


	click3.onclick = function(){
		l = 15											
		reset_timer()									
	}


	click4.onclick = function(){
		l = 10											
		reset_timer()
	}


	click5.onclick = function(){
		l = 5											
		reset_timer()
	}

	
	function circle(ctx, x, y, r) { 					
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fill();
	}


	function mouse_coords(e){							
		var m = {}
		var rect = game_zone.getBoundingClientRect();
		m.x = e.clientX - rect.left;
		m.y = e.clientY - rect.top;
		return m;
	}


	function calculation() {							

		game_zone.onmousedown = function(e){			

			es = 1
			var R = mouse_coords(e);

			if(k == 0){
				a = R.x  								
				b = R.y 								
				k = 1
			}
			
			for (i = 0; i < L; i++){					

				console.log(Xx[i], Yy[i], Rr[i], a, b)

				if (Math.pow(Xx[i] - a, 2) + Math.pow(Yy[i] - b, 2) <= Rr[i] * Rr[i]){
														

					s = s + 300 						

					Rr[i] = 0							
					Xx[i] = Math.floor(Math.random() * w)
					Yy[i] = Math.floor(Math.random() * h)
					Zz[i] = 0							

					j--									
				}
		    }

			if(j == L){
				s = s - 100 								
			}	    
		}	
	

		game_zone.onmouseup = function(e){				

			if(k == 1){
				k = 0
			}

			j = L	
		}

		span_score.innerHTML = s						
		if (es == 1 && s > 0 && (f <= s - 1200)){		
			es = 0
			f = s
			L++											
			Zz[L - 1] = 0								
			Rr[L - 1] = 0
		}
		
		
		for (i = 0; i < L; i++){						
			if (Rr[i] == 0){

				if (k == 0){

					s = s - 200
				}										

				Zz[i] = 0		
				Xx[i] = Math.floor(Math.random() * w)
				Yy[i] = Math.floor(Math.random() * h)
			}

			if (Zz[i] == 0){
				Rr[i]++	
			}

			if (Rr[i] == 20){
				Zz[i] = 1
			}

			if (Zz[i] == 1){
				Rr[i]--
			}
		}
	}
		
	
	
	function draw(){									

		ctx.clearRect(0, 0, w, h);						 
		ctx.fillStyle = "black";
	    ctx.fillRect(0, 0, w, h)

		for (i = 0; i < L; i++){
			ctx.strokeStyle = "yellow";
			ctx.fillStyle = "yellow";
			circle(ctx, Xx[i], Yy[i], Rr[i])
		}
	}


	function play_func() {								
		timerId = setInterval(function() {
			calculation();
			draw();
    	}, 10 * l)
	}


    function reset_timer() {							
        if (timerId != 0) {
			clearInterval(timerId)
            timerId = 0
            play_func()
        }
    }


 	click6.onclick = function(){						

	 	if (timerId != 0) {
	 		click6.value = "Play"
	     	clearInterval(timerId)
            timerId = 0
	 	} else {
	 		click6.value = "Stop"
	 		play_func()
	 	}
	}
 }

	
	
	
	
	
	


