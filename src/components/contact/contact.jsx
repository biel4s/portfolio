import React, { useState, formRef } from "react";
import style from "./contact.module.scss";

export default function Contact() {
	const [namePlaceholder, setNamePlaceholder] = useState("Enter Your Name");
	const [emailPlaceholder, setEmailPlaceholder] =
		useState("Enter Your Email");
	const [messagePlaceholder, setMessagePlaceholder] =
		useState("Enter Your Message");

	const handleNameFocus = () => {
		setNamePlaceholder("");
	};
	const handleNameBlur = (e) => {
		if (e.target.value === "") {
			setNamePlaceholder("Enter Your Name");
		}
	};

	const handleEmailFocus = () => {
		setEmailPlaceholder("");
	};
	const handleEmailBlur = (e) => {
		if (e.target.value === "") {
			setEmailPlaceholder("Enter Your Email");
		}
	};

	const handleMessageFocus = () => {
		setMessagePlaceholder("");
	};
	const handleMessageBlur = (e) => {
		if (e.target.value === "") {
			setMessagePlaceholder("Enter Your Message");
		}
	};

	return (
		<div className={style.container}>
			<h2 className={style.heading__primary}>Contact</h2>
			<p className={style.text}>
				Please don't hesitate to reach out to me by filling out the form
				below. I'll do my best to respond to you as soon as I can.
			</p>
			<form className={style.form} ref={formRef} autoComplete="off">
				<input
					placeholder={namePlaceholder}
					type="text"
					name="name"
					className={style.input}
					onFocus={handleNameFocus}
					onBlur={handleNameBlur}
					required
				></input>
				<input
					placeholder={emailPlaceholder}
					type="text"
					name="email"
					className={style.input}
					onFocus={handleEmailFocus}
					onBlur={handleEmailBlur}
					required
				></input>
				<textarea
					placeholder={messagePlaceholder}
					type="text"
					name="message"
					className={style.input}
					onFocus={handleMessageFocus}
					onBlur={handleMessageBlur}
					required
				></textarea>
			</form>
			<button className={style.btn}>Submit</button>
		</div>
	);
}
