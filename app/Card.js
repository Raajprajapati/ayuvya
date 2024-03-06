"use client";
import "./Card.css";
import { RxCross1 } from "react-icons/rx";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

export default function Card({toggle}) {

	const changeRating = (e, _classname) => {
		e.stopImmediatePropagation;

		const number = e.currentTarget.dataset.value;

		const stars = document.getElementsByClassName(_classname);

		for(let i=0;i<number;i++){
			stars[i].style.color = '#ffc107';
		}
		for(let i=number;i<5;i++){
			stars[i].style.color = 'grey';
		}

	}

	return (
		<div className='card'>
			<button className="close-btn" onClick={()=>{toggle()}}><RxCross1 /></button>
			<h2>Leave a review</h2>
			<div className="rating-section card-section">
				<div className="card-label">Safety</div>
				<p className="section-info">How safe do you feel with us ?</p>
				<div className="stars">
					<span className="star safety-star" data-value={1} onClick={(e)=>changeRating(e, 'safety-star')}><FaStar /></span>
					<span className="star safety-star" data-value={2} onClick={(e)=>changeRating(e, 'safety-star')}><FaStar /></span>
					<span className="star safety-star" data-value={3} onClick={(e)=>changeRating(e, 'safety-star')}><FaStar /></span>
					<span className="star safety-star" data-value={4} onClick={(e)=>changeRating(e, 'safety-star')}><FaStar /></span>
					<span className="star safety-star" data-value={5} onClick={(e)=>changeRating(e, 'safety-star')}><FaStar /></span>
				</div>
			</div>
			<div className="rating-section card-section">
				<div className="card-label">Communication </div>
				<p className="section-info">Rate your experience in communication with us.</p>
				<div className="stars">
					<span className="star com-star" data-value={1} onClick={(e)=>changeRating(e, 'com-star')}><FaStar /></span>
					<span className="star com-star" data-value={2} onClick={(e)=>changeRating(e, 'com-star')}><FaStar /></span>
					<span className="star com-star" data-value={3} onClick={(e)=>changeRating(e, 'com-star')}><FaStar /></span>
					<span className="star com-star" data-value={4} onClick={(e)=>changeRating(e, 'com-star')}><FaStar /></span>
					<span className="star com-star" data-value={5} onClick={(e)=>changeRating(e, 'com-star')}><FaStar /></span>
				</div>
			</div>
			<div className="recommend-section card-section">
				<div className="card-label">Would you recommend us?</div>
				<p className="section-info">Recommend us to your friends.</p>
				<div className="input-wrapper">
					<label>
						<input type="radio" name="recommend" value="no" className="hidden recommend" />
						<span>
							<BiSolidDislike className="m-3"/> No
						</span>
					</label>
					<label>
						<input type="radio" name="recommend" value="yes" className="hidden recommend" />
						<span>
							<BiSolidLike className="m-3"/> Yes
						</span>
					</label>
				</div>
			</div>

			<div className="praise-section card-section">
				<div className="card-label">Praise</div>
				<p className="section-info">What do you thik about our services?</p>
				<div className="input-wrapper">
					<label className="active">
						<input type="radio" name="praise" value="bad" className="hidden praise" /> 
						<span>Bad</span>
					</label>
					<label>
						<input type="radio" name="praise" value="good" className="hidden praise" />
						<span>Good</span>
					</label>
					<label>
						<input type="radio" name="praise" value="best" className="hidden praise" />
						<span>Best</span>
					</label>
				</div>
			</div>
		</div>

	);
}