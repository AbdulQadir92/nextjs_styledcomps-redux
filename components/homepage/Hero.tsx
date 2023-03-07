import { HeroStyled, LeftColumn, RightColumn, Cards, Card1, Card1Shadow, Card2, Card2Shadow, ImageSection } from "../../styles/components/homepage/Hero.styled"
import Link from "next/link"


const Hero = () => {
    return (
        <HeroStyled>
            <LeftColumn>
                <h1>
                    <span>Learn the art of</span>
                    <span>Game Dev</span>
                </h1>
                <p>
                    <span>This is a comprehensive course on Game Development.</span>
                    <span>You will learn everything from generating an idea to</span>
                    <span>publishing your games to different platforms.</span>
                </p>
                <Link href="#">
                    <img src="/images/enrol-icon.svg" alt="..." />
                    <span>Enrol Now</span>
                </Link>
            </LeftColumn>
            <RightColumn>
                <Cards>
                    <Card1>
                        <h3>32K</h3>
                        <div>Students Enrolled</div>
                    </Card1>
                    <Card1Shadow></Card1Shadow>
                    <Card2>
                        <div>
                            <h3>4.7</h3>
                            <img src="/images/star-icon.svg" alt="..." />
                        </div>
                        <div>Overall Rating</div>
                    </Card2>
                    <Card2Shadow></Card2Shadow>
                </Cards>
                <ImageSection>
                    <img src="/images/hero-image.png" alt="..." width="300" height="250" />
                </ImageSection>
            </RightColumn>
        </HeroStyled>
    )
}

export default Hero