import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard
              urls={item.urls}
              alt_description={item.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
}
