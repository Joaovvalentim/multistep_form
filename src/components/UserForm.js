
const UserForm = ({ data, updateFieldHandler }) => {
    return (
        <>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input type="text"
                    name="text"
                    id="name"
                    placeholder="Nome"
                    required 
                    value={data.name || ""}
                    onChange={(e)=> updateFieldHandler("name", e.target.value)}
                    />
            </div>
            <div className="form-control">
                <label htmlFor="name">Email:</label>
                <input type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required 
                    value={data.email || ""}
                    onChange={(e)=> updateFieldHandler("email", e.target.value)}
                    />
            </div>
        </>
    )
}

export default UserForm;