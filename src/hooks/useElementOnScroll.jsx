import React, { useEffect, useState, useMemo } from "react";

const useElementOnScroll = (options, targetRef) => {
	const [isVisible, setIsVisible] = useState(false);
	console.log("isVisible", isVisible);

	const callbackFunction = (entries, observer) => {
		const entry = entries[0];
		// entries.forEach((entry) => {
		// 	if (entry.isIntersecting) setIsVisible(entry.isIntersecting);
		// 	if (entry.isIntersecting) observer.unobserve(entry.target);
		// });
		setIsVisible(entry.isIntersecting);
		if (entry.isIntersecting) observer.unobserve(entry.target);
	};

	const optionsMemo = useMemo(() => {
		return options;
	}, [options]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			callbackFunction,
			optionsMemo
		);
		const currentTarget = targetRef.current;
		if (currentTarget) observer.observe(currentTarget);
		return () => {
			if (currentTarget) observer.unobserve(currentTarget);
		};
	}, [targetRef, optionsMemo]);
	return isVisible;
};

export default useElementOnScroll;
