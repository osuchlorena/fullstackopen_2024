export default function PersonForm({ newName, handleNameChange, newPhone, handlePhoneChange, addContact}) {
    return (
        <>
            <form onSubmit={addContact}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    name: <input value={newName} onChange={handleNameChange} style={{ width: "100px" }} />
                    phone: <input value={newPhone} onChange={handlePhoneChange} style={{ width: "100px" }} />
                </div>
                <div>
                    <button type="submit" style={{ marginTop: "10px" }}>add</button>
                </div>
            </form>
        </>
    )

}