import { useEffect, useState } from "react"

const App=()=>{

  const [data,getData]=useState([])
  const url="https://jsonplaceholder.typicode.com/todos"

    // const fetchdata=()=>{
    //   try{
    //     const response= fetch(url)
    //     const json=response.json()
    //     console.log(json);
    //     getData(json)
    //   }catch(error){
    //     console.log(error);
    //   }
    // }

    const fetchdata = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
          (result) => {
            getData(result)
            console.log(result);
          }
        )
    }

    useEffect(()=>{
      fetchdata()
    },[])

  return(
    <>
      <div className="container-fluid">
          <table className="table">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>User Id</th>
              </tr>
              {
                data.map((item,i)=>(
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.userId}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      </div>
    </>
  )
}

export default App

