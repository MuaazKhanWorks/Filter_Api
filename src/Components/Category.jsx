import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './Categories'
import ship from './cardimages/ship.jpg'
import message from './cardimages/message.png'
import location from './cardimages/location.png'
// import './Style.css'
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

const Category = () => {
    // const navigats = useNavigate();
    const [search,setSearch] = useState('')  

    const[data,setData] = useState(Categories)
    const filterResult=(catItem)=>{
        const result = Categories.filter((curData)=>{
            return curData.category===catItem;
        })
        setData(result)
    }
    // function Add_Data(){
    //     navigats('/Form');
    // }
    return (
        <>
        
            <div className="container-fluid mx-5" onChange={(e)=>setSearch(e.target.value)}>
                <div className="row mt-5 mx-2">
                    <div className="col-md-10 my-3">
                        <div className="row">
                            <div className="col-12 border border-primary p-3" style={{backgroundColor: "gray"}}>
<button className='btn btn-secondary w-25' onClick={()=>filterResult('completed')} style={{fontSize: "22px"}}>completed</button>
<button className='btn btn-secondary w-25' onClick={()=>filterResult('upcoming')} style={{fontSize: "22px"}}>upcoming</button>
<button className='btn btn-secondary w-25' onClick={()=>setData(Categories)} style={{fontSize: "22px"}}>ALL</button>
<button className='btn btn-secondary w-25' onClick={()=>filterResult('incompleted')} style={{fontSize: "22px"}}>incompleted</button>
<input className='w-50 my-3'style={{marginLeft: "20%"}} type='search' placeholder='Search Card By Name'/>
</div>
</div>
                    </div>
                    {/* <Link to="/Form">Form</Link> */}
                    <div className="col-md-10">
                        <div className="row">
                            {
                                data.filter((item)=>{
                                    return search.toLocaleLowerCase() === ''? item : item.first_name.toLocaleLowerCase().includes(search)
                                })
                                
                                .map((values)=>{
                
                                    return(
                                        <>
                                            <div className="col-md-6 mb-4">
                                
                                <div className="card">
                                    <div className="row mx-1">
                                        <div className="col-4">
      <img className="card-img-top rounded-circle my-3" style={{width: "90px", height: "90px"}} src={values.url} alt="Card image cap"/>
      <h5>{values.first_name}</h5>
      <span style={{fontSize: "12px"}}>{values.email}</span><hr className='my-0'></hr>
      <span style={{fontSize: "13px"}}>{values.phone}</span><hr className='my-0'></hr>
      </div>
      <div className="col-8">
      <img src={ship} style={{width: "300px", height: "200px"}}/>
      </div>
      </div>
      <div className="card-body">
        <div className="row">
            <div className="col-5">
      <h4 style={{fontSize: "17px"}}><img style={{width:"12%", height: "5vh"}} src={message}/> Message Now</h4>
      </div>
      <div className="col-7">
        <h4 style={{fontSize: "16px"}}><img style={{width:"10%", height: "4vh"}} src={location}/> 42* Degree Hot Wather</h4>
        </div>
        </div>
        <div className="row my-3">
            <div className="col-5">
        <span>23/5/2023</span>
        </div>
        <div className="col-3">
        <span>2 Days</span>
        </div>
        <div className="col-3">
        <span>$ 9.99</span>
        </div>
        </div>
        
        <hr className='my-0'></hr>
        
        <div className="row">
            <div className="col-8">
        <h1 style={{fontSize: "17px", color:"#0B36E1"}}>{values.category}<img style={{width:"10%", height: "4vh", marginBottom:"6px"}} src={values.pic} /></h1>
        </div>
        <div className="col-4">
        <a href='#'>See More</a>
        </div>
        </div>
      </div>
    </div>
    
                                </div>
                                        </>
                                    )
                                })
                            }
                            
                        </div>
                 </div>
                </div>
            </div>
            
        </>
    )
}

export default Category
