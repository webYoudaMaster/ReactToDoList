import React from 'react';
    const styles = {
        ItemContent: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    }


const Item = () =>{
    return(
     <div style={styles.ItemContent}>
        <p>Выгул собаки</p>
        

        <button>&times;</button>


    </div>
    )
}





export default Item;
