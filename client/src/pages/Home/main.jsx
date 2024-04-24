import Banner from "../../components/Banner/main"
import Card from "../../components/Card/main"
import chatIcon from "/images/icon-chat.webp"
import moneyIcon from "/images/icon-money.webp"
import secureIcon from "/images/icon-security.webp"
import "./style.scss"

const Home = () => {
    return (
        <main>
            <Banner subtitles={["No fees.", "No minimum deposit.", "No hidden charges."]}/>
            <section className="feature">
                <h2 className="sr-only">Features</h2>
                <Card 
                    icon={`${chatIcon}`}
                    iconAlt="Chat Icon"
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <Card 
                    icon={`${moneyIcon}`}
                    iconAlt="Money Icon"
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <Card 
                    icon={`${secureIcon}`}
                    iconAlt="Secure Icon"
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money is always safe."
                />
            </section>
        </main>
    )
}

export default Home