const $logo = document.querySelector(".logo");
const $btns = document.querySelectorAll("button");

const changeLogoText = (text: string): void => {
	if ($logo) {
		$logo.textContent = text;
	}
};

$btns.forEach(btn => {
	btn.addEventListener("click", e => {
		const textContent = (e.target as HTMLButtonElement).textContent;
		changeLogoText(textContent);
	});
});
