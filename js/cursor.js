	    // cursor
const cursor2 = document.querySelector('.cursor2')
const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', (e) => {
	cursor.style.left = e.clientX + 'px';
	cursor.style.top = e.clientY + 'px';
	cursor2.style.left = e.clientX + 'px';
	cursor2.style.top = e.clientY + 'px';
})