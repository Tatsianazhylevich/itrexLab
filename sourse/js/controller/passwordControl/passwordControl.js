export function passwordControl(e){

	if (e.target.previousElementSibling.type === 'password') {
		e.target.classList.add('view');
		e.target.previousElementSibling.type = 'text';
	} else {
		e.target.classList.remove('view');
		e.target.previousElementSibling.type = 'password';
	}
	return false;
}

