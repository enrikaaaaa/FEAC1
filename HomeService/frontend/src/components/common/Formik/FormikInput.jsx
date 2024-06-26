import { ErrorMessage, Field } from "formik";

import Input from "@/components/common/Input/Input";
import PropTypes from "prop-types";
import styles from "@/components/common/Input/Input.module.scss";

const FormikField = ({ name, ...props }) => {
  return (
    <div>
      <Field name={name} as={Input} {...props} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormikField;
