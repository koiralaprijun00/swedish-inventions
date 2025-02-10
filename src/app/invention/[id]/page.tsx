import inventionsData from "../../inventionsData"
import "../../css/invention-page.css"

export default async function InventionPage({ params }: { params: { id: string } }) {
  const { id } = params // Get the dynamic route parameter
  const decodedId = decodeURIComponent(id) // Decode special characters

  // Flatten the inventionsData using map + flat
  const allInventions = inventionsData.map(category => category.items.map(item => ({ ...item, category: category.category }))).flat() // Flatten the nested arrays

  // Find the specific invention
  const invention = allInventions.find(item => item.name === decodedId)

  if (!invention) {
    return <p>Invention not found!</p>
  }

  return (
    <div className="invention-page-container">
      <div className="invention-page-content">
        {invention.category}
        <h1>
          {invention.name}
        </h1>
        {invention.description}
        <div className="invention-page-image-container">
          <img src={invention.imageSrc} alt={invention.name} className="invention-page-image" />
        </div>
      </div>
      <div className="invention-page-meta">
        <div>
          <strong>Inventor</strong>
          <br />
          {invention.inventorName || "Unknown"}
        </div>
        <div>
          <strong>Category</strong>
          <br />
          {invention.category}
        </div>
      </div>
    </div>
  )
}
