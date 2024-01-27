import {Link} from "react-router-dom";

interface IMovieInfo {
  id: string,
  title: string,
  coverImg: string,
  summary: string
  genres: string[]
}

function Movie({id, coverImg, title, summary, genres}: IMovieInfo) {

  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
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