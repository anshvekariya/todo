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



import './App.css';
import { useState } from 'react';


function App() {
    let [task, settask] = useState('');
    let [arr1, setarr1] = useState([]);
    let [updt, setupdt] = useState(false);
    let [id, setid] = useState('');
    let [search, setsearch] = useState('');
    let [temp, settemp] = useState([]);
    let [com, setcom] = useState([]);
    let [uncom, setuncom] = useState([]);


    const adddata = () => {

        if (updt) {
            var temparr = [...arr1];
            temparr[id] = task;
            setarr1(temparr)
            settemp(temparr)
            setupdt(false)
            settask("")
        } else {
            setarr1([...arr1, task])
            settemp([...arr1, task])

            settask('')


        }

    }
    const deletedata = (ind) => {
        var data = arr1.filter((ele, ind1) => {
            return ind1 != ind;
        })
        setarr1(data);
        settemp(data);
    }
    const editdata = (ind) => {
        settask(arr1[ind]);
        setupdt(true)
        setid(ind)
        // alert(tas)
    }
    const check = (ind, ele) => {

        if (document.getElementById('check' + ind + ele).checked === true) {
            document.getElementById('txch' + ind + ele).style.textDecoration = 'line-through';
            setcom([...com, ele])
        } else {
            document.getElementById('txch' + ind + ele).style.textDecoration = 'none';

        }
    }

    const searchdata = () => {
        var data = temp.filter((ele, ind1) => {
            return ele == search;
        })
        setarr1(data);
    }
    const alldata = () => {
        setarr1(temp)
    }
    const comdata = () => {

        setarr1(com)
        alert(com)



    }

    const uncomdata = () => {


        uncom = arr1.filter(item => !com.includes(item));
        setuncom(uncom)
        setarr1(uncom)
        // setarr1(uncom)

    }
    return (

        <>
            <input type='text' value={task} onChange={(e) => settask(e.target.value)}></input><br></br>
            <input type='button' value='add' onClick={adddata}></input><br></br>
            <input type='text' onChange={(e) => setsearch(e.target.value)}></input><input type='button' value='search' onClick={searchdata}></input><br></br>
            <input type='button' value='complete' onClick={comdata} ></input>

            <input type='button' value='uncomplete' onClick={uncomdata} ></input>
            <input type='button' value='all' onClick={alldata} ></input>

            <table border={1}>
                {
                    arr1.map((ele, ind) => {
                        return (
                            <tr>
                                <td><input type='checkbox' id={'check' + ind + ele} onChange={() => check(ind, ele)}></input></td>
                                <td ><input type='text' value={ele} id={'txch' + ind + ele}></input></td>
                                <td>
                                    <button onClick={() => deletedata(ind)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => editdata(ind)}>edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </>



    );
}

export default App;
