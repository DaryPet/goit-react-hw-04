export default function ImageCard({ alt_description, urls, onClick }) {
  return (
    <div onClick={() => onClick(urls.full)}>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
}
