interface IMovieInfo {
  title: string,
  coverImg: string,
  summary: string
  genres: string[]
}

function Movie({coverImg, title, summary, genres}: IMovieInfo) {
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map(
          (g) => <li key={g}>{g}</li>
        )}
      </ul>
    </div>
  );
}


export default Movie;