import {useState} from 'react';
let products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];


export default function ParentTable() {
    const [val , setVal] = useState('');
    const [stock , setStock] = useState(false);

    return (
    <>
         <Search 
         filter = {val}
         onHandleFilter = {setVal}
         stock = {stock} 
         onHandleStock = {setStock} 
         
         />
         <table width="100%">
         <thead>
             <tr>
             <th>Name </th>
             <th>Price </th>
             </tr>
         </thead>
         <tbody>
         <ProductTable products = {products} stock = {stock} filter = {val}/>
         </tbody>
         </table>
         
     </>
    )
 
 };
 
export function Search(props) {
    let style = {
        width: "99%",
        height: "30px",
        margin: "0px",
        padding:"0px"
    };
    return (
        <div>
            <br/>
            <input type="text" value = {props.val}  onChange = {(e)=> props.onHandleFilter(e.target.value)} style ={style}/> <br /><br />
            <input type="checkbox" checked = {props.stock} onChange={(e)=>props.onHandleStock(e.target.checked)}/> Only Show product in stock
        </div>
        );
}

 
    
export function ProductTable(props) {
    let lastCategory = "";
    return(
        props.products.map(function(currentValue, index){
            let rows = [];

            if(currentValue.name.toLowerCase().indexOf(props.filter.toLowerCase()) === -1) {
                return '';

            }

            if(!props.stock) {
                if(currentValue.category !== lastCategory){
                    lastCategory = currentValue.category;
                      rows.push( <CategoryRow key = {currentValue.category}  category = {currentValue.category}/>  );
                    }
                    rows.push(<ProductRow key = {index} name={currentValue.name} price = {currentValue.price} stock = {currentValue.stocked} />  );
                    return rows;   
            }

            if (props.stock && currentValue.stocked) {

                if(currentValue.category !== lastCategory){
                    lastCategory = currentValue.category;
                      rows.push( <CategoryRow key = {currentValue.category}  category = {currentValue.category}/>  );
                    }
                    rows.push(<ProductRow key = {index} name={currentValue.name} price = {currentValue.price} stock = {currentValue.stocked} />  );
                    return rows;  
            }
            return '';
         
         })
           
    )
}


function ProductRow(props) {
    let rowStyle = (!props.stock)?'red':'';
    console.log(rowStyle);
   return (
   
   <tr>

    <td style= {{background:rowStyle}}>{props.name}</td><td>{props.price}</td>
    </tr>   
   ) 
}

function CategoryRow(props) {
    return (
        <tr>
         <td colSpan = "2" style={{background:"#d50dc2"}}><center>{props.category}</center></td>
         </tr>   
        ) 
}


