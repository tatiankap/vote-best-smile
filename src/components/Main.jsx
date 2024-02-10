import { useEffect, useState } from "react"
import SmilesList from "./SmilesList";
import WonSmileCard from "./WonSmileCard";

const smileCount = 8;

export default function Main() {
    const [smiles, setSmiles] = useState([]);
    const [smile, setSmile] = useState(null);

    const handleShowResults = () => {
        setSmile(() => smiles.reduce((prev, curr) => (prev && prev.count > curr.count) ? prev : curr, 0))
    }

    const generateSmile = () => {
        return `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${(Math.random() + 1).toString(36).substring(7)}`;;
    }

    const countSmileClick = (id) => {
        setSmiles(smiles => smiles.map(smile => smile.id === id ? ({ ...smile, count: smile.count++ }) : smile))
    }

    useEffect(() => {
        setSmiles(() => {
            const smilesArr = []
            for (let i = 0; i < smileCount; i++) {
                smilesArr.push({ img: generateSmile(), count: 0, id: i })
            }
            return smilesArr
        })
    }, [])

    return (
        <div className="container">
            <div className="row gx-5">
                <SmilesList smiles={smiles} countSmileClick={countSmileClick} />
            </div>
            <WonSmileCard smile={smile} />
            <button className="btn btn-primary" onClick={handleShowResults}>Show Results</button>
        </div>
    )
}
