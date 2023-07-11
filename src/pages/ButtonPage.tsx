import Button from "../components/Button";

const ButtonPage = () => {
    return (
        <div>
            <Button color="error" gradient="g-error">Cancel</Button>
            <Button color="error" variant="outlined">Delete</Button>
            <Button color="error">Delete</Button>
            <Button color="neutral" gradient="g-primary">Register</Button>
            <Button color="primary" variant="outlined">Login</Button>
            <Button color="primary">Login</Button>
            <Button color="success" gradient="g-success">Submit</Button>
            <Button color="success" variant="outlined">Ok</Button>
            <Button color="success">Submit</Button>
            <Button color="neutral" gradient="g-neutral">Send</Button>
            <Button color="neutral" variant="outlined">Error</Button>
            <Button color="neutral">Error</Button>
        </div>
    );
};

export default ButtonPage;