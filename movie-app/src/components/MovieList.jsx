const MovieList = ({ movies }) => {
	return (
		<div className="row g-4">
			{movies.map((movie) => (
				<div
					key={movie.imdbID}
					className="col-6 col-sm-4 col-md-3 col-lg-2"
				>
					<div className="card h-100 shadow-sm">
						<img
							src={movie.Poster}
							className="card-img-top"
							alt={movie.Title}
						/>
						<div className="card-body p-2">
							<h6 className="card-title mb-1">
								{movie.Title}
							</h6>
							<p className="card-text text-muted mb-0">
								{movie.Year}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieList;
