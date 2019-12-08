//TARGETS...................
const screen = document.querySelector(".screen")
let allBtnz = document.querySelectorAll(".btnz button")
let play = []
//---------------------------

//CALCULATORS MOTIONS----------------------------------------------------------
//set onclicks for buttons

allBtnz.forEach((x)=>x.setAttribute("onclick", "calcMotion(this)"))


//creating a switch statement to determin what todo based off what button called the function
let calcMotion=(btn)=>{
		switch(btn.innerHTML){
			case "0":screen.innerHTML+=Number(btn.innerHTML);break;
			case "1":screen.innerHTML+=Number(btn.innerHTML);break;
			case "2":screen.innerHTML+=Number(btn.innerHTML);break;
			case "3":screen.innerHTML+=Number(btn.innerHTML);break;
			case "4":screen.innerHTML+=Number(btn.innerHTML);break;
			case "5":screen.innerHTML+=Number(btn.innerHTML);break;
			case "6":screen.innerHTML+=Number(btn.innerHTML);break;
			case "7":screen.innerHTML+=Number(btn.innerHTML);break;
			case "8":screen.innerHTML+=Number(btn.innerHTML);break;
			case "9":screen.innerHTML+=Number(btn.innerHTML);break;
			case "ℼ":pie();break;case "✗":finesse('*');break;
			case "-":finesse('-');break;
			case "+":finesse('+');break;case "/":finesse('/');break;
			case ".":finesse('.');break;case "☠":screen.innerHTML="";break;
			case "⬅":screen.innerHTML=screen.innerHTML.slice(0,-1);break;
			case "=":eq();break;
			case "√":square();break;
		}
}
//funtion to display opperators correctly
	function finesse(oou){

		//do not doublicate '.'
			console.log(oou)
			console.log(`does ${oou===screen.innerHTML.slice(-1)}`)
			console.log(`does Not ${oou!==screen.innerHTML.slice(-1)}`)
setTimeout(()=>{
			
		if(oou===screen.innerHTML.slice(-1)){

					return false;
			
					}else if(oou!==screen.innerHTML.slice(-1)){play.push(screen.innerHTML, oou)
						{let newScreen = play.join("")
							screen.innerHTML = newScreen
								setTimeout(function(){play =[];}, 1)}}},1)
							
	}
//function to find the square root properly
	function square(){
			if(screen.innerHTML.slice(-1)==='/'||
				screen.innerHTML.slice(-1)==='+'||
				screen.innerHTML.slice(-1)==='-'||
				screen.innerHTML.slice(-1)==='*'
				){
				n2s('sqrt')
			}else if(screen.innerHTML.includes('+') ||
					screen.innerHTML.includes('-') ||
					screen.innerHTML.includes('/') ||
					screen.innerHTML.includes('*') ){
				screen.innerHTML = eval(screen.innerHTML)
				screen.innerHTML = Math.sqrt(Number(screen.innerHTML))
			}else{
							//console.log("square root this bitch and dont fuck up")
				screen.innerHTML = Math.sqrt(Number(screen.innerHTML))

			}
	}
//function to display correct errors n2s {NOTHING TO SOLVE}
	function n2s(x){
		switch(x){
			case 'sqrt':
			localStorage.setItem("holdScreen", screen.innerHTML)
				screen.innerHTML="Theres an opperator at the end bro..."
					setTimeout(function(){
						screen.innerHTML=localStorage.getItem("holdScreen")
						localStorage.clear()
					},2000)
			break;

			case 'pi':
			localStorage.setItem("holdScreen", screen.innerHTML)
									screen.innerHTML= new Error('try again..')
										setTimeout(function(){
											screen.innerHTML=localStorage.getItem("holdScreen")
											localStorage.clear()
										},500)
										break;
		}
	}
//function to make pie behave properly
	function pie(){

		if(screen.innerHTML.slice(-1) === '/' || 
			screen.innerHTML.slice(-1) ==='*' ||
			screen.innerHTML.slice(-1) === '+' || 
			screen.innerHTML.slice(-1) ==='-'||
			screen.innerHTML.slice(-1).length === 0){

				screen.innerHTML+=Number(Math.PI)
				}else if(
					screen.innerHTML.slice(-1) === '0' || 
					screen.innerHTML.slice(-1) === '1' || 
					screen.innerHTML.slice(-1) ==='2' || 
					screen.innerHTML.slice(-1) ==='3' || 
					screen.innerHTML.slice(-1) ==='4' ||
					screen.innerHTML.slice(-1) === '5' || 
					screen.innerHTML.slice(-1) ==='6' ||
					screen.innerHTML.slice(-1) === '7' ||
					screen.innerHTML.slice(-1) === '8' ||
					screen.innerHTML.slice(-1) === '9' ){
				
				n2s('pi')
					}
				}
			

//funtion to solve over all
	function eq(){


		if(screen.innerHTML.includes("*") ||
			screen.innerHTML.includes("/") ||
			screen.innerHTML.includes("+") ||
			screen.innerHTML.includes("-")){
					screen.innerHTML.slice(-1) === '/' || 
					screen.innerHTML.slice(-1) ==='*' ||
					screen.innerHTML.slice(-1) === '+' || 
					screen.innerHTML.slice(-1) ==='-' ||
					screen.innerHTML.slice(-1) ==='.' && screen.innerHTML.slice(-2, -1).length > 0?false:
						screen.innerHTML=eval(screen.innerHTML);}
	}
//------------------------------------------------------------------------