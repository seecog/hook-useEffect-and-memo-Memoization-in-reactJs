import React,{memo} from 'react';

const Child = memo((props) =>{
console.log('Inside the child component');
return (
    <div>
        The count is {props.val}
    </div>

)

})
export default Child;