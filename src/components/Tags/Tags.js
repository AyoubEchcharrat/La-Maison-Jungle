export default function Tags({ tags }, id) {
    return <ul className="housing-tags">
        {tags.map(tag => <li key={`${id}-${tag}`} className="housing-tag">{tag}</li>)}
    </ul>
}