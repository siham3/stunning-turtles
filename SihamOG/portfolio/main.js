
new Vue({
	el:'#name',
	data: {
		show: true
	}
});

function otherFunct()
{
	console.log("we are in another funct");
	console.log("do some stuff");
}

console.log("Start: Hello my name is siham");

otherFunct();

console.log("End");