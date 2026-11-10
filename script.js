const emails = {
	personal: ["mirabeljessemari", "gmail.com"],
	dev: ["sejjymvm", "gmail.com"],
};

document.querySelectorAll("[data-email]").forEach((el) => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		const [user, domain] = emails[el.dataset.email];
		navigator.clipboard.writeText(user + "@" + domain);
	});
});
