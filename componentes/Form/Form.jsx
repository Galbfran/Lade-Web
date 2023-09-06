import styles from "./Form.module.css"

const Form = () => {
    return(
        <form className=" bg-primary m-2 p-4 border rounded">
            <div className="d-flex">
                <div >
                    <h3>Origen</h3>
                    <select className="form-select"d name="" id="">
                        <option value="">Ezeiza</option>
                        <option value="">Aeroparque</option>
                        <option value="">Bariloche</option>
                    </select>
                </div>
                <div>
                    <h3>Destino</h3>
                    <select className="form-select" name="" id="">
                        <option value="">Ezeiza</option>
                        <option value="">Aeroparque</option>
                        <option value="">Bariloche</option>
                    </select>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <h3>Ida</h3>
                    <input className="form-select" type="date" name="" id="" />
                </div>
                <div>
                    <h3>Vueltas</h3>
                    <input className="form-select" type="date" name="" id="" />
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <h3>Cabina</h3>
                    <select className="form-select" name="" id="">
                        <option value="">Economica</option>
                        <option value="">Medio</option>
                        <option value="">Vip</option>
                    </select>
                </div>
                <div className="d-flex">
                    <div className="d-flex flex-column">
                        <p>Adultos</p>
                        <input className={`form-control ${styles.input}`} type="number"/>
                    </div>
                    <div>
                        <p>Niños</p>
                        <input  className={`form-control ${styles.input}`} type="number"/>
                    </div>
                    <div>
                        <p>Bebes</p>
                        <input className={`form-control ${styles.input}`} type="number"/>
                    </div>
                </div>
            </div>
        </form>
        
    )
}

export default Form