import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function DeleteModal({setShow, userId}) {

    const handleDelete =  async () =>{
      
        
        await axios.delete(`https://swifdropp.onrender.com/api/v1/admin/${userId}/delete`)
        .then((res) => {
            console.log(res);
            setShow(false)
            window.location.reload()
        })
        .catch(err => console.log(err))
    
      }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'absolute' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this user</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShow(false)} variant="secondary">Cancel</Button>
          <Button onClick={() => handleDelete()} variant="primary">Delete User</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeleteModal;