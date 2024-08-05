import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className='notFound'>
      <h1>404 Not Found</h1>
      <p>Страницата, която търсите, не съществува.</p>
      <Link to="/">Върнете се към началната страница!</Link>
    </div>
  );
}