import Input from "../components/Input/Input";

const InputPage = () => {
  return (
    <div>
      <Input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>console.log(e.target.value)} type="password" placeholder="Password" label="Password"></Input>
    </div>
  );
};

export default InputPage;
