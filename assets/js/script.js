const darkModeToggleButton = document.querySelector('button#dark-mode-toggle')
const darkModeToggleButtonIcon = document.querySelector('button#dark-mode-toggle>img.icon')
const body = document.querySelector('body')

toggleDarkMode = () => {
	body.classList.toggle('dark-mode')

	if (body.classList.contains('dark-mode')) {
		darkModeToggleButtonIcon.src = '../assets/img/sun-solid.svg'
	} else {
		darkModeToggleButtonIcon.src = '../assets/img/moon-solid.svg'
	}
	darkModeToggleButtonIcon.classList.toggle('white')
}