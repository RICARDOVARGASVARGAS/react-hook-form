function App() {
  return (
    <form>
      {/* Nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" />

      {/* Correo */}
      <label htmlFor="correo">Correo</label>
      <input type="email" />

      {/* Contraseña */}
      <label htmlFor="password">Contraseña</label>
      <input type="password" />

      {/* Confirmar contraseña */}
      <label htmlFor="confirmarPassword">Confirmar contraseña</label>
      <input type="password" />

      {/* Fecha de nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input type="date" />

      {/* Pais */}
      <label htmlFor="pais">País</label>
      <select>
        <option value="MX">México</option>
        <option value="US">Estados Unidos</option>
        <option value="AR">Argentina</option>
        <option value="ES">España</option>
        <option value="CO">Colombia</option>
      </select>

      {/* Archivo */}
      <label htmlFor="archivo">Archivo</label>
      <input type="file" />

      {/* Terminos y condiciones */}
      <label htmlFor="terminos">Acepto los términos y condiciones</label>
      <input type="checkbox" />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
