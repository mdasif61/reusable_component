import Button from "../components/Button";
import Toast from "../components/Toast/Toast";

const ToastPage = () => {
    return (
        <div>
            <Button>Open Toast</Button>
            <Toast text="error this question" type="error"/>  
        </div>
    );
};

export default ToastPage;