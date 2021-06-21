import React  from "react"
const Form = ({newName,newPersonSubmit,newNumber,handleChangeName,handleChangeNumber}) => {
    return (

        <form>
            <div className="input-container">
                <div className="input">
                    <label for="name">name</label> <input id="name" type="input/text" value={newName} onChange={handleChangeName} />
                </div>
                <div className="input">
                    <label for="number">number</label> <input id="number" type="input/text" value={newNumber} onChange={handleChangeNumber} />
                </div>
            </div>

            <div>
                <button type="submit" onClick={newPersonSubmit}> ADD </button>
            </div>
        </form>
    )
}

export default Form