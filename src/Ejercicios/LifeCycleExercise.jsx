import React, { useEffect, useState } from "react";

const LifeCycleExercise = () => {
	const [tick, setTick] = useState();

	useEffect(() => {
		console.log("Se genera una nueva fecha");

		const intervalID = setInterval(() => {
			tick();
		}, 1000);

		return () => {
			clearInterval(intervalID);
		};
	}, [tick]);

	return <div>LifeCycleExercise</div>;
};

export default LifeCycleExercise;
