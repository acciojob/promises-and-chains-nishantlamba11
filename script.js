//your JS code here. If required.
let ageinput=document.querySelector("#age");
let nameinput=document.querySelector("#name");
let btn=document.querySelector("#btn");

form.addEventListener("submit",(e)=>{
	e.preventDefault()

	let name=nameinput.value.trim();
	let age=parseInt(ageinput.value.trim(),10)

	if(!name || isNaN(age)){
		alert("Please enter valid details")
		return;
	}

	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve("Welcome, . You can vote")
			}else{
				reject("Oh sorry . You aren't old enough")
			}
		},4000)
	}).then(message=>alert(message))
	  .catch(error=>alert(error))
		
	
})
