let date = new Date();
let time = date.getHours();
if (time>= 5, time < 13)
	alert("Доброе утро!");
else if (time >=13, time < 18) 
	alert("Добрый день!");
else if (time >=18, time < 23) 
	alert('Добрый вечер!');
else if (time>= 23, time < 5) 
	alert('Доброй ночи!');

