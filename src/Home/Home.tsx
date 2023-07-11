import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardFooter from "../components/CardFooter";
import Image from "../components/Image";
import MainBody from "../components/MainBody";
import Title from "../components/Title";
import CardImage from "../assets/Images/profile.webp";

const Home = () => {
    return (
        <div>
            <Card>
                <Image src={CardImage} alt="image not found" />
                <MainBody>
                    <Title>Join Our Services</Title>
                    <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                        dolore dignissimos sed blanditiis consequuntur ab omnis iusto? Iusto
                        debitis
                    </CardBody>
                    <CardFooter>
                        <Button color="success" className="ml-0">
                            Buy Now
                        </Button>
                        <Badge>Category</Badge>
                    </CardFooter>
                </MainBody>
            </Card>
        </div>
    );
};

export default Home;