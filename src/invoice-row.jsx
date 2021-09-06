import { useState } from "react";
import CustomButton from './custom-button';

function InvoiceRow({addRow, keyValue}) {

    const [productButtonContent, setProductButtonContent] = useState("no product");
    const [penButtonContent] = useState("pen button");
    const [paperButtonContent] = useState("paper button");

    const [isProductHidden] = useState(false);
    const [isPenHidden,setIsPenHidden] = useState(true);
    const [isPaperHidden,setIsPaperHidden] = useState(true);

    const [isRowCreated,setIsRowCreated] = useState(false);

    let handleProductButtonClick = ()  => {
        setIsPenHidden(false);
        setIsPaperHidden(false);
    }

    let handlePenandPaperButtonClick = (event)  => {
        
        if(event.target.innerHTML === penButtonContent) {
            setProductButtonContent(penButtonContent);
        } else {
            setProductButtonContent(paperButtonContent);
        }
        
        setIsPenHidden(true);
        setIsPaperHidden(true);
        if(!isRowCreated) {
            addRow(keyValue+1);
            setIsRowCreated(true);
        }
        // console.log(event.target.innerHTML)
    }

    return (
        <div>
            <CustomButton 
                content={productButtonContent}
                isHidden={isProductHidden}
                handleClick={handleProductButtonClick}
            />
            <CustomButton 
                content={penButtonContent}
                isHidden={isPenHidden}
                handleClick={handlePenandPaperButtonClick}
            />
            <CustomButton 
                content={paperButtonContent}
                isHidden={isPaperHidden}
                handleClick={handlePenandPaperButtonClick}
            />    
        </div>
    );
}

export default InvoiceRow;