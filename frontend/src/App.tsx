import Tab from "./components/tab"
import "./App.css"
import IDCard from "./components/idcard"
export function App(){
  return(
    <>
      <div  className="back-img">

      </div>
      <div style={{textAlign:"center"}}><img style={{width:"250px"}} src="/syalani-logo.png" alt="" />
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
         
          </div>
      <div><h1>Registration Form - SMIT</h1></div>
      </div>
      <div>    <Tab />
</div>
    </>
  )
}
export default App

