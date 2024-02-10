export default function SmilesList({smiles, countSmileClick}) {
  return (
    smiles.map(({ img, count, id }) => <div key={id} className="col-6">
      <img
        src={img}
        className="rounded-circle"
        style={{ cursor: 'pointer' }}
        width="50"
        onClick={() => countSmileClick(id)}
      />
      <div className="p-3">Clicked: {count}</div>
    </div>)
  )
}
