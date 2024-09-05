import { React, useState } from "react";
import * as Yup from "yup";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useEffect, useNavigate } from "react-router-dom";

function CreatePost() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     const fetchLatestPost = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:3001/posts/${id}`);
  //         if (response.status === 200) {
  //           setLatestPost(response.data);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching the latest post:", error);
  //       }
  //     };

  //     fetchLatestPost();
  //   }, [latestId]);

  const initalValues = {
    title: "",
    postText: "",
    username: "",
    column: "",
  };

  const fetchPostcard = async (newId) => {
    navigate(`/posts/${newId}`);
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:9001/posts", data).then((response) => {
      const newId = response.data.id;
      fetchPostcard(newId);
    });
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(25).required(),
  });

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initalValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          Create a Note
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="Whats the note title?"
          ></Field>
          <ErrorMessage name="title" component="span"></ErrorMessage>
          <Field
            id="inputCreatePost"
            className="text-area"
            name="postText"
            placeholder="What is the note about?"
          ></Field>
          <ErrorMessage name="postText" component="span"></ErrorMessage>
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="your username?"
          ></Field>
          <ErrorMessage name="username" component="span"></ErrorMessage>
          <Field
            id="inputCreatePost"
            name="column"
            placeholder="Whats the column?"
          ></Field>
          <button type="submit" onSubmit={onSubmit}>
            {" "}
            Create Note{" "}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
