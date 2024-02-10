export default function WonSmileCard({smile}) {
    return (
        <>{smile && <div>
            <h5>Переміг на підставі кількості голосів:</h5>
            <img
                src={smile.img}
                className="rounded-circle"
                width="50"
            />
            <div className="p-3">Clicked: {smile.count}</div>
        </div>}</>
    )
}
