import {useRouter} from "next/router";
import Seo from "../../components/Seo";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";

export default function Detail({ movieData }) {
  const router = useRouter();

  console.log(movieData);
  return (
    <div>
      <Seo title={movieData.original_title} />
      <div className="movie_header">
        <h4 className="movie_title">{ movieData.original_title }</h4>
        <div className="genres_list">
          {
            movieData.genres.map((genre) => (
              <div className="genre_item">
                {genre.name}
              </div>
            ))
          }
        </div>
      </div>
      <div className="movie_container">
        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt=""/>
      </div>
      <style jsx>{`
        .movie_header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }
        .movie_title {
          font-size: 18px;
        }
        .genres_list {
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        .genre_item {
          display: inline-flex;
          background-color: #222222;
          padding: 4px 6px;
          border-radius: 4px;
          color: #fafafa;
          margin-right: 10px;
        }
        .movie_container {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { params: { id } } = ctx;

  const movieData = await (await fetch(`http://localhost:3000/api/movies/${id[1]}`)).json();

  return {
    props: {
      movieData,
    },
  }
}
