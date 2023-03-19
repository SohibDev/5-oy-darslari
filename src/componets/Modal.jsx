import React from "react";
import ContactForm from "./ContactForm";

const Modal = ({ contact, setContacts, contacts, closeModal }) => {
  // const [newState, setNewState] = newState({
  //   id : contact.id,
  //   title : contact.title,
  //   relationship: contact.relationship,
  //   phone : contact.phone
  // })      
  // setNewState(...contacts, newState)      
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "100",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="custom-modal "
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Modal title
            </h1>
            <button
              onClick={() => {
                closeModal(false);
              }}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <input
                onChange={(evt) => {
                  const result = contacts.map((element) => {
                    if (element.id === contact.id) {
                      element.title = evt.target.value;
                    }
                    return element;
                  });
                  setContacts(result);
                }}
                type="text"
                value={contact.title}
                name=""
                id=""
              />
              <input
                onChange={(evt) => {
                  const result = contacts.map((element) => {
                    if (element.id === contact.id) {
                      element.relationship = evt.target.value;
                    }
                    return element;
                  });
                  setContacts(result);
                }}
                type="text"
                value={contact.relationship}
                name=""
                id=""
              />
              <input
                onChange={(evt) => {
                  const result = contacts.map((element) => {
                    if (element.id === contact.id) {
                      element.phone = evt.target.value;
                    }
                    return element;
                  });
                  setContacts(result);
                }}
                value={contact.phone}
                type="text"
                name=""
                id=""
              />
            </form>
          </div>
          <div classNameName="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => {
                closeModal(false);
              }}
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
