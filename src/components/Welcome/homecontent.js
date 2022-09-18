import React, { useState } from "react";


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 150) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Content = () => {
return (
	<div className="container">
	<p>
		<ReadMore>
        Trauma Care Kozhikode (TRACK), the Kerala based NGO who pioneered the
concept of emergency care of Road Traffic Accident victims, started its
operations in Kozhikode, a major city of Kerala State, India in the year 1998. India
that records high numbers of road traffic deaths, with its 150000 + annual deaths,
was eagerly looking for such an organization. This concept spread rapidly in
Kerala state and various government and non government organizations now
undertake such activities.

		</ReadMore>
	</p>
	</div>
);
};

export default Content;
