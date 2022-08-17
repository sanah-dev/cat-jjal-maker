const MainCard = ({ src, onHeartClick, alreadyFavorite }) => {
	const heartIcon = alreadyFavorite ? "💖" : "🤍";

	return (
		<div className="main-card">
			<img src={src} />
			<button onClick={onHeartClick}>{heartIcon}</button>
		</div>
	);
};

export default MainCard;
