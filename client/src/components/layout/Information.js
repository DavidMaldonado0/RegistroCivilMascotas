import React from 'react'

const Information = () => {
    return (
            <section className="about py-5 ">
                <div className="container my-5 mx-auto aboutus">
                    <div data-aos="fade-up" data-aos-duration="1000" className="text pt-4 pb-4">
                        <h2>Registro Nacional de Mascotas y Animales de Compañía</h2>
                        <p>El Objetivo del Registro Civil de Mascotas es brindarle identidad única a las mascotas, 
                        en este registro el responsable del animal, tanto dueño, poseedor o quien lo tenga bajo 
                        su cuidado y se haga cargo de él deberá registrar a su mascota. Para esto, las mascotas previamente deben 
                        tener incorporado un Microchip que cumpla con la norma ISO 11784/85, 
                        es decir posea un código único de 11 dígitos.</p>
                        <div className="button">
                        <a href="#" className="btn btn-primary btn-mbtn btn-primary">Información</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Information
