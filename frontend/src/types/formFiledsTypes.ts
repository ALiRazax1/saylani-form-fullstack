 enum GenderEnum {
  female = "female",
  male = "male",
}
enum CountryEnum{
  Pakistan = "Pakistan",
  Turkey = "Turkey"
}

enum PakCityEnum {
  Karachi = "Karachi",
  Faisalabad = "Faisalabad",
  Rawalpindi = "Rawalpindi",
  Gujranwala = "Gujranwala"
}
 enum TurkCityEnum{
  Istanbul = "Istanbul"
 }
  enum CourseEnum {
    WebDevelopment ="Web Development",
    GraphicDesigning = "Grphic Designing",
    Python = "Python"
  }
 enum ProficiencyEnum{
  None = "None",
  Biginner = "Biginner",
  Intermediate = "Intermediate",
  Advanced = "Advacned"
 }

 enum QualificationEnum{
  Matric="martic",
  Intermediate = "Intermediate",
  Undergraduate = "Undergraduate",
  Graduate = "Graduate",
  Maters = "Masters",
  PHD = "PHD",
  Other = "Phd"
 }
 enum HaveLaptopEnum{
  Yes = "Yes",
  No = "No"
 }
 interface IFormInput {
  country:CountryEnum
  city:PakCityEnum | TurkCityEnum
  course:CourseEnum
  proficiency:ProficiencyEnum
  fullName: string
  fatherName:string
  email:string
  phone:string
  cnic:string
  fatherCnic:string| null
  dob:string
  gender: GenderEnum
  address:string
  qualification:QualificationEnum
  haveLaptop:HaveLaptopEnum
  image:any
}
export{
  CountryEnum,PakCityEnum,TurkCityEnum,CourseEnum,ProficiencyEnum,GenderEnum,QualificationEnum,HaveLaptopEnum
}

export type{
  IFormInput
}
