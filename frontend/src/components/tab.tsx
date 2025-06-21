
import { Button, Tabs, Row, Col, Input, Select, Upload} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as InputTypes from "../types/formFiledsTypes";
import type { IFormInput } from '../types/formFiledsTypes';
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from 'react-hook-form';
import IDCard from './idcard';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { useState } from 'react';
const schema = yup.object({
country: yup.mixed<InputTypes.CountryEnum >().oneOf(Object.values(InputTypes.CountryEnum)).required("asd"),
  city:  yup.mixed<InputTypes.PakCityEnum | InputTypes.TurkCityEnum>().oneOf(Object.values(InputTypes.PakCityEnum || InputTypes.TurkCityEnum )).required(),
  course: yup.mixed<InputTypes.CourseEnum>().oneOf(Object.values(InputTypes.CourseEnum)).required(),
  proficiency: yup.mixed<InputTypes.ProficiencyEnum>().oneOf(Object.values(InputTypes.ProficiencyEnum)).required(),
  fullName: yup.string().required("Full name is required"),
  fatherName: yup.string().required("Father name is required"),
  email: yup.string().email().required("Email is required"),
  phone: yup.string().required("Phone is required"),
  cnic: yup.string().required("CNIC is required"),
  fatherCnic: yup.string().nullable().notRequired().default(null),
  dob: yup.string().required("Date of birth is required"),
  gender: yup.mixed<InputTypes.GenderEnum>().oneOf(Object.values(InputTypes.GenderEnum)).required(),
  address: yup.string().required("Address is required"),
  qualification: yup.mixed<InputTypes.QualificationEnum>().oneOf(Object.values(InputTypes.QualificationEnum)).required(),
  haveLaptop: yup.mixed<InputTypes.HaveLaptopEnum>().oneOf(Object.values(InputTypes.HaveLaptopEnum)).required(),
  image:yup.mixed().required()
}).required();

const onChange = () => {
};

const Tab = () => { 
const [searchInput,setSearchInput] = useState("")
const [userFound,setUserFound] = useState(false)
const [img,setImg] = useState('')
const [name,setName] = useState('')
const [fatherName,setFatherName] = useState('')
const [course,setCourse] = useState('')
const [cnic,setCnic] = useState('')

  // hookform
   const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    // defaultValues:{
      
    // }
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<IFormInput> = async (data:IFormInput) =>{
  
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/create`,data,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
      
      
    } catch (error ) {
      if(error instanceof Error){
        console.log(error.message);
        
      }
      
      
    }
    
  } 

 async function findUser(){
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api`);
    const {data} = response
    const requestedUser =  data.Users.find((e:any)=>  searchInput == e.cnic)

    if(requestedUser){
      setCnic(requestedUser.cnic)
      setName(requestedUser.fullName)
      setFatherName(requestedUser.fatherName)
      setCourse(requestedUser.course)
      setImg(requestedUser.image)
      setUserFound(true)
    }
  } catch (error) {
    console.log(error);
    
  }
    
    
  }
 
  return(
  <div style={{padding:"0 10%"}} >
  <form action="" onSubmit={handleSubmit(onSubmit)}>
  <Tabs
    
    className="primaryColor"
    centered={true}
    tabBarGutter={3}
    onChange={onChange}
    type="card"
    items={Array.from({ length: 3 }).map((_, i) => {
      const id = String(i + 1);
      return {
        label:
          id == "1"
            ? "Registration"
            : id == "2"
            ? "Download ID Card"
            : "Results",
        key: id,
        children:
          id == "1" ?
           (
            <Row gutter={[16, 16]}>
              {/* Country */}
              <Col xs={24} md={12}>
                <label htmlFor="country">Select country</label>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      className="select"
                      {...field}
                      placeholder="Select Country"
                      options={[
                        {
                          value: InputTypes.CountryEnum.Pakistan,
                          label: "Pakistan",
                        },
                        {
                          value: InputTypes.CountryEnum.Turkey,
                          label: "Turkey",
                        },
                      ]}
                    />
                    
                  )}
                />
              </Col>

              {/* City */}
              <Col xs={24} md={12}>
                <label htmlFor="city">Select city</label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Select
                     
                      className="select"
                      {...field}
                      placeholder="Select City"
                      options={[
                        { value: InputTypes.PakCityEnum.Karachi, label: "Karachi" },
                        // { value: "lahore", label: "Lahore" },
                      ]}
                    />
                  )}
                />
                <p>{errors.city?.message}</p>
              </Col>

              {/* Course */}
              <Col xs={24} md={12}>
                <label htmlFor="course">Select course</label>
                <Controller
                  name="course"
                  control={control}
                  render={({ field }) => (
                    <Select
                      className="select"
                      {...field}
                      placeholder="Select Course"
                      options={[
                        {
                          value: InputTypes.CourseEnum.GraphicDesigning,
                          label: "Graphic designing",
                        },
                        {
                          value: InputTypes.CourseEnum.Python,
                          label: "Python",
                        },
                        {
                          value: InputTypes.CourseEnum.WebDevelopment,
                          label: "Web development",
                        },
                      ]}
                    />
                  )}
                />
              </Col>

              {/* Proficiency */}
              <Col xs={24} md={12}>
                <label htmlFor="proficiency">Select proficiency</label>
                <Controller
                  name="proficiency"
                  control={control}
                  render={({ field }) => (
                    <Select
                      className="select"
                      {...field}
                      placeholder="Computer proficiency"
                      options={[
                        { value: InputTypes.ProficiencyEnum.None, label: "None" },
                        {
                          value: InputTypes.ProficiencyEnum.Biginner,
                          label: "Beginner",
                        },
                        {
                          value: InputTypes.ProficiencyEnum.Intermediate,
                          label: "Intermediate",
                        },
                        {
                          value: InputTypes.ProficiencyEnum.Advanced,
                          label: "Advanced",
                        },
                      ]}
                    />
                  )}
                />
              </Col>

              {/* Full Name */}
              <Col xs={24} md={12}>
                <label htmlFor="fullName">Full Name</label>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Full Name" />
                  )}
                />
                {errors.fullName && (
                  <p style={{ color: "red" }}>{errors.fullName.message}</p>
                )}
              </Col>

              {/* Father Name */}
              <Col xs={24} md={12}>
                <label htmlFor="fatherName">Father Name</label>
                <Controller
                  name="fatherName"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Father Name" />
                  )}
                />
              </Col>

              {/* Email */}
              <Col xs={24} md={12}>
                <label htmlFor="email">Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Email" />
                  )}
                />
              </Col>

              {/* Phone */}
              <Col xs={24} md={12}>
                <label htmlFor="phone">Phone</label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Phone" type="number" />
                  )}
                />
              </Col>

              {/* CNIC */}
              <Col xs={24} md={12}>
                <label htmlFor="cnic">CNIC</label>
                <Controller
                  name="cnic"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="CNIC" type="number" />
                  )}
                />
              </Col>

              {/* Father CNIC */}
              <Col xs={24} md={12}>
                <label htmlFor="fatherCnic">Father CNIC (optional)</label>
                <Controller
                  name="fatherCnic"
                  control={control}
                  render={({ field }) => (
                    // @ts-ignore

                    <Input {...field} placeholder="Father CNIC" type="number" />
                  )}
                />
              </Col>

              {/* DOB */}
              <Col xs={24} md={12}>
                <label htmlFor="dob">Date of Birth</label>
                <Controller
                  name="dob"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} type="date" />
                  )}
                />
              </Col>

              {/* Gender */}
              <Col xs={24} md={12}>
                <label htmlFor="gender">Gender</label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      className="select"
                      {...field}
                      placeholder="Gender"
                      options={[
                        { value: InputTypes.GenderEnum.male, label: "Male" },
                        { value: InputTypes.GenderEnum.female, label: "Female" },
                      ]}
                    />
                  )}
                />
              </Col>

              {/* Address */}
              <Col xs={24}>
                <label htmlFor="address">Address</label>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Address" />
                  )}
                />
              </Col>

              {/* Qualification */}
              <Col xs={24}>
                <label htmlFor="qualification">Last Qualification</label>
                <Controller
                  name="qualification"
                  control={control}
                  render={({ field }) => (
                    <Select
                      className="select"
                      {...field}
                      placeholder="Qualification"
                      options={[
                        { value: InputTypes.QualificationEnum.Matric, label: "Matric" },
                        {
                          value: InputTypes.QualificationEnum.Intermediate,
                          label: "Intermediate",
                        },
                        {
                          value: InputTypes.QualificationEnum.Undergraduate,
                          label: "Undergraduate",
                        },
                        { value: InputTypes.QualificationEnum.Graduate, label: "Graduate" },
                        { value: InputTypes.QualificationEnum.Maters, label: "Masters" },
                        { value: InputTypes.QualificationEnum.PHD, label: "PHD" },
                        { value: InputTypes.QualificationEnum.Other, label: "Other" },
                      ]}
                    />
                  )}
                />
              </Col>

              {/* Laptop */}
              <Col xs={24}>
                <label htmlFor="haveLaptop">Do you have a laptop?</label>
                <Controller
                  name="haveLaptop"
                  control={control}
                  render={({ field }) => (
                    <Select
                      className="select"
                      {...field}
                      placeholder="Laptop"
                      options={[
                        { value: InputTypes.HaveLaptopEnum.Yes, label: "Yes" },
                        { value: InputTypes.HaveLaptopEnum.No, label: "No" },
                      ]}
                    />
                  )}
                />
              </Col>

              {/* Image Upload (Not controlled by react-hook-form) */}
              <Col xs={24}>
                <label htmlFor='image'>Upload Picture</label>
                  <Controller
                    name='image'
                    control={control}
                    render={({field:{onChange}})=>(
                //     <Upload
                //   name="img"
                //   listType="picture"
                //   className="avatar-uploader"
                //   showUploadList={false}
                //   action="https://mockapi.io/api/upload"
                // >
                //   <button style={{ border: 0, background: "none", }} type="button">
                //     <PlusOutlined  />
                //     <div style={{ marginTop: 8 }}>Upload</div>
                //   </button>
                // </Upload>
                      


                    <Upload
                    name='image'
      listType="picture-card"
      showUploadList={false}
      beforeUpload={(file) => {
        onChange(file); 
        return false; 
      }}
    >
      <button type="button" style={{ border: 0, background: "none" }}>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </button>
    </Upload>
                    )}

                  />
                      
          
              </Col>
                
              {/* Submit Button */}
              <Col span={24} style={{ textAlign: "center" }}>
                <Button style={{ width: "100%", height: "45px" }} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
              
            </Row>
          ) : id == "2" ? (
            <Row>
              <Col span={24} style={{ textAlign: "center" }}>
              <label htmlFor="getUsers"></label>
              <Input
                placeholder='42101xxxxxxxxxxxxxxx'
                onChange={(e)=>{setSearchInput(e.target.value)}}
              />
              <Button
              onClick={findUser}
              type='primary'
              style={{width:"100%",height:"45px"}}
              >
                Check
              </Button>
              </Col >
                
               <Col  >
              {userFound&& <div>
                <IDCard name={name} faterName={fatherName} cnic={cnic} img={img} course={course}/>
                <div style={{margin:"0 auto",width:"100%"}}>
                   <Button type='primary'>Download</Button>
                </div>
               
              </div> }
              </Col> 
            </Row>
          ) : (
            <h1 style={{textAlign:"center"}}>Nothing to See here</h1>
          ),
      };
    })}
  />
</form>
   





  </div>
);}
export default Tab






