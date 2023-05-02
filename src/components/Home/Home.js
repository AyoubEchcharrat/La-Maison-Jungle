import '../../styles/Home.css'
import '../../styles/index.css'
import '../../styles/Headline.css'
import HousingCards from '../HousingCards/HousingCards.js'

function Home() {
    return (
        <div className='body-container'>
            < div className='headline-container-home'>
                <h1 className='headline-h1 headline'>Chez vous, partout&nbsp;et&nbsp;ailleurs </h1>
            </div >
            <HousingCards />
        </div>

    )
}


export default Home