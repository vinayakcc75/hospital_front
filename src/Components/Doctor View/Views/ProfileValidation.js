import * as Yup from "yup";
import { Formik, Field } from "formik";
import React from "react";
import "./ProfileValidation.css";

class ProfileValidation extends React.Component {
 
  render() {
    {
      console.log('HI',this.props.values);
    }
    return (
      <div className="valid-profile-wraper">
        <div className="valid-profile">
          <div className="valid-profile-centered">
            <h2>Edit Details</h2>
          </div>
          <Formik
            initialValues={this.props.values}
            onSubmit={(values, { setSubmitting }, cb = this.props.toggle) => {
              setSubmitting(true);
              console.log("Saved ", values);
              fetch(`/api/profile/save_edit`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email:values.email,
                  age:values.age,
                  gender:values.gender,
                  phone:values.phone,
                  lastname:values.lname,
                  firstname:values.fname,
                  address:values.address,
                  specialization:values.specialization,
                  experience:values.experience,
                  qualification:values.qualification
                }),
              })
                .then((response) => response.json())
                .then( (ret) => {
                  if(ret.status===true){
                    alert('success');
                  }
                });
              cb(values);
              setSubmitting(false);
            }}
            validationSchema={Yup.object().shape({
              fname: Yup.string().required("Required"),
              lname: Yup.string().required("Required"),
              gender: Yup.string().required("Required"),
              age: Yup.number().required("Required"),
              experience: Yup.number().required("Required"),
              address: Yup.string().required("Required"),
              qualification: Yup.string().required("Required"),
              specialization: Yup.string().required("Required"),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleSubmit,
              } = props;
              return (
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div>
                    <div className="div-name">
                      <label htmlFor="fname">First Name</label>
                      <br />
                      <br />
                      <Field
                        type="text"
                        name="fname"
                        value={values.fname}
                        placeholder="Enter Your First Name"
                        contentEditable="true"
                        className={errors.fname && touched.fname && "error"}
                      />
                      <br />
                      <br />
                      {errors.fname && touched.fname && (
                        <div className="input-feedback">{errors.fname}</div>
                      )}
                    </div>
                    <div className="div-name div-name-inner">
                      <label htmlFor="lname">Last Name</label>
                      <br />
                      <br />
                      <Field
                        type="text"
                        name="lname"
                        value={values.lname}
                        placeholder="Enter Your Last Name"
                        contentEditable="true"
                        className={errors.lname && touched.lname && "error"}
                      />
                      <br />
                      <br />
                      {errors.lname && touched.lname && (
                        <div className="input-feedback">{errors.lname}</div>
                      )}
                    </div>
                  </div>
                  <label htmlFor="male">Male</label>

                  <Field
                    type="radio"
                    name="gender"
                    value="M"
                    className={
                      "input-gender" ||
                      (errors.gender && touched.gender && "error")
                    }
                    defaultChecked={values.gender === "M"}
                  />
                  <label htmlFor="female">Female</label>
                  <Field
                    type="radio"
                    name="gender"
                    value="F"
                    className={
                      "input-gender" ||
                      (errors.gender && touched.gender && "error")
                    }
                    defaultChecked={values.gender === "F"}
                  />
                  <br />
                  <br />
                  <label htmlFor="age">Age</label>
                  <br />
                  <br />
                  <Field
                    type="number"
                    name="age"
                    value={values.age}
                    placeholder="Enter Your Age"
                    className={
                      "input-style" || (errors.age && touched.age && "error")
                    }
                  />
                  <br />
                  <br />
                  {errors.age && touched.age && (
                    <div className="input-feedback">{errors.age}</div>
                  )}
                  <label htmlFor="experience">Experience</label>
                  <br />
                  <br />
                  <Field
                    type="number"
                    name="experience"
                    value={values.experience}
                    placeholder="Enter Your experience"
                    className={
                      "input-style" ||
                      (errors.experience && touched.experience && "error")
                    }
                  />
                  <br />
                  <br />
                  {errors.experience && touched.experience && (
                    <div className="input-feedback">{errors.experience}</div>
                  )}
                  <label htmlFor="address">Address</label>
                  <br />
                  <br />
                  <Field
                    name="address"
                    contentEditable="true"
                    placeholder="Enter Your Address"
                    value={values.address}
                    className={
                      "input-style" ||
                      (errors.address && touched.address && "error")
                    }
                  />
                  <br />
                  <br />
                  {errors.address && touched.address && (
                    <div className="input-feedback">{errors.address}</div>
                  )}
                  <label htmlFor="qualification">Qualification</label>
                  <br />
                  <br />
                  <Field
                    name="qualification"
                    placeholder="Enter Your Qualification"
                    value={values.qualification}
                    className={
                      "input-style" ||
                      (errors.qualification && touched.qualification && "error")
                    }
                  />
                  <br />
                  <br />
                  {errors.qualification && touched.qualification && (
                    <div className="input-feedback">{errors.qualification}</div>
                  )}
                  <label htmlFor="specialization">Specialization</label>
                  <br />
                  <br />
                  <Field
                    name="specialization"
                    placeholder="Enter Your Specialization"
                    value={values.specialization}
                    className={
                      "input-style" ||
                      (errors.specialization &&
                        touched.specialization &&
                        "error")
                    }
                  />
                  <br />
                  <br />
                  {errors.specialization && touched.specialization && (
                    <div className="input-feedback">
                      {errors.specialization}
                    </div>
                  )}
                  <div className="valid-profile-centered">
                    <button type="submit" disabled={isSubmitting}>
                      Save
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

export default ProfileValidation;