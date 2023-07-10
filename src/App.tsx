import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardImage from "./assets/Images/profile.webp";
import Image from "./components/Image";
import Title from "./components/Title";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import Badge from "./components/Badge";

const App = () => {
  const handlePost = (data: unknown) => {
    console.log(data);
  };
  const handleGetPost = (data: unknown) => {
    console.log(data);
  };
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <Button
        onClick={() => handlePost(52)}
        color="error"
        variant="outlined"
        radius="r-full"
      >
        Submit
      </Button>

      <Button
        onClick={() => handleGetPost("i am ikbal Hossain Asif")}
        color="primary"
        variant="outlined"
        radius="r-none"
      >
        Submit
      </Button>

      <Button onClick={handleClick} color="success" radius="r-lg">
        Submit
      </Button>

      <Card>
        <Image src={CardImage} alt="image not found" />
        <Title>Join Our Services</Title>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolore
          dignissimos sed blanditiis consequuntur ab omnis iusto? Iusto debitis
        </CardBody>
        <CardFooter>
          <Button color="success" className="ml-0">
            Buy Now
          </Button>
          <Badge>Category</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
