export default function Tags({ tags }) {
    return <ul className="housing-tags">
        {tags.map(tag => <li className="housing-tag">{tag}</li>)}
    </ul>
}