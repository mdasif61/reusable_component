import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import CardImage from "./assets/Images/profile.webp";
import Image from "./components/Image";
import Title from "./components/Title";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import Badge from "./components/Badge";
import MainBody from "./components/MainBody";

interface Post {
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const handlePost = (data: unknown) => {
    console.log(data);
  };
  const handleGetPost = (data: unknown) => {
    console.log(data);
  };
  const handleClick = () => {
    console.log("clicked");
  };

  const [data, setData] = useState<Post[] | null>(null);
  useEffect(() => {
    void fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        setData(data);
      });
  }, []);

  const handleId=(id:number)=>{
    console.log(id)
  }

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

      <div className="grid grid-cols-5 gap-7">
        {data?.map((item) => (
          <Card className="w-auto">
            <Image src={CardImage} alt="not found" />
            <MainBody>
              <Title>{item.title}</Title>
              <CardBody>{item.body}</CardBody>
              <CardFooter>
                <Button onClick={()=>handleId(item.id)} color="error" variant="outlined">
                  Buy Now
                </Button>
                <Badge>Orders</Badge>
              </CardFooter>
            </MainBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
