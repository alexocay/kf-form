import React, { useState } from "react";
import "./Formulario.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          razon: "",
          comercial: "",
          nacionalidadEmpresa: "",
          constitucion: "",
          rfcEmpresa: "",
          regimenFiscal: "",
          industria: "",
          comprobante: "",
          numeroEmpresa: "",
          correoEmp: "",
          calleEm: "",
          numExEm: "",
          cpEm: "",
          colEm: "",
          cdEm: "",
          estEm: "",
          paisEm: "",
          nombre: "",
          nacimiento: "",
          estRe: "",
          paisNaRe: "",
          nacionalidadRe: "",
          curp: "",
          rfcRe: "",
          correoRe: "",
          numeroRepresentante: "",
          identificacion: "",
          calleRe: "",
          numExRe: "",
          cpRe: "",
          colRe: "",
          cdRe: "",
          estNaRe: "",
          paisRe: "",
          clabe: "",
          banco: "",
        }}
        validate={(valores) => {
          let errores = {};
          //Validación Razón Social
          if (!valores.razon) {
            errores.razon = "Por favor ingresa la razón social de tu empresa.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.razon)) {
            errores.razon =
              "Razón Social solo puede contener letras y espacios.";
          }
          //Validación nombre comercial
          if (!valores.comercial) {
            errores.comercial = "Por favor ingresa el nombre comercial.";
          } else if (!/^[a-zA-ZÀ-ÿ0-9_.\s]{1,40}$/.test(valores.comercial)) {
            errores.comercial =
              "El nombre comercial solo puede contener, letras, numeros, espacios y puntos.";
          }
          //Validación nacionalidad no vacía
          if (!valores.nacionalidadEmpresa) {
            errores.nacionalidadEmpresa =
              "Por favor ingresa la nacionalidad de la empresa.";
          } else if (
            !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nacionalidadEmpresa)
          ) {
            errores.nacionalidadEmpresa =
              "Nacionalidad no puede contener valores numéricos.";
          }

          //Validación fecha de constitucion

          if (!valores.constitucion) {
            errores.constitucion =
              "Por favor ingresa la fecha de constitución.";
          } else if (
            !/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(
              valores.constitucion
            )
          ) {
            errores.constitucion =
              "Formato de fecha invalido, intenta con día/mes/año.";
          }
          //Validacion RFC
          if (!valores.rfcEmpresa) {
            errores.rfcEmpresa = "RFC obligatorio.";
          } else if (
            !/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/.test(
              valores.rfcEmpresa
            )
          ) {
            errores.rfcEmpresa = "Formato de RFC inválido.";
          }
          //Validacion regimen fiscal

          if (!valores.regimenFiscal) {
            errores.regimenFiscal = "Por favor ingresa el régimen fiscal.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.regimenFiscal)) {
            errores.regimenFiscal =
              "Régimen Fiscal solo puede contener letras y espacios.";
          }
          //Validacion industria
          if (!valores.industria) {
            errores.industria =
              "Por favor ingresa el tipo de industria a la que perteneces.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.industria)) {
            errores.industria =
              "Industria solo puede contener letras y espacios.";
          }

          //Validacion IMG
          if (!window.FileReader) {
            errores.comprobante =
              "El navegador no soporta la lectura de archivos.";
          } else if (!valores.comprobante) {
            errores.comprobante = "Comprobante de domicilio obligatorio.";
          } else if (
            !/^.*\.(jpg|JPG|jpeg|JPEG|png|PNG)$/.test(valores.comprobante)
          ) {
            errores.comprobante = "El archivo a adjuntar no es una imagen.";
          }
          //Validación numero tel empresa
          if (!valores.numeroEmpresa) {
            errores.numeroEmpresa = "Campo obligatorio.";
          } else if (
            !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
              valores.numeroEmpresa
            )
          ) {
            errores.numeroEmpresa = "Número de telefono invalido.";
          }

          //Validación Correo Empresa

          //Validacion correo
          if (!valores.correoEmp) {
            errores.correoEmp = "Por favor ingresa un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correoEmp
            )
          ) {
            errores.correoEmp = "Correo electrónico inválido.";
          }

          // Validación calle o avenida
          if (!valores.calleEm) {
            errores.calleEm = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ_.\s]{1,40}$/.test(valores.calleEm)) {
            errores.calleEm = "Calle o Avenida invalida.";
          }
          //validacion num, exterior
          if (!valores.numExEm) {
            errores.numExEm = "Campo obligatorio";
          } else if (!/^[0-9]*$/.test(valores.numExEm)) {
            errores.numExEm =
              "Numero exterior solo puede contener numeros positivos";
          }
          //Validación de Codigo postal
          if (!valores.cpEm) {
            errores.cpEm = "Código postal obligatorio";
          } else if (!/^\d{4,5}$/.test(valores.cpEm)) {
            errores.cpEm = "Código Postal Invalido.";
          }
          //Validación Colonia
          if (!valores.colEm) {
            errores.colEm = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.colEm)) {
            errores.colEm = "Solo puede contener letras y espacios.";
          }
          //Validación Ciudad o Población
          if (!valores.cdEm) {
            errores.cdEm = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ_.\s]{1,40}$/.test(valores.cdEm)) {
            errores.cdEm = "Solo puede contener letras y espacios.";
          }
          //Validación Entidad Federativa o Estado
          if (!valores.estEm) {
            errores.estEm = "Campo Obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.estEm)) {
            errores.estEm = "Entidad o Estado incorrecto, intenta de nuevo.";
          }
          //Validacion País
          if (!valores.paisEm) {
            errores.paisEm = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.paisEm)) {
            errores.paisEm = "No puede contener numeros, intenta de nuevo.";
          }

          //Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre.";
          } else if (
            !/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
              valores.nombre
            )
          ) {
            errores.nombre =
              "Este no es un nombre correcto, intentalo de nuevo.";
          }

          //Validación de fecha nacimiento
          if (!valores.nacimiento) {
            errores.nacimiento = "Por favor ingresa la fecha de nacimiento.";
          } else if (
            !/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(
              valores.nacimiento
            )
          ) {
            errores.nacimiento =
              "Formato de fecha invalido, intenta con día/mes/año.";
          }
          //Validacion Entidad nacimiento
          if (!valores.estNaRe) {
            errores.estNaRe = "Campo Obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.estNaRe)) {
            errores.estNaRe = "Entidad incorrecta, intenta de nuevo.";
          }
          //Validacion País
          if (!valores.paisNaRe) {
            errores.paisNaRe = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.paisNaRe)) {
            errores.paisNaRe = "No puede contener numeros, intenta de nuevo.";
          }
          //Validación nacionalidad no vacía
          if (!valores.nacionalidadRe) {
            errores.nacionalidadRe = "Campo requerido.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nacionalidadRe)) {
            errores.nacionalidadRe =
              "Nacionalidad no puede contener valores numéricos.";
          }
          //Validación Curp
          if (!valores.curp) {
            errores.curp = "CURP obligatorio.";
          } else if (
            !/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/.test(
              valores.curp
            )
          ) {
            errores.curp = "Formato de CURP inválido, intenta de nuevo.";
          }
          //Validacion RFC Representante
          if (!valores.rfcRe) {
            errores.rfcRe = "RFC obligatorio.";
          } else if (
            !/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/.test(
              valores.rfcRe
            )
          ) {
            errores.rfcRe = "Formato de RFC inválido.";
          }
          //Validacion correo
          if (!valores.correoRe) {
            errores.correoRe = "Por favor ingresa un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correoRe
            )
          ) {
            errores.correoRe = "Correo electrónico inválido.";
          }
          //Validación numero tel repre
          if (!valores.numeroRepresentante) {
            errores.numeroRepresentante = "Campo Obligatorio.";
          } else if (
            !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
              valores.numeroRepresentante
            )
          ) {
            errores.numeroRepresentante = "Número de telefono invalido.";
          }
          //Validacion IMG
          if (!window.FileReader) {
            errores.identificacion =
              "El navegador no soporta la lectura de archivos.";
          } else if (!valores.identificacion) {
            errores.identificacion = "Documento de indentifiación obligatorio.";
          } else if (
            !/^.*\.(jpg|JPG|jpeg|JPEG|png|PNG)$/.test(valores.identificacion)
          ) {
            errores.identificacion = "El archivo a adjuntar no es una imagen.";
          }

          // Validación calle o avenida
          if (!valores.calleRe) {
            errores.calleRe = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ_.\s]{1,40}$/.test(valores.calleRe)) {
            errores.calleRe = "Calle o Avenida invalida.";
          }
          //validacion num, exterior
          if (!valores.numExRe) {
            errores.numExRe = "Campo obligatorio";
          } else if (!/^([0-9])*$/.test(valores.numExRe)) {
            errores.numExRe =
              "Numero exterior solo puede contener numeros positivos";
          }
          //Validación de Codigo postal
          if (!valores.cpRe) {
            errores.cpRe = "Código postal obligatorio";
          } else if (!/^\d{4,5}$/.test(valores.cpRe)) {
            errores.cpRe = "Código Postal Invalido.";
          }
          //Validación Colonia
          if (!valores.colRe) {
            errores.colRe = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.colRe)) {
            errores.colRe = "Solo puede contener letras y espacios.";
          }
          //Validación Ciudad o Población
          if (!valores.cdRe) {
            errores.cdRe = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ_.\s]{1,40}$/.test(valores.cdRe)) {
            errores.cdRe = "Solo puede contener letras y espacios.";
          }
          //Validación Entidad Federativa o Estado
          if (!valores.estRe) {
            errores.estRe = "Campo Obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.estRe)) {
            errores.estRe = "Entidad o Estado incorrecto, intenta de nuevo.";
          }
          //Validacion País
          if (!valores.paisRe) {
            errores.paisRe = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.paisRe)) {
            errores.paisRe = "No puede contener numeros, intenta de nuevo.";
          }

          //Validación clabe
          if (!valores.clabe) {
            errores.clabe = "Campo obligatorio.";
          } else if (!/^[0-9]{18}$/.test(valores.clabe)) {
            errores.clabe =
              "Número de CLABE invalido o incompleto, intenta de nuevo.";
          }

          //Validación Banco
          if (!valores.banco) {
            errores.banco = "Campo obligatorio.";
          } else if (!/^[a-zA-ZÀ-ÿ_.\s]{1,40}$/.test(valores.banco)) {
            errores.banco = "Solo puede contener, letras, espacios y puntos.";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form role="form" className="formulario">
            <div>
              <p className="intro">Registro</p>
              <div className="form-group">
                <h3>Datos Fiscales</h3>
                <label htmlFor="razon">Razón Social</label>
                <Field
                  type="text"
                  name="razon"
                  placeholder="Razón Social de la Empresa"
                  id="razon"
                />
                <ErrorMessage
                  name="razon"
                  component={() => <div className="error">{errors.razon}</div>}
                />
                <label htmlFor="comercial">Nombre Comercial</label>
                <Field
                  type="text"
                  name="comercial"
                  placeholder="Nombre Comercial de la Empresa"
                  id="comercial"
                />
                <ErrorMessage
                  name="comercial"
                  component={() => (
                    <div className="error">{errors.comercial}</div>
                  )}
                />
                <label htmlFor="nacionalidadEmpresa">Nacionalidad</label>
                <Field
                  type="text"
                  name="nacionalidadEmpresa"
                  placeholder="Nacionalidad de la Empresa"
                  id="nacionalidadEmpresa"
                />
                <ErrorMessage
                  name="nacionalidadEmpresa"
                  component={() => (
                    <div className="error">{errors.nacionalidadEmpresa}</div>
                  )}
                />
                <label htmlFor="constitucion">Fecha de Constitución</label>
                <Field
                  type="text"
                  name="constitucion"
                  placeholder="dd/mm/aaaa"
                  id="constitucion"
                />
                <ErrorMessage
                  name="constitucion"
                  component={() => (
                    <div className="error">{errors.constitucion}</div>
                  )}
                />
                <label htmlFor="rfcEmpresa">RFC</label>
                <Field
                  type="text"
                  name="rfcEmpresa"
                  placeholder="Registro Federal de Contribuyentes"
                  id="rfcEmpresa"
                />
                <ErrorMessage
                  name="rfcEmpresa"
                  component={() => (
                    <div className="error">{errors.rfcEmpresa}</div>
                  )}
                />
              </div>
              <label htmlFor="registroFiscal">Regimen Fiscal</label>
              <Field
                type="text"
                name="regimenFiscal"
                placeholder="Ej. General, Arrendamiento de inmuebles, Actividades profesionales, etc."
                id="regimenFiscal"
              />
              <ErrorMessage
                name="regimenFiscal"
                component={() => (
                  <div className="error">{errors.regimenFiscal}</div>
                )}
              />
              <label htmlFor="industria">Industria</label>
              <Field
                type="text"
                name="industria"
                placeholder="Ej. Hotelera y restaurantera."
                id="industria"
              />
              <ErrorMessage
                name="industria"
                component={() => (
                  <div className="error">{errors.industria}</div>
                )}
              />
              <label htmlFor="comprobante">Comprobante Legal</label>
              <Field
                type="file"
                className="form-control-file"
                name="comprobante"
                id="comprobante"
              />
              <ErrorMessage
                name="comprobante"
                component={() => (
                  <div className="error">{errors.comprobante}</div>
                )}
              />
              <label htmlFor="numeroEmpresa">Número Telefónico</label>
              <Field
                type="text"
                name="numeroEmpresa"
                placeholder="Ej. 353-184-4189"
                id="numeroEmpresa"
              />
              <ErrorMessage
                name="numeroEmpresa"
                component={() => (
                  <div className="error">{errors.numeroEmpresa}</div>
                )}
              />
              <label htmlFor="correoEmp">Correo Electrónico</label>
              <Field
                type="text"
                name="correoEmp"
                placeholder="correo@correo.com"
                id="correoEmp"
              />
              <ErrorMessage
                name="correoEmp"
                component={() => (
                  <div className="error">{errors.correoEmp}</div>
                )}
              />
            </div>
            <div>
              <div className="form-group">
                <h3>Domicilio Empresarial</h3>
                <label htmlFor="calleEm"> Calle o Avenida</label>
                <Field
                  type="text"
                  name="calleEm"
                  placeholder="Ej. Avenida Caltzontzin"
                  id="calleEm"
                />
                <ErrorMessage
                  name="calleEm"
                  component={() => (
                    <div className="error">{errors.calleEm}</div>
                  )}
                />
                <label htmlFor="numExEm"> Num. Exterior</label>
                <Field
                  type="number"
                  name="numExEm"
                  placeholder="Ej. 1242"
                  id="numExEm"
                />
                <ErrorMessage
                  name="numExEm"
                  component={() => (
                    <div className="error">{errors.numExEm}</div>
                  )}
                />
                <label htmlFor="numIntEm"> Num. Interior</label>
                <Field
                  type="number"
                  name="numIntEm"
                  placeholder="Ej. 12-B"
                  id="numIntEm"
                />
                <label htmlFor="cpEm">Código Postal</label>
                <Field
                  type="text"
                  name="cpEm"
                  placeholder="Ej. 59517"
                  id="cpEm"
                />
                <ErrorMessage
                  name="cpEm"
                  component={() => <div className="error">{errors.cpEm}</div>}
                />
                <label htmlFor="colEm">Colonia o Urbanización</label>
                <Field
                  type="text"
                  name="colEm"
                  placeholder="Ej. Guadalupe"
                  id="colEm"
                />
                <ErrorMessage
                  name="colEm"
                  component={() => <div className="error">{errors.colEm}</div>}
                />
                <label htmlFor="cdEm">Ciudad o Población</label>
                <Field
                  type="text"
                  name="cdEm"
                  placeholder="Ej. Guadalajara"
                  id="cdEm"
                />
                <ErrorMessage
                  name="cdEm"
                  component={() => <div className="error">{errors.cdEm}</div>}
                />
                <label htmlFor="estEm">Entidad Federativa o Estado</label>
                <Field
                  type="text"
                  name="estEm"
                  placeholder="Ej. Jalisco"
                  id="estEm"
                />
                <ErrorMessage
                  name="estEm"
                  component={() => <div className="error">{errors.estEm}</div>}
                />
                <label htmlFor="paisEm">País</label>
                <Field
                  type="text"
                  name="paisEm"
                  placeholder="Ej. México"
                  id="paisEm"
                />
                <ErrorMessage
                  name="paisEm"
                  component={() => <div className="error">{errors.paisEm}</div>}
                />
              </div>
            </div>
            <div>
              <div className="form-group">
                <h3>Representante Legal</h3>
                <label htmlFor="nombre">Nombre</label>
                <Field
                  type="text"
                  name="nombre"
                  placeholder="Nombre Representante Legal"
                  id="nombre"
                />
                <ErrorMessage
                  name="nombre"
                  component={() => <div className="error">{errors.nombre}</div>}
                />
                <div className="generoLabel">
                  <p htmlFor="genero">Genero</p>
                  <label>
                    <Field
                      type="radio"
                      name="genero"
                      value="Femenino"
                      checked
                    />
                    Femenino
                  </label>
                  <label>
                    <Field type="radio" name="genero" value="Masculino" />
                    Masculino
                  </label>
                  <label>
                    <Field type="radio" name="genero" value="pd" />
                    Prefiero no decirlo
                  </label>
                </div>
                <label htmlFor="nacimiento">Fecha de Nacimiento</label>
                <Field
                  type="text"
                  name="nacimiento"
                  placeholder="dd/mm/aaaa"
                  id="nacimiento"
                />
                <ErrorMessage
                  name="nacimiento"
                  component={() => (
                    <div className="error">{errors.nacimiento}</div>
                  )}
                />
                <label htmlFor="estNaRe">
                  Entidad Federativa de Nacimeinto
                </label>
                <Field
                  type="text"
                  name="estNaRe"
                  placeholder="Ej. Michoacán de Ocampo"
                  id="estNaRe"
                />
                <ErrorMessage
                  name="estNaRe"
                  component={() => (
                    <div className="error">{errors.estNaRe}</div>
                  )}
                />
                <label htmlFor="paisNaRe">País de Nacimiento</label>
                <Field
                  type="text"
                  name="paisNaRe"
                  placeholder="Ej. México"
                  id="paisNaRe"
                />
                <ErrorMessage
                  name="paisNaRe"
                  component={() => (
                    <div className="error">{errors.paisNaRe}</div>
                  )}
                />
                <label htmlFor="nacionalidadRe">Nacionalidad</label>
                <Field
                  type="text"
                  name="nacionalidadRe"
                  placeholder="Nacionalidad"
                  id="nacionalidadRe"
                />
                <ErrorMessage
                  name="nacionalidadRe"
                  component={() => (
                    <div className="error">{errors.nacionalidadRe}</div>
                  )}
                />
                <label htmlFor="curp">CURP</label>
                <Field
                  type="text"
                  name="curp"
                  placeholder="Clave Única de Registro de Población"
                  id="curp"
                />
                <ErrorMessage
                  name="curp"
                  component={() => <div className="error">{errors.curp}</div>}
                />
                <label htmlFor="rfcRe">RFC</label>
                <Field
                  type="text"
                  name="rfcRe"
                  placeholder="Registro Federal de Contribuyentes"
                  id="rfcRe"
                />
                <ErrorMessage
                  name="rfcRe"
                  component={() => <div className="error">{errors.rfcRe}</div>}
                />
                <div className="estadoLabel">
                  <p htmlFor="estadoCivil">Estado Civil</p>
                  <label id="civil">
                    <Field
                      type="radio"
                      name="estadoCivil"
                      value="Soltero(a)"
                      checked
                    />
                    Soltero(a)
                  </label>
                  <label id="civil">
                    <Field type="radio" name="estadoCivil" value="Casado(a)" />
                    Casado(a)
                  </label>
                  <label id="civil">
                    <Field
                      type="radio"
                      name="estadoCivil"
                      value="Union Libre"
                    />
                    Unión Libre
                  </label>
                  <label id="civil">
                    <Field
                      type="radio"
                      name="estadoCivil"
                      value="Divorciado(a)"
                    />
                    Divorciado(a)
                  </label>
                  <label id="civil">
                    <Field type="radio" name="estadoCivil" value="Viudo(a)" />
                    Viudo(a)
                  </label>
                  <label id="civil">
                    <Field type="radio" name="estadoCivil" value="pd" />
                    Prefiero no decirlo
                  </label>
                </div>

                <label htmlFor="correoRe">Correo Electrónico</label>
                <Field
                  type="text"
                  name="correoRe"
                  placeholder="correo@correo.com"
                  id="correoRe"
                />
                <ErrorMessage
                  name="correoRe"
                  component={() => (
                    <div className="error">{errors.correoRe}</div>
                  )}
                />
                <label htmlFor="numeroRepresentante">Número Telefónico</label>
                <Field
                  type="text"
                  name="numeroRepresentante"
                  placeholder="Ej. 353-184-4189"
                  id="numeroRepresentante"
                />
                <ErrorMessage
                  name="numeroRepresentante"
                  component={() => (
                    <div className="error">{errors.numeroRepresentante}</div>
                  )}
                />
                <label htmlFor="identificacion">
                  Documento de Identificación
                </label>
                <Field
                  type="file"
                  className="form-control-file"
                  name="identificacion"
                  id="identificacion"
                />
                <ErrorMessage
                  name="identificacion"
                  component={() => (
                    <div className="error">{errors.identificacion}</div>
                  )}
                />
              </div>
            </div>

            <div>
              <div className="form-group">
                <h3>Domicilio Representante Legal</h3>
                <label htmlFor="calleRe"> Calle o Avenida</label>
                <Field
                  type="text"
                  name="calleRe"
                  placeholder="Ej. Avenida Caltzontzin"
                  id="calleRe"
                />
                <ErrorMessage
                  name="calleRe"
                  component={() => (
                    <div className="error">{errors.calleRe}</div>
                  )}
                />
                <label htmlFor="numExRe"> Num. Exterior</label>
                <Field
                  type="number"
                  name="numExRe"
                  placeholder="Ej. 1242"
                  id="numExRe"
                />
                <ErrorMessage
                  name="numExRe"
                  component={() => (
                    <div className="error">{errors.numExRe}</div>
                  )}
                />
                <label htmlFor="numIntRe"> Num. Interior</label>
                <Field
                  type="number"
                  name="numIntRe"
                  placeholder="Ej. 12-B"
                  id="numIntRe"
                />
                <label htmlFor="cpRe">Código Postal</label>
                <Field
                  type="text"
                  name="cpRe"
                  placeholder="Ej. 59517"
                  id="cpRe"
                />
                <ErrorMessage
                  name="cpRe"
                  component={() => <div className="error">{errors.cpRe}</div>}
                />
                <label htmlFor="colRe">Colonia o Urbanización</label>
                <Field
                  type="text"
                  name="colRe"
                  placeholder="Ej. Guadalupe"
                  id="colRe"
                />
                <ErrorMessage
                  name="colRe"
                  component={() => <div className="error">{errors.colRe}</div>}
                />
                <label htmlFor="cdRe">Ciudad o Población</label>
                <Field
                  type="text"
                  name="cdRe"
                  placeholder="Ej. Guadalajara"
                  id="cdRe"
                />
                <ErrorMessage
                  name="cdRe"
                  component={() => <div className="error">{errors.cdRe}</div>}
                />
                <label htmlFor="estRe">Entidad Federativa o Estado</label>
                <Field
                  type="text"
                  name="estRe"
                  placeholder="Ej. Jalisco"
                  id="estRe"
                />
                <ErrorMessage
                  name="estRe"
                  component={() => <div className="error">{errors.estRe}</div>}
                />
                <label htmlFor="paisRe">País</label>
                <Field
                  type="text"
                  name="paisRe"
                  placeholder="Ej. México"
                  id="paisRe"
                />
                <ErrorMessage
                  name="paisRe"
                  component={() => <div className="error">{errors.paisRe}</div>}
                />
              </div>
            </div>

            <div>
              <div className="form-group">
                <h3>Cuenta Bancaria</h3>
                <label htmlFor="clabe">CLABE</label>
                <Field
                  type="text"
                  name="clabe"
                  placeholder="CLABE Bancaria "
                  id="clabe"
                />
                <ErrorMessage
                  name="clabe"
                  component={() => <div className="error">{errors.clabe}</div>}
                />
                <label htmlFor="clabe">Banco</label>
                <Field
                  type="text"
                  name="banco"
                  placeholder="Institución Financiera"
                  id="banco"
                />
                <ErrorMessage
                  name="banco"
                  component={() => <div className="error">{errors.banco}</div>}
                />
              </div>
            </div>

            <div className="botonFinal">
              <button type="submit">Enviar</button>
            </div>
            {formularioEnviado && (
              <p className="exito">¡Formulario enviado con exito!.</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
