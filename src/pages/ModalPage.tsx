import { useState } from 'react'
import Button from "../components/Button";
import Modal from "../components/Modal/Modal";
import modalImg from '../../public/Images/img.jpeg'
import Image from '../components/Image';

const ModalPage = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button onClick={() => setOpen(true)} color="neutral" gradient="g-neutral">Open Modal</Button>

            {open && <Modal setOpen={setOpen}>
                <div>
                    <div className=' flex items-center p-5 justify-center'>
                        <Image className='h-56 rounded-xl border-2 border-white' src={modalImg} />
                    </div>
                    <div className='my-5 text-white'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque quae pariatur dolore ex soluta, dolorum odit rerum unde fugiat provident natus cupiditate, labore commodi? Animi recusandae cumque assumenda laboriosam?</p>
                    </div>
                    <Button color='primary' className='btn-block'>Send</Button>
                </div>
            </Modal>}
        </div>
    );
};

export default ModalPage;