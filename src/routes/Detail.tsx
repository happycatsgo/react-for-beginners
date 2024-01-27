import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

interface IMovieInfo {
  title: string,
  medium_cover_image: string,
  genres: string[]
}

function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<IMovieInfo>({title: "", medium_cover_image: "", genres: [""]});

  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        <div>
          <img src={movie.medium_cover_image} alt={movie.title}/>
          <h2>{movie.title}</h2>
          <ul>
            {movie.genres.map(
              (g) => <li key={g}>{g}</li>
            )}
          </ul>
        </div>
      }
    </div>
  );
}

export default Detail;