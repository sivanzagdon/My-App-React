export const Book = (props) => {
  const { author, title, image, number } = props
  return (
    <article className="book">
      <img src={image} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{number + 1}</span>
    </article>
  )
}
