import React from "react";

const List = ({ classes }) => {
	return (
		<>
			{classes.map((classDetail) => {
				const { id, img, professor, place, time } = classDetail;
				return (
					<article key={id} className='class'>
						<img src={img} alt={professor} />
						<div>
							<h4>{professor}</h4>
							<div className='details'>
								<p>{place}</p>
								<h6>{time}</h6>
							</div>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
