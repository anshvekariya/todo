// import Form from 'react-bootstrap/Form';

// import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
// import { useState } from 'react';


// function Todo() {

//     let [input, setinput] = useState('');
//     let [data, setdata] = useState([]);

//     const adddata = () => {
//         setdata([...data, input]);

//     }

//     return (
//         <>
//             <Container>
//                 <hr></hr>
//                 <Row>

//                     <input type="text" onChange={(e) => setinput(e.target.value)} />

//                     <Button variant="dark" onClick={adddata} >	ADD		</Button>

//                 </Row>
//                 <ul>
//                    {
//                     data.map((ele)=>{
//                         return(
//                             <li>{ele}</li>
//                         )
//                     })
//                    }

//                 </ul>
//                 {input}


//             </Container>

//         </>
//     )

// }
// export default Todo;



// import './App.css';
// import { useState } from 'react';


// function App() {
//     let [task, settask] = useState('');
//     let [arr1, setarr1] = useState([]);
//     let [updt, setupdt] = useState(false);
//     let [id, setid] = useState('');
//     let [search, setsearch] = useState('');
//     let [temp, settemp] = useState([]);
//     let [com, setcom] = useState([]);
//     let [uncom, setuncom] = useState([]);


//     const adddata = () => {

//         if (updt) {
//             var temparr = [...arr1];
//             temparr[id] = task;
//             setarr1(temparr)
//             settemp(temparr)
//             setupdt(false)
//             settask("")
//         } else {
//             setarr1([...arr1, task])
//             settemp([...arr1, task])

//             settask('')


//         }

//     }
//     const deletedata = (ind) => {
//         var data = arr1.filter((ele, ind1) => {
//             return ind1 != ind;
//         })
//         setarr1(data);
//         settemp(data);
//     }
//     const editdata = (ind) => {
//         settask(arr1[ind]);
//         setupdt(true)
//         setid(ind)
//         // alert(tas)
//     }
//     const check = (ind, ele) => {

//         if (document.getElementById('check' + ind + ele).checked === true) {
//             document.getElementById('txch' + ind + ele).style.textDecoration = 'line-through';
//             setcom([...com, ele])
//         } else {
//             document.getElementById('txch' + ind + ele).style.textDecoration = 'none';

//         }
//     }

//     const searchdata = () => {
//         var data = temp.filter((ele, ind1) => {
//             return ele == search;
//         })
//         setarr1(data);
//     }
//     const alldata = () => {
//         setarr1(temp)
//     }
//     const comdata = () => {

//         setarr1(com)
//         alert(com)



//     }

//     const uncomdata = () => {


//         uncom = arr1.filter(item => !com.includes(item));
//         setuncom(uncom)
//         setarr1(uncom)
//         // setarr1(uncom)

//     }
//     return (

//         <>
//             <input type='text' value={task} onChange={(e) => settask(e.target.value)}></input><br></br>
//             <input type='button' value='add' onClick={adddata}></input><br></br>
//             <input type='text' onChange={(e) => setsearch(e.target.value)}></input><input type='button' value='search' onClick={searchdata}></input><br></br>
//             <input type='button' value='complete' onClick={comdata} ></input>

//             <input type='button' value='uncomplete' onClick={uncomdata} ></input>
//             <input type='button' value='all' onClick={alldata} ></input>

//             <table border={1}>
//                 {
//                     arr1.map((ele, ind) => {
//                         return (
//                             <tr>
//                                 <td><input type='checkbox' id={'check' + ind + ele} onChange={() => check(ind, ele)}></input></td>
//                                 <td ><input type='text' value={ele} id={'txch' + ind + ele}></input></td>
//                                 <td>
//                                     <button onClick={() => deletedata(ind)}>Delete</button>
//                                 </td>
//                                 <td>
//                                     <button onClick={() => editdata(ind)}>edit</button>
//                                 </td>
//                             </tr>
//                         )
//                     })
//                 }
//             </table>
//         </>



//     );
// }

// export default App;


import './App.css';
import { useState } from 'react';

function App() {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [final, setFinal] = useState([]);
  const [searchInfo,setSearchinfo] = useState([])

  const add = () => {
    if (edit !== null) {
      const updated = [...todo];
      setSearchinfo([...todo])

      updated[edit] = { task: task, checked: false };
      setTodo(updated);
      setFinal(updated);
      setEdit(null);
      setTask("");
    }
    else {
      setTodo([...todo, {  task: task, checked: false }]);
      setSearchinfo([...todo])
      setFinal([...todo, {  task: task, checked: false }]);
      setTask("");
    }
  }

  const del = (index) => {
    console.log("index = " + index)
    let d = todo.filter((val, id) => {
      console.log("id =", id)
      return id !== index;
    })
    setTodo(d);
    setFinal(d);
  }

  const update = (index) => {
    setEdit(index);
    setTask(todo[index].task);
  };

  const handlecheck = (index) => {
    const check = [...todo];
    check[index].checked = !check[index].checked;
    setTodo(check);
  }

  const searchhanlder = () => {
   
    let info = final.filter((val, id) => {
      return val.task === search;
    })
    console.log('info',info)
    setTodo(info);
  }

  const completed = () => {
    
//         setarr1(com)
//         alert(com)
    let com = final.filter((val, id) => {
      return val.checked === true ? val : false
    });

    setTodo(com);

  }

  const uncompleted = () => {

    
//         uncom = arr1.filter(item => !com.includes(item));
//         setuncom(uncom)
//         setarr1(uncom)
//         // setarr1(uncom)

    let uncom = final.filter((val, id) => {
      return val.checked === false ? val : false
    });
    setTodo(uncom);


  }

  const all = () => {
    var data = [...final];
    setTodo(data);
  }

  return (
    <div>
      <div>
     
        <div className='form'>
          <input type="text" className='input' value={task} placeholder='Enter Task' onChange={(e) => { setTask(e.target.value) }} />
          <input type='button' className='btn' value={"Add Task"} onClick={() => { add() }} /><br />
          <input type='text' className='input' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
          <input type='button' className='btn' value={"Search"} onClick={() => { searchhanlder() }} /><br />
          <input type='button' className='btn' value={"Completed"} onClick={() => { completed() }} style={{ marginRight: "10px" }} />
          <input type='button' className='btn' value={"UnCompleted"} onClick={() => { uncompleted() }} style={{ marginRight: "10px" }} />
          <input type='button' className='btn' value={"All"} onClick={() => { all() }} style={{ marginRight: "10px" }} />

        </div>

        <table className='' style={{ marginTop: "20px" }} border={1}>
          {
            todo.map((ele, index) => {
              return (
                <tr className='list' key={index}>
                  
                    <td><input type='checkbox' checked={ele.checked} onChange={() => handlecheck(index)} /></td>
                    <td><span style={{ textDecoration: ele.checked ? "line-through" : "" }}>{ele.task}</span></td>
                    <td><input type='button' value={"Delet"} className='del' onClick={() => { del(index) }} /></td>
                    <td><input type='button' value={"Edit"} onClick={() => { update(index) }} /></td>
                  
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;