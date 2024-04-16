import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";

export default function SearchBar({ onSearch }) {
  const onSubmitBar = async (values, actions) => {
    if (!values.query.trim()) {
      toast.error("Sorry, input is empty. Please try again!");
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <div>
      <Toaster />
      <Formik initialValues={{ query: "" }} onSubmit={onSubmitBar}>
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}
