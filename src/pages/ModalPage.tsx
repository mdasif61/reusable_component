import { useState } from 'react'
import Button from "../components/Button";

import Modal from "../components/Modal/Modal";

const ModalPage = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button onClick={() => setOpen(true)} color="neutral" gradient="g-neutral">Open Modal</Button>

            {open && <Modal setOpen={setOpen}>
                <div className='flex'>
                    <h1>Header</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque quae pariatur dolore ex soluta, dolorum odit rerum unde fugiat provident natus cupiditate, labore commodi? Animi recusandae cumque assumenda laboriosam?</p>
                </div>
            </Modal>}
        </div>
    );
};

export default ModalPage;