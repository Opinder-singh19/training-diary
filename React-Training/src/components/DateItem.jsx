import'./Date.css';

function DateItem(props){          {/* props is a dynamically method */}
    const date=props.day;
    const month=props.month || "January"; // Default month if not provided
    const year=props.year;
   return( <div className='date-item'>                
    <span>{date}</span>
    <span> {month}</span>
    <span> {year}</span>.      {/* hard coding hata ke dynamically change krne ka trika bta diya not correct
    but for now understanding  */} 
   </div> 

   );
}
export default DateItem;