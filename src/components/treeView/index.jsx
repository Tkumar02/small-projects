import MenuList from "./menu-list";

export default function Treeview({menus=[]}) {

    return(
        <>
            <div className="tree-view-container">
                <MenuList list={menus}/>
            </div>
        </>
    )

}