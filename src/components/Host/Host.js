export default function Host({ host }) {
    console.log(host)
    return <div className="housing-host">
        <p className="housing-host-name">{host.name}</p>
        <img src={host.picture} className="housing-host-img" alt={`profil of the host ${host.name}`} />
    </div>
}