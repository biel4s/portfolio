import React, { useState, useRef } from "react";
import useIntersection from "../../hooks/useIntersection";
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

	const refs = [useRef(), useRef(), useRef(), useRef()];
	const options = { rootMargin: "-50px" };
	const isIntersecting = useIntersection(refs, options);

	return (
		<div className={style.container} id="contact_container">
			<div className={style.content}>
				<h1
					className={`${style.headingPrimary} ${
						isIntersecting.includes(refs[0].current)
							? style.show
							: style.hidden
					}`}
					ref={refs[0]}
				>
					Contact
				</h1>
				<div className={style.test}>
					<p
						className={`${style.paragraph} ${
							isIntersecting.includes(refs[1].current)
								? style.show
								: style.hidden
						}`}
						ref={refs[1]}
					>
						Please don't hesitate to reach out to me by filling out
						the form below. I'll do my best to respond to you as
						soon as I can.
					</p>
					<form
						className={`${style.form} ${
							isIntersecting.includes(refs[2].current)
								? style.show
								: style.hidden
						}`}
						ref={refs[2]}
						autoComplete="off"
					>
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
					<button
						className={`${style.btn} ${
							isIntersecting.includes(refs[3].current)
								? style.show
								: style.hidden
						}`}
						ref={refs[3]}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
