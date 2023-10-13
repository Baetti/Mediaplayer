import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addCategory,
  deleteCategory,
  getAVideo,
  getAllCategory,
  updateCategory,
} from "../services/allAPI";
import VideoCard from "./VideoCard";

function Category() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const insertCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName,
        allVideos: [],
      };
      // make api call
      const response = await addCategory(body);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        // reset state
        setCategoryName("");
        // modal hide
        handleClose();
        // call getCategories
        getCategories();
      } else {
        toast.warning("Uploading error!!! Please try after sometime...");
      }
    } else {
      // alert
      toast.info("Please fill the form completely");
    }
  };

  const getCategories = async () => {
    const { data } = await getAllCategory();
    if (data) {
      setCategories(data);
    }
  };

  const removeCategory = async (id) => {
    // make api call
    await deleteCategory(id);
    getCategories();
  };

  useEffect(() => {
    getCategories();
  }, []);

  const dragOverCategory = (e) => {
    // console.log("Dragging over Category");
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    console.log("Inside Drop Function");
    // console.log("Category Id:" + categoryId);
    const videoCardId = e.dataTransfer.getData("cardId");
    // console.log("videoCard Id:" + videoCardId);
    //get video Details
    const { data } = await getAVideo(videoCardId);
    let selectedCategory = categories.find((item) => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    await updateCategory(categoryId, selectedCategory);
    getCategories();
  };

  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-primary">
          Add New Category
        </button>
      </div>

      {categories ? (
        categories.map((item) => (
          <div
            className="border p-3 rounded mt-3 mb-3"
            droppable
            onDragOver={(e) => dragOverCategory(e)}
            onDrop={(e) => videoDrop(e, item?.id)}
          >
            <div className="d-flex justify-content-between">
              <h5>{item.categoryName}</h5>
              <button onClick={() => removeCategory(item?.id)} className="btn">
                {" "}
                <i className="fa-solid fa-trash-can fs-6 text-danger"></i>
              </button>
            </div>
            <Row>
              {item?.allVideos &&
                item?.allVideos.map((card) => (
                  <Col sm={12} className="p-1 mb-2">
                    <VideoCard displayData={card} insideCategory={true} />
                  </Col>
                ))}
            </Row>
          </div>
        ))
      ) : (
        <p className="fw-bolder fs-5 text-center text-danger mt-3">
          Nothing to Display!!!
        </p>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-danger text-center">
            Please Fill the following details!!!
          </h6>
          <Form className="border border-secondary rounded p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={insertCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Category;
