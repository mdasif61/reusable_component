import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-108px)]">
      <div className="bg-gradient-to-t from-black to-slate-700 w-5/12 mx-auto rounded-xl p-10 min-h-52">
        <form className="w-full mx-auto">
          <div className="w-full">
            <Input type="email" labelStyle="text-white" placeholder="Email" label="Email" />
            <Input type="password" labelStyle="text-white" placeholder="Password" label="Password" />
            <div className="flex justify-between">
              <Link>
                <p className="text-blue-500">
                  Are You New?
                  <span className="underline font-semibold">Signup please</span>
                </p>
              </Link>
              <Link to="#">
                <p className="text-blue-500 text-right underline">
                  forgot password?
                </p>
              </Link>
            </div>
            <Button type="submit" className="m-0 btn-block mt-4">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
