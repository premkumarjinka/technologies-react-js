// Write your code here.
import './index.css'

const Cards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card ${className}`}>
      <h1 className="item-heading">{title}</h1>
      <p className="item-description">{description}</p>
      <img className="item-image" src={imgUrl} alt={title} />
    </li>
  )
}
export default Cards
