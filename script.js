const makeChange = (c) => {
  // your name here
	if(c>0 && c<100) {
		const change = {};

    change.q = Math.floor(c / 25);
    c = c % 25;

    change.d = Math.floor(c / 10);
    c = c % 10;

    change.n = Math.floor(c / 5);
    c = c % 5;

    change.p = c;

    return change;
	}
	return { q: 0, d: 0, n: 0, p: 0 };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
