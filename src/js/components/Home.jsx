import { useState } from "react"


export const Home = () => {
	const [newContact, setNewContact] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const [contacts, setContacts] = useState([]);
	const [error, setError] = useState(false)

	const handleChange = (event) => {
		setNewContact({
			...newContact,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!newContact.name || !newContact.email || !newContact.phone ) {
			setError((prev) => !prev)
		return
	}

		setContacts([...contacts, newContact]);

		
		setNewContact({
			name: "",
			email: "",
			phone: "",
		});

	
	
	};


// revisar para eliminar -->

	// const deleteContact = (id) => {
		
	// }
	return (
		<div className="container mt-5 ">
			<div className="row">
				<div className="col-12 col-md-6 border border-dark">
					<h1 className="text-center mb-4">Lista de contactos</h1>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="">Nombre Completo:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Lionel Messi"
								name="name"
								value={newContact.name} 
								onChange={handleChange}
							/>
						</div>

						<div className="form-group mb-3">
							<label htmlFor="">Correo:</label>
							<input
								type="text"
								className="form-control"
								placeholder="email@email.com"
								name="email"
								value={newContact.email} 
								onChange={handleChange}
							/>

							<div>
								<label htmlFor="">Teléfono:</label>
								<input
									type="number"
									className="form-control"
									placeholder="+569 123 456 78"
									name="phone"
									value={newContact.phone}
									onChange={handleChange}
								/>
							</div>

							<div>
								<button className="btn btn-primary w-100 my-3" type="submit">
									Guardar
								</button>
							</div>
						</div>
					</form>

					
				</div>
				{error ?
					<div className="col-12 col-md-7 mt-3 container">

					<p className="alert alert-danger">
						Todos los campos son obligatorios
					</p>
				</div> :null
}

				<div className="col-12 col-md-6 mt-5 border border-danger">
						{contacts.map((item, index) => (
							<div key={index} className="d-flex justify-content-between">
								<div>avatar</div>
								<div>
									<p>Nombre: {item.name}</p>
									<p>Correo: {item.email}</p>
									<p>Teléfono: {item.phone}</p>
								</div>
								<div className="btn btn-danger"
								onClick={()=>deleteContact(index)}>Delete</div>
							</div>
						))}
					</div>
			</div>
		</div>
	);
};
