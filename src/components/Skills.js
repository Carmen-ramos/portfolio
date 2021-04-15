import "../stylesheets/layout/_skills.scss";

function Skills() {
  return (
    <section class="skills">
      Aqui van mis skills
      <section class="fortalezasydebilidades">
        <div class="fortalezasydebilidades__containertriangle">
          <div class="fortalezasydebilidades__containertriangle--triangle"></div>
        </div>
        <div class="container section fortalezasydebilidades__contenidos">
          <div class="fortalezas">
            <h2 class="title-2">Fortalezas</h2>
            <p>
              Somos un equipo de mujeres valientes, luchadoras y que les encanta
              viajar. Venimos de lugares diferentes y tenemos distintos
              aprendizajes. Todos ellos puestos en común, nos van a hacer
              superar todos los retos que se pongan en nuestro camino. Vamos a
              hacer las mejores webs del universo, y te invitamos a conocernos.
            </p>
          </div>
          <div class="debilidades">
            <h2 class="title-2">Debilidades</h2>
            <p>
              Empezamos en un mundo nuevo y eso supone un reto muy importante
              para nosotras. Somos muy trabajadoras y aunque vengan momentos
              difíciles, estoy segura que los vamos a superar todas unidas.
              Tenemos mucho que aprender, pero pensamos que podemos aportar
              muchas cosas al mundo de la programación.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Skills;
