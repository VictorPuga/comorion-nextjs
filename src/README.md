# Hola amiwos!!!!!

Este es el maravilloso codebase para el frontend de la comunidad orión que será el event manager predilecto del PIT y en el futuro de todos los Tec y Parques Tecnológicos del planeta!

Para uniciar el servidor:

```bash
$ yarn
$ HTTPS=true yarn start
```

Si no tienen yarn

```bash
$ npm i -g yarn
```

Para sus cosas cholas, hagan un fork, lo hace más fácil.

Para hacer commits, un pre-commit hook está habilitado llamado husky. Es muy problemático y por el momento no vamos a lidiar con él. Por lo tanto:

```bash
$ git commit -m "commit message" --no-verify
```

y también

```bash
$ git push -m "commit message" --no-verify
```

Sé que esto es sub-optimo pero los git hooks son magia pero no hay tiempo.

La distribución de los trabajos ha quedado de esta manera:

| Humano | Concepto                   | File principal                 | Deadline |
| ------ | -------------------------- | ------------------------------ | -------- |
| Ale    | 404                        | app/views/NotFound/            | 9 junio  |
| Felipe | Screen de crear evento     | app/views/CreateEvent/         | 9 junio  |
| Felipe | Screen de tomar asistencia | app/views/AdminTakeAttendance/ | 9 junio  |
| Yessi  | Screen de crear equipo     | app/views/CreateTeam/          | 9 junio  |
| Carlos | Screen de crear equipo     | app/views/CreateTeam/          | 9 junio  |
| Cyndi  | Screen de evento           | app/views/Event/               | 9 junio  |
| Cyndi  | Screen de validar equipos  | app/views/AdminValidateTeams/  | 15 junio |
| Yessi  | Screen de equipos          | app/views/AdminValidateTeams/  | 15 junio |
| Carlos | Screen de equipo           | app/views/TeamDashboard/       | 15 junio |
| Ale    | Footer                     | app/components/Footer/         | 15 junio |

Les recuerdo que las entidades que existen en el modelo son:

- User
  Aquel que asiste a eventos
- Team
  Un usuario puede dar de alta un Team que, luego de aprobación, puede crear eventos
- Event
  Un evento
- Event Feedback
  Feedback del evento

Para usar datos, importen el repositorio de la entidad que quieran utilizar y pasen como primer argumento el string "mock", para que use datos mock y por fines de desarrollo.

Toda la codebase está escrita en typescript y los types que están en src/@types son muy importantes, moverlos es muy problemático y antes de cualquier movimiento de su interfaz, hay que comentarlo.

La codebase es muy escalable y para mantenerlo así es imperativo intentar lo más posible "quedarse en su file" y no mover cosas fuera. Si fuera necesario agregar alguna utility function o algo similar está bien, incluso agregar algún package no muy pesado. Para cambios más grandes, hay que comentarlo todos.

### Los roles son tentativo, pueden hacer switches. Pero las deadlines NO son tentativas y son sumamente importantes.

PD: solamente usen functional components de React. Nada de clases por favor.

Como última nota, quiero agradecerles a todos muchisimo trabajar conmigo para dejar este proyecto genial y funcionando en esta deadlina tan ambiciosa que tiene el parque Orión.

Siento no haber sido suficientemente inclusivo con uds sobre las decisiones que se han tomado en este proyecot que comenzó siendo suyos y de Raúl pero que mutó muy rápidamente por las circumstancias. Asumo responsablidad de haber hecho esos cambios más dificil por no tomarlos en cuenta al nivel que debí.

Muchas gracias chavos y a codear!
