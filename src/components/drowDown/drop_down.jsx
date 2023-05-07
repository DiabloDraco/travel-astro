import './drop_down.css'

function DropDown(props) {
    return (
        <>
            <div className="dropDown">
                <label htmlFor='dropDown' className="dropDown__image-wrapper">
                    <svg className='dropDown__svg' width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 15L17.6603 0H0.339746L9 15Z" />
                    </svg>
                </label>
                <select id='dropDown' className="dropDown__select">
                    {
                        props.data?.map(item => (
                            <option className='dropDown__option' value={`${item.value}`}>{item.text}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default DropDown