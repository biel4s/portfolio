import { useEffect, useState } from "react";

const useIntersection = (refs, options) => {
	const [intersecting, setIntersecting] = useState([]);
	console.log("isVisible", intersecting);

	useEffect(() => {
		const observers = refs.map((ref) => {
			return new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting && !ref.current.visible) {
					ref.current.visible = true;
					setIntersecting((prevElements) => [
						...prevElements,
						ref.current,
					]);
				} else if (!entry.isIntersecting && ref.current.visible) {
					ref.current.visible = false;
					setIntersecting((prevElements) =>
						prevElements.filter(
							(element) => element !== ref.current
						)
					);
				}
			}, options);
		});

		refs.forEach((ref, index) => {
			if (ref.current) {
				ref.current.visible = false;
				observers[index].observe(ref.current);
			}
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, [refs, options]);

	return intersecting;
};

export default useIntersection;