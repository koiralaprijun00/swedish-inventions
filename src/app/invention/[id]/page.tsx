import inventionsData from "../../inventionsData"

export default function InventionPage({ params }: { params: { id: string } }) {
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
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
        {invention.category}
      </h2>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {invention.name}
      </h1>
      <p>
        <strong>Inventor:</strong> {invention.inventorName || "Unknown"}
      </p>
      <img src={invention.imageSrc} alt={invention.name} style={{ width: "300px", height: "200px", objectFit: "cover" }} />
      <p>
        {invention.description}
      </p>
    </div>
  )
}
