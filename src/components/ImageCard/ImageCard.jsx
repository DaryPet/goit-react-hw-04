export default function ImageCard({ alt_description, urls }) {
  return (
    <div>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
}
