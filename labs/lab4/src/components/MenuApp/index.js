import Menu from '../Menu'
export default function MenuApp({data}){
let menus = data.map(menuData => <Menu key={index} {...menuData}/>)
return <>
    {menus}
</>
}