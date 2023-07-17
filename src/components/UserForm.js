
const UserForm = () => {
    return (
        <>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input type="text" name="text" id="name" placeholder="Nome" required />
            </div>
            <div className="form-control">
                <label htmlFor="name">Email:</label>
                <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
        </>
    )
}

export default UserForm;