# Cómo editar el portfolio

La información profesional está separada del diseño. Para actualizar textos, experiencias, estudios, proyectos, habilidades o cursos solo hay que editar:

`content/profile.json`

## Añadir una experiencia

Dentro de `experience`, duplica una experiencia existente y modifica sus campos:

```json
{
  "company": "Nombre de la empresa",
  "role": "Puesto",
  "location": "Ciudad, país",
  "period": "Jan 2027 - Present",
  "summary": "Resumen breve visible en la vista tipo CV.",
  "details": [
    "Responsabilidad o logro detallado.",
    "Segunda responsabilidad o logro."
  ],
  "skills": ["Python", "SQL"]
}
```

## Añadir un curso

1. Copia el certificado a `public/certificates/` con un nombre sencillo, por ejemplo `nuevo-curso.pdf`.
2. Añade una ficha dentro de `courses`:

```json
{
  "title": "Nombre del curso",
  "provider": "Entidad",
  "date": "Jan 15, 2027",
  "duration": "4 hrs",
  "category": "ML & MLOps",
  "certificate": "/certificates/nuevo-curso.pdf",
  "featured": false
}
```

Categorías existentes:

- `GenAI & deep learning`
- `ML & MLOps`
- `Python & data`
- `AI foundations`

Si `featured` es `true`, el curso aparecerá también entre los certificados destacados.

## Actualizar Current focus

La sección `Current focus` se gestiona desde la lista `currentFocus`. Cada elemento puede incluir:

```json
{
  "status": "In progress",
  "title": "Nombre de la certificación o proyecto",
  "description": "Descripción breve y factual.",
  "link": "https://enlace-opcional.com",
  "linkLabel": "Texto del enlace"
}
```

Para añadir un nuevo objetivo, duplica uno de los elementos existentes. Si todavía no tiene una página pública, elimina `link` y `linkLabel`.

## Publicar un cambio

Desde GitHub puedes abrir `content/profile.json`, pulsar el icono de edición, guardar mediante **Commit changes** y esperar a que GitHub Pages publique la actualización automáticamente.

Importante: conserva las comas y comillas del archivo. Si prefieres no tocarlo, el mismo cambio puede realizarse indicando qué información debe añadirse o corregirse.
