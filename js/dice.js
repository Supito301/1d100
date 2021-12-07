// JavaScript File! //

count = 40;
mSec = 20;
times = 0;
cr = 0;
fu = 0;
cr1 = 0;
f100 = 0;
fs = 0;
f100s = 0;
cs = 0;
c1s = 0;

function roll() {
	var dice;

	document.getElementById('result').innerHTML = ("ROLLING...");

	dice = Math.floor(Math.random() * 100);
	document.getElementById('dice').innerHTML = (dice + 1);
	count--;

	if(count >= 1) {
		tim = setTimeout("roll()", mSec);
	}

	if(count == 0) {
		count = 40;
		times++;

		if((dice + 1) <= 5) {
			document.getElementById('result').innerHTML = ("<font color = #32CD32>CRITICAL!</font>");

			if((dice + 1) == 1) {
				cr1 = 1;
				c1s++;
				cs++;

			} else {
				cr = 1;
				cs++;

			}

		} else if((dice + 1) >= 96) {
			document.getElementById('result').innerHTML = ("<font color = #FF0000>FUMBLE!</font>");

			if((dice + 1) == 100) {
				f100 = 1;
				f100s++;
				fs++;

			} else {
				fu = 1;
				fs++;

			}

		} else {
			document.getElementById('result').innerHTML = ("ROLLED " + (dice + 1) + "!");

		}

		var dicelog = document.createElement("p");

		if(cr) {
			dicelog.innerHTML = (times + ": " + "<font color = #32CD32>" + (dice + 1) + "</font>");
			cr = 0;

		} else if(fu) {
			dicelog.innerHTML = (times + ": " + "<font color = #FF0000>" + (dice + 1) + "</font>");
			fu = 0;

		} else if(cr1) {
			dicelog.innerHTML = (times + ": " + "<font color = #32CD32><b>1</b></font>");
			cr1 = 0;

		} else if(f100) {
			dicelog.innerHTML = (times + ": " + "<font color = #FF0000><b>100</b></font>");
			f100 = 0;

		} else {
			dicelog.innerHTML = (times + ": " + (dice + 1));

		}

		document.getElementById('log').insertBefore(dicelog, log.firstChild);
		document.getElementById('counters').innerHTML = ("1 Criticals: " + c1s + ", Criticals: " + cs + "<br>100 Fumbles: " + f100s + ", Fumbles: " + fs)

	}
}