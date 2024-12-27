import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      {/* Nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        {...register("nombre", {
          required: {
            value: true,
            message: "El nombre es requerido",
          },
          minLength: {
            value: 3,
            message: "El nombre debe tener al menos 3 caracteres",
          },
          maxLength: {
            value: 10,
            message: "El nombre no puede tener más de 10 caracteres",
          },
        })}
      />
      {errors.nombre && <span>{errors.nombre.message}</span>}

      {/* Correo */}
      <label htmlFor="correo">Correo</label>
      <input
        type="email"
        {...register("correo", {
          required: {
            value: true,
            message: "El correo es requerido",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "El correo no es válido",
          },
        })}
      />
      {errors.correo && <span>{errors.correo.message}</span>}

      {/* Contraseña */}
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          minLength: {
            value: 6,
            message: "La contraseña debe tener al menos 6 caracteres",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      {/* Confirmar contraseña */}
      <label htmlFor="confirmarPassword">Confirmar contraseña</label>
      <input
        type="password"
        {...register("confirmarPassword", {
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          validate: (value) =>
            value === watch("password") || "Las contraseñas no coinciden",
        })}
      />
      {errors.confirmarPassword && (
        <span>{errors.confirmarPassword.message}</span>
      )}

      {/* Fecha de nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input
        type="date"
        {...register("fechaNacimiento", {
          required: {
            value: true,
            message: "La fecha de nacimiento es requerida",
          },
          validate: (value) => {
            const fechaActual = new Date();
            const fechaNacimiento = new Date(value);
            const edad =
              fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            return edad >= 18 || "Debes tener al menos 18 años de edad";
          },
        })}
      />
      {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}

      {/* Pais */}
      <label htmlFor="pais">País</label>
      <select {...register("pais")}>
        <option value="MX">México</option>
        <option value="US">Estados Unidos</option>
        <option value="AR">Argentina</option>
        <option value="ES">España</option>
        <option value="CO">Colombia</option>
      </select>

      {watch("pais") === "AR" && (
        <>
          <input
            type="text"
            placeholder="Provincia"
            {...register("provincia", {
              required: {
                value: true,
                message: "La provincia es requerida",
              },
            })}
          />
          {errors.provincia && <span>{errors.provincia.message}</span>}
        </>
      )}

      {/* Archivo */}
      <label htmlFor="archivo">Archivo</label>
      <input type="file" {...register("archivo")} />

      {/* Terminos y condiciones */}
      <label htmlFor="terminos">Acepto los términos y condiciones</label>
      <input
        type="checkbox"
        {...register("terminos", {
          required: {
            value: true,
            message: "Debes aceptar los términos y condiciones",
          },
        })}
      />
      {errors.terminos && <span>{errors.terminos.message}</span>}

      <button type="submit">Enviar</button>

      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
}

export default App;
